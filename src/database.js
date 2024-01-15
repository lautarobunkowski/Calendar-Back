import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
import AppointmentCreate from "./models/appointment.js";
import UserCreate from "./models/user.js";
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false, native: false }
);

AppointmentCreate(sequelize);
UserCreate(sequelize);

const { User, Appointment } = sequelize.models;

User.hasMany(Appointment)
Appointment.belongsTo(User)


export { User, Appointment, sequelize };
