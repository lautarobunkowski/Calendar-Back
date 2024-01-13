import { sequelize, User } from "../database.js";

const postUser = async (name, email) => {
  try {
    const result = await User.findOrCreate({
      where: { email, name },
      defaults: { email, name },
    });
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
};

export default postUser;
