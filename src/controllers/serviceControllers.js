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
