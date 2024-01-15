// controller -----------------------------------
import { postUserController, getUsersController } from "../controllers/userControllers.js";


export const getUsersHandler = async (req, res) => {
  try {
    const response = await getUsersController();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postUserHandler = async (req, res) => {
  try {
    const { name, email } = req.body;
    const response = await postUserController(name, email);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
