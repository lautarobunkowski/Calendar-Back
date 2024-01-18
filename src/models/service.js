import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define(
    "Service",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        // allowNull: false,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      duration: { type: DataTypes.TIME, allowNull: false },
      startTime: { type: DataTypes.TIME, allowNull: false },
      endTime: { type: DataTypes.TIME, allowNull: false },
      days: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        // days: {
        //   type: DataTypes.ENUM(
        //     "Lunes",
        //     "Martes",
        //     "Miercoles",
        //     "Jueves",
        //     "Viernes",
        //     "Sabado",
        //     "Domingo"
        //   ),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
