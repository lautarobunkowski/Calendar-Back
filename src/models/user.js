import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        // allowNull: false,
        primaryKey: true,
      },
      email: { type: DataTypes.STRING, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      // phone: {type: DataTypes.STRING(20), allowNull: false}
    },
    { timestamps: false }
  );
};
