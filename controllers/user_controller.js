const Usuario = require('../models/usuario');

async function create_user(nombre, email, password, rol) {
    try {
        const user = await Usuario.create({ nombre, email, password, rol });
        console.log('Usuario creado con el id: ', user.id);
        return user;
    }
    catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            console.error('El correo ya está en uso.');
        } else {
            console.error('Error al crear el usuario:', error);
        }
        throw error;
    }
    
}

async function get_all_users() {
    try {
        const usuarios = await Usuario.findAll();
        return usuarios;
    }
    catch (error) {
        console.error("Error al obtener los usuarios: ", error);
    }
}

async function get_user(id_subject) {
    try {
        const user = await Usuario.findOne({ where: { id: id_subject } });
        if (!user) {
            console.log(`Usuario con ID ${id_subject} no encontrado.`);
        }
        return user;
    }
    catch (error) {
        console.error('Error al encontrar el usuario: ' , error)
    }
}

async function update_user(id_subject, nombre, rol) {
    try {
        let msg;
        const [affectedCount] = await Usuario.update({nombre, rol}, {where: {id: id_subject}});
        if (affectedCount === 0) {
            msg = `No se encontró un usuario con ID ${id_subject} para actualizar.`;
        } else {
            msg = `Usuario con ID ${id_subject} actualizado.`;
        }
        console.log(msg);
        return msg;
    }
    catch (error) {
        console.error("Error al actualizar el usuario: ", error);
    }
}

async function destroy_user(id_subject) {
    try {
        let msg;
        const deletedCount = await Usuario.destroy({ where: { id: id_subject } });
        if (deletedCount === 0) {
            msg = `No se encontró un usuario con ID ${id_subject} para eliminar.`;
        } else {
            msg = `Usuario con ID ${id_subject} eliminado.`;
            return true;
        }
        console.log(msg);
        return msg;
    }
    catch (error) {
        console.error('Error al eliminar el usuario: ', error);
    }
}

module.exports = {
    create_user,
    get_all_users,
    get_user,
    update_user,
    destroy_user,
};