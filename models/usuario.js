const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../database/config'); 

const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: DataTypes.STRING,
    }
  }, {
    tableName: 'usuario',
}, { // Encriptar la contraseña del usuario.
    hooks: {
        beforeCreate: async (user) => {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(user.password, saltRounds);
            user.password = hashedPassword;
        }
    }
});

module.exports = Usuario;