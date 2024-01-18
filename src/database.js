// MODELS -----------------------------------------------
import AdminCreate from "./models/admin.js";
import ServiceCreate from "./models/service.js";
import AppointmentCreate from "./models/appointment.js";
import UserCreate from "./models/user.js";
// --------------------------------------------------------
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false, native: false }
);

AppointmentCreate(sequelize);
UserCreate(sequelize);

AdminCreate(sequelize);
ServiceCreate(sequelize);

const { User, Appointment, Admin, Service } = sequelize.models;

// Relationship ---------------------------
// Usuario-Turno
User.hasMany(Appointment);
Appointment.belongsTo(User);

// Admin-Servicio
Admin.hasMany(Service);
Service.belongsTo(Admin);

// Turno-servicio
Appointment.belongsTo(Service);
Service.hasMany(Appointment);

export { User, Appointment, Admin, Service, sequelize };
