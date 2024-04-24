import { Service, User } from "../database.js";

export const postServiceController = async (
  name,
  duration,
  startTime,
  endTime,
  days,
  location,
  UserId
) => {
  try {
    const lowerCaseName = name.toLowerCase();
    const serviceFind = await Service.findOne({
      where: { name: lowerCaseName },
    });
    if (serviceFind) {
      return {
        error: "Conflicto de Servicio",
        message: "Ya existe un servicio con ese Nombre",
      };
    }

    const service = await Service.create({
      name: lowerCaseName,
      duration,
      startTime,
      endTime,
      days,
      location,
      UserId,
    });
    // console.log(service);

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
      include: User,
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
