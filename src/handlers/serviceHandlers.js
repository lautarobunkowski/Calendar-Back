import {
  postServiceController,
  getServiceController,
} from "../controllers/serviceControllers.js";

export const postServiceHandler = async (req, res) => {
  try {
    const { name, duration, startTime, endTime, days, location } = req.body;
    const response = await postServiceController(
      name,
      duration,
      startTime,
      endTime,
      days,
      location
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getServiceHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const response = await getServiceController(name);

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
