import { Appointment, User } from "../database.js";

const postAppointmentController = (date, time, name, email) => {
    try {
        const [ user, isCreatedUser] = User.findOrCreate({
            where:{ email },
            defaults: {
                email: email,
                name: name
            }
        })
        const [ appointment, isCreatedAppointment] = Appointment.findOrCreate({
            where:{ date, time },
            defaults: {
                date: date,
                time: time
            }
        })
        if(isCreatedAppointment){
            return {
                "error": "Conflicto de turno",
                "message": "La fecha y hora seleccionadas ya están ocupadas por otro turno. Por favor, elige una fecha y hora diferente."
              }
        }
        return appointment

    } catch (error) {
        throw error
    }
}

export default {
    postAppointmentController
}