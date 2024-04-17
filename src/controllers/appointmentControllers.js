import { Appointment, User, Service } from "../database.js";
import dayAppointmentsCalculator from "../utils/dayAppointmentsCalculator.js";

export const postAppointmentController = async (
  date,
  time,
  name,
  email,
  service,
  phone
) => {
  try {
    const serviceFind = await Service.findOne({
      where: {
        name: service,
      },
    });

    if (serviceFind === null) {
      return {
        status: 409,
        error: "Conflicto de Servicio",
        message: "Servicio no encontrado",
      };
    }

    const [user, isCreatedUser] = await User.findOrCreate({
      where: { email },
      defaults: {
        email: email,
        name: name,
        phone: phone,
      },
    });
    const [appointment, isCreatedAppointment] = await Appointment.findOrCreate({
      where: { date, time },
      defaults: {
        date: date,
        time: time,
      },
    });

    if (!isCreatedAppointment) {
      return {
        status: 409,
        message:
          "La fecha y hora seleccionadas ya están ocupadas por otro turno. Por favor, elige una fecha y hora diferente.",
      };
    }
    appointment.setService(serviceFind);
    return await appointment.setUser(user);
  } catch (error) {
    throw error;
  }
};

export const getAllAppointmentController = async (service, date) => {
  try {
    const decodeService = decodeURIComponent(service);

    const serviceFind = await Service.findOne({
      where: {
        name: decodeService,
      },
    });
    if (serviceFind === null) {
      return {
        error: "Conflicto de Servicio",
        message: "Servicio no encontrado",
      };
    }

    const allAppoinments = (
      await Appointment.findAll({
        where: { date },
      })
    ).map((app) => {
      return app.get();
    });

    return {
      ...serviceFind.dataValues,
      appointments: dayAppointmentsCalculator(
        serviceFind.startTime,
        serviceFind.endTime,
        serviceFind.duration,
        allAppoinments
      ),
    };
  } catch (error) {
    throw error;
  }
};

export const getAppointmentController = async (appointmentId) => {
  try {
    // const decodeService = decodeURIComponent(service)

    // const serviceFind = await Service.findOne({
    //   where: {
    //     name: decodeService,
    //   },
    // });
    // if (serviceFind === null) {
    //   return {
    //     error: "Conflicto de Servicio",
    //     message: "Servicio no encontrado",
    //   };
    // }

    const appoinment = await Appointment.findByPk(appointmentId, {
      include: [
        { model: User, attributes: ["name"] },
        { model: Service, attributes: ["name", "location", "duration"] },
      ],
    });

    if (appoinment === undefined) {
      return {
        error: "Conflicto de Turno",
        status: 404,
        message: "el Turno solicitado no existe",
      };
    }
    return appoinment;
  } catch (error) {
    throw error;
  }
};
