import axios, { all } from "axios";

const allUsers = async () => {
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

export default allUsers;
