import { postServiceController } from "../controllers/serviceControllers.js";

export const postServiceHandler = async (req, res) => {
  try {
    const { name, duration, startTime, endTime, days } = req.body;
    const response = await postServiceController(
      name,
      duration,
      startTime,
      endTime,
      days
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
