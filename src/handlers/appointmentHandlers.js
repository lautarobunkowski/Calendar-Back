import { postAppointmentController } from "../controllers/appointmentControllers.js";

postAppointmentHandler = async(req, res) => {
 try {
    const { date, time, name, email } = req.body;
    const response = await postAppointmentController(date, time, name, email)
    res.status(200).json(response)
 } catch (error) {
    res.status(500).json({error: error.message})
 }
}

export default {
    postAppointmentHandler
}