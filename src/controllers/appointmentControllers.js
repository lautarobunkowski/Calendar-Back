import { Appointment, User, Service } from "../database.js";
import moment from "moment";

export const postAppointmentController = async (
  date,
  time,
  name,
  email,
  service
) => {
  try {
    const serviceFind = await Service.findOne({
      where: {
        name: service,
      },
    });

    if (serviceFind === null) {
      return {
        error: "Conflicto de Servicio",
        message: "Servicio no encontrado",
      };
    }

    const [user, isCreatedUser] = await User.findOrCreate({
      where: { email },
      defaults: {
        email: email,
        name: name,
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
        error: "Conflicto de turno",
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
    const serviceFind = await Service.findOne({
      where: {
        name: service,
      },
    });
    if (serviceFind === null) {
      return {
        error: "Conflicto de Servicio",
        message: "Servicio no encontrado",
      };
    }

    const allAppoinments = await Appointment.findAll({
      where: { date },
    });

    console.log(moment());

    // const dayAppointmentsCalculator = (
    //   startTime,
    //   endTime,
    //   duration,
    //   allAppoinments
    // ) => {
    //   const daysAppointments = [];
    //   let startTimeMinutes = 0;
    //   let endTimeMinutes = 0;
    //   let durationPerMinutes = 0;
    //   startTime.split(":").forEach((e, i) => {
    //     if (i === 0) {
    //       return (startTimeMinutes = Number(e) * 60);
    //     }
    //     startTimeMinutes += Number(e);
    //   });
    //   endTime.split(":").forEach((e, i) => {
    //     if (i === 0) {
    //       return (endTimeMinutes = Number(e) * 60);
    //     }
    //     endTimeMinutes += Number(e);
    //   });
    //   duration.split(":").forEach((e, i) => {
    //     if (i === 0) {
    //       return (durationPerMinutes = Number(e) * 60);
    //     }
    //     durationPerMinutes += Number(e);
    //   });

    //   const appointmentsPerDay =
    //     (endTimeMinutes - startTimeMinutes) / durationPerMinutes;

    //   let auxTime = startTimeMinutes;
    //   for (let i = 0; i < appointmentsPerDay; i++) {
    //     daysAppointments.push({
    //       date: new Date(`${date}T`),
    //       available: true,
    //     });
    //   }

    //   return daysAppointments;
    // };
    // console.log(
    //   dayAppointmentsCalculator(
    //     serviceFind.startTime,
    //     serviceFind.endTime,
    //     serviceFind.duration,
    //     allAppoinments
    //   )
    // );

    return { ...serviceFind.dataValues, appointments: allAppoinments };
  } catch (error) {
    throw error;
  }
};
