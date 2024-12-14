const { Sequelize } = require('sequelize');
const config = require('../config.json');

const sequelize = new Sequelize(config.db_name, config.user, config.password, {
    host: config.host,
    dialect: 'postgres',
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexión con la base de datos exitosa.');
        // Sincronización de los modelos con la base de datos
        sequelize.sync({ force: true })
            .then(() => {
                console.log('Modelos sincronizados correctamente con la base de datos');
            })
            .catch((err) => {
                console.error('Error al sincronizar los modelos con la base de datos:', err);
            });
    })
    .catch(err => console.error('No se pudo conectar:', err));


module.exports = sequelize;