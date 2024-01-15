import axios, { all } from "axios";
import { sequelize, User } from "../database.js";

const postUserController = async (name, email) => {
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


const getUsersController = async () => {
  try {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    if (!data) {
      throw new Error("data no found");
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export default {
  postUserController,
  getUsersController
};
