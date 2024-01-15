// controller -----------------------------------
import {getUsersController, postUserController} from "../controllers/userControllers";


const getUsersHandler = async (req, res) => {
  try {
    const response = await getUsersController();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postUserHandler = async (req, res) => {
  try {
    const { name, email } = req.body;
    const response = await postUserController(name, email);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {getUsersHandler, postUserHandler};
