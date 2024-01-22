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
  const durationPerMinutes = dayjs
    .duration(dayjs(duration, "HH:mm:ss").diff(dayjs("00:00:00", "HH:mm:ss")))
    .asMinutes();

  const appointmentsPerDay =
    dayjs
      .duration(dayjs(endTime, "HH:mm:ss").diff(dayjs(startTime, "HH:mm:ss")))
      .asMinutes() / durationPerMinutes;

  const daysAppointments = [];

  for (let i = 0; i < appointmentsPerDay; i++) {
    const findAppointment = allAppoinments.find(
      (app) => app.time === startTime
    );

    if (findAppointment !== undefined) {
      daysAppointments.push({
        time: findAppointment.time,
        available: false,
      });
    } else {
      daysAppointments.push({
        time: startTime,
        available: true,
      });
    }

    startTime = dayjs(startTime, "HH:mm:ss")
      .add(durationPerMinutes, "minute")
      .format("HH:mm:ss");
    console.log(startTime);
  }

  return daysAppointments;
};

export default dayAppointmentsCalculator;
