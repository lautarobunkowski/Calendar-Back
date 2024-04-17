import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import duration from "dayjs/plugin/duration.js";

// import tz from "dayjs/plugin/timezone.js";

dayjs.extend(customParseFormat);
dayjs.extend(duration);
// dayjs.extend(tz);
// console.log(dayjs.tz.guess());

const dayAppointmentsCalculator = (
  startTime,
  endTime,
  duration,
  allAppoinments
) => {
  // duración de tiempo laboral
  const durationPerMinutes = dayjs
    .duration(dayjs(duration, "HH:mm:ss").diff(dayjs("00:00:00", "HH:mm:ss")))
    .asMinutes();

  //la cantidad de turno segun el tiempo laboral
  const appointmentsPerDay =
    dayjs
      .duration(dayjs(endTime, "HH:mm:ss").diff(dayjs(startTime, "HH:mm:ss")))
      .asMinutes() / durationPerMinutes;

  //array de contendra los turno del dia
  const daysAppointments = [];

  // bucle for que itera en la cantidad de turno por dia y segun la
  // de turnos que haya en la BD busco si matchea con el startTime y si es asi
  // agrega no lo agrega al array y pasa al siguiente turno hasta completar los turno por dia

  for (let i = 0; i < appointmentsPerDay; i++) {
    const findAppointment = allAppoinments.find(
      (app) => app.time === startTime
    );

    if (findAppointment === undefined) {
      daysAppointments.push({
        time: startTime,
        available: true,
      });
    }

    //este hace lo mismo que le bucle for anterior con la diferencia que
    // agrega los turno esten o no disponibles con una propiedad que
    // identifica si esta disponible o no

    // for (let i = 0; i < appointmentsPerDay; i++) {
    //   const findAppointment = allAppoinments.find(
    //     (app) => app.time === startTime
    //   );

    //   if (findAppointment !== undefined) {
    //     daysAppointments.push({
    //       time: findAppointment.time,
    //       available: false,
    //     });
    //   } else {
    //     daysAppointments.push({
    //       time: startTime,
    //       available: true,
    //     });
    //   }

    // modifico el tiempo de inicio al siguiente turno segun el tiempo que lleve
    // cada turno y reinicio el bucle con el siguiente horario
    startTime = dayjs(startTime, "HH:mm:ss")
      .add(durationPerMinutes, "minute")
      .format("HH:mm:ss");
  }

  return daysAppointments;
};

export default dayAppointmentsCalculator;
