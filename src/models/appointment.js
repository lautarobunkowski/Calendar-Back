import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define(
    "Appoinment",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        // allowNull: false,
        primaryKey: true,
      },
      fecha: { type: DataTypes.DATE, allowNull: false },
      horario: { type: DataTypes.TIME, allowNull: false },
    },
    { timestamps: true }
  );
};
