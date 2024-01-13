import allUsers from "../controllers/allUsers.js";

const userGetHandler = async (req, res) => {
  try {
    const response = await allUsers();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default userGetHandler;
