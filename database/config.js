const { Sequelize } = require('sequelize');
const config = require('../config.json');

const sequelize = new Sequelize(config.db_name, config.user, config.password, {
    host: config.host,
    dialect: 'postgres',
});

sequelize.authenticate()
    .then(() => console.log('Conexión exitosa'))
    .catch(err => console.error('No se pudo conectar:', err));

module.exports = sequelize;