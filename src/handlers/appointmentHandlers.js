import {
  postAppointmentController,
  getAllAppointmentController,
  getAppointmentController,
} from "../controllers/appointmentControllers.js";

export const postAppointmentHandler = async (req, res) => {
  try {
    const { date, time, name, email, service, phone } = req.body;
    const response = await postAppointmentController(
      date,
      time,
      name,
      email,
      service,
      phone
    );
    if (response.status) {
      if (response.status === 409) {
        return res.status(409).json(response);
      }
    }
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

export const getAppointmentHandler = async (req, res) => {
  try {
    const appointmentId = req.params.appointmentId;
    const response = await getAppointmentController(appointmentId);
    if (response.error) {
      if (response.status === 404) {
        return res.status(404).json(response);
      }
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
