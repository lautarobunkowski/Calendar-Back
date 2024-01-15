import { Appointment, User } from "../database.js";

export const postAppointmentController = async(date, time, name, email) => {
    try {
        const [ user, isCreatedUser] = await User.findOrCreate({
            where:{ email },
            defaults: {
                email: email,
                name: name
            }
        })
        const [ appointment, isCreatedAppointment] = await Appointment.findOrCreate({
            where:{ date, time },
            defaults: {
                date: date,
                time: time,
            }
        })
        if(!isCreatedAppointment){
            return {
                "error": "Conflicto de turno",
                "message": "La fecha y hora seleccionadas ya están ocupadas por otro turno. Por favor, elige una fecha y hora diferente."
              }
        }
        return await appointment.setUser(user);

    } catch (error) {
        throw error
    }
}