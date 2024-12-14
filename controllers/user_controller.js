const Usuario = require('../models/usuario');

async function create_user(nombre, email, password, rol) {
    try {
        const user = await Usuario.create({ nombre, email, password, rol });
        console.log('Usuario creado con el id: ', user.id);
    }
    catch (error) {
      console.error('Error al crear el usuario:', error);
      throw error;
    }
}

async function get_all_users() {
    try {
        const usuarios = await Usuario.findAll();
        return usuarios;
    }
    catch (error) {
        console.error("Error al obtener los usuarios: ", err);
    }
}

async function get_user(id_subject) {
    try {
        const user = await Usuario.findOne({ where: {id: id_subject}});
        return user;
    }
    catch (error) {
        console.error('Error al encontrar el usuario: ' , error)
    }
}

async function update_user(id_subject, nombre, rol) {
    try {
        const user = await Usuario.update({nombre, rol}, {where: {id: id_subject}})
        console.log(`Se han actualizado los parametros nombre y rol del usario a ${nombre} y ${rol}`);
    }
    catch (error) {
        console.error("Error al actualizar el usuario: ", error);
    }
}

async function destroy_user(id_subject) {
    try {
        await Usuario.destroy({ where: {id: id_subject}});
        console.log(`Usuario con el id ${id_subject} fue eliminado.`);
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