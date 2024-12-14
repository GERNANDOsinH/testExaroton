const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nombre_bd', 'usuario', 'contraseña', {
    host: 'localhost',
    dialect: 'postgres',
});

sequelize.authenticate()
    .then(() => console.log('Conexión exitosa'))
    .catch(err => console.error('No se pudo conectar:', err));

sequelize.sync({ force: true })
    .then(() => {
        console.log('¡Base de datos sincronizada (recreada) con éxito!');
    })
    .catch(error => console.error('Error al sincronizar:', error));

module.exports = sequelize;