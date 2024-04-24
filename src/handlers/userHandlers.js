// controller -----------------------------------
import {
  postUserController,
  getUserController,
} from "../controllers/userControllers.js";

export const postUserHandler = async (req, res) => {
  try {
    const { name, email } = req.body;
    const response = await postUserController(name, email);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const response = await getUserController(name);
    res.status(200).json(response);
  } catch (error) {
    if (!error.status) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(error.status).json({ error: error.message });
  }
};
