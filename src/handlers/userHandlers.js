// controller -----------------------------------
import { postUserController, getUserController } from "../controllers/userControllers.js";


export const getUserHandler = async (req, res) => {
  try {
    const {name} = req.query
    const response = await getUserController(name);
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
