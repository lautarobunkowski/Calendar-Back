import { Service } from "../database.js";

export const postServiceController = async (
  name,
  duration,
  startTime,
  endTime,
  days,
  location
) => {
  try {
    const lowerCaseName = name.toLowerCase();
    const [service, isCreatedService] = await Service.findOrCreate({
      where: { name: lowerCaseName },
      defaults: {
        duration,
        startTime,
        endTime,
        days,
        location,
      },
    });
    if (!isCreatedService) {
      return {
        error: "Conflicto de Servicio",
        message: "Ya existe un servicio con ese Nombre",
      };
    }

    return service;
  } catch (error) {
    throw error;
  }
};

export const getServiceController = async (name) => {
  try {
    const lowerCaseName = name.toLowerCase();
    const service = await Service.findOne({
      where: { name: lowerCaseName },
    });
    if (!service) {
      return {
        status: 404,
        error: "Conflicto de Servicio",
        message: "No existe servicio con ese nombre",
      };
    }

    return service;
  } catch (error) {
    throw error;
  }
};
