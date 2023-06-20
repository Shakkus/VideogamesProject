const { DataTypes,Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogames',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      platform:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull:false
      },
      img:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      released:{
        type:DataTypes.FLOAT,
        allowNull:false
      },
      rating:{
        type:DataTypes.FLOAT,
        allowNull:false
      }
    },{timestamps: false});
  };
