import server from "./src/server.js";
import dotenv from "dotenv";
import { sequelize } from "./src/database.js";
dotenv.config();
const { PORT } = process.env;

server.listen(PORT, async () => {
  try {
    await sequelize.sync({ force: false});
    console.log("server listen on port", PORT);
  } catch (error) {
    // console.error("error syncsing database");
    console.error(error.message);
  }
});
