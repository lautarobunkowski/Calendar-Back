import { Service } from "../database.js";

export const postServiceController = async (
  name,
  duration,
  startTime,
  endTime,
  days
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

export const getServiceController = async (
  name
) => {
  console.log(name)
  try {
    const lowerCaseName = name.toLowerCase();
    const service= await Service.findOne({
      where: { name: lowerCaseName },
    });
    // console.log(service
    if (!service) {
      return {
        error: "Conflicto de Servicio",
        message: "No existe servicio con ese nombre",
      };
    }

    return service;
  } catch (error) {
    throw error;
  }
};
