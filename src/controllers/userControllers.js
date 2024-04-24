import { User, Service } from "../database.js";

export const postUserController = async (name, email) => {
  try {
    const findUser = await User.findOne({
      where: { email, name },
    });
    if (findUser) {
      throw new Error("the username or/and email is taken");
    }
    const result = await User.create({ email, name });
    return result;
  } catch (error) {
    throw error;
  }
};

export const getUserController = async (name) => {
  try {
    const user = await User.findOne({
      where: { name },
      include: Service,
    });
    if (!user) {
      throw {
        message: "user not found",
        status: 404,
      };
    }
    return user;
  } catch (error) {
    throw error;
  }
};
