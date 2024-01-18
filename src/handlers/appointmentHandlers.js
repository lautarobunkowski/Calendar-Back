import {
  postAppointmentController,
  getAllAppointmentController,
} from "../controllers/appointmentControllers.js";

export const postAppointmentHandler = async (req, res) => {
  try {
    const { date, time, name, email, service } = req.body;
    const response = await postAppointmentController(
      date,
      time,
      name,
      email,
      service
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllAppointmentHandler = async (req, res) => {
  try {
    const { service, date } = req.query;
    const response = await getAllAppointmentController(service, date);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
