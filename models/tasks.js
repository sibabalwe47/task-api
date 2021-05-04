const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  const Tasks = Sequelize.define("Tasks", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });
};
