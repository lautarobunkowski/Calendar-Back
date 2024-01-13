import postUser from "../controllers/postUser.js";

const userPostHandler = async (req, res) => {
  try {
    const { name, email } = req.body;
    const response = await postUser(name, email);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default userPostHandler;
