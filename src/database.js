import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
import UserCreate from "./models/user.js";
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false, native: false }
);

UserCreate(sequelize);

const { User } = sequelize.models;

export { User, sequelize };
