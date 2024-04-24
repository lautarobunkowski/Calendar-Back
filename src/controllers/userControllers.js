import { User, Service } from "../database.js";

export const postUserController = async (name, email, imageUrl) => {
  try {
    // crea al usuario si no existe y si existe simplemente retorna la informacion del usuario encontrado
    const userData = {
      name, 
      email
    }

    if(imageUrl){
      userData.imageUrl = imageUrl
    }

    const [user, isCreate] = await User.findOrCreate({
      where: { email, name},
      defaults: userData
    });
    
    if(!isCreate){
      user.dataValues.isCreate = false;
      return user
    }

    user.dataValues.isCreate = true;
    return user
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
