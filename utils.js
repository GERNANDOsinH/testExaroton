const User = require('./models/User');

export async function create_user(nombre, email, password, rol) {
    try {
      await Usuario.create({ nombre, email, password, rol });
      console.log('Usuario creado');
    }
    catch (error) {
      console.error('Error al crear el usuario:', error);
      throw error;
    }
}

export async function get_all_users() {
    try {
        const usuarios = await Usuario.findAll();
        return usuarios;
    }
    catch (error) {
        console.error("Error al obtener los usuarios: ", err);
    }
}

export async function update_user(id_subject, nombre, rol) {
    try {
        await Usuario.update({nombre, rol}, {where: {id: id_subject}})
        console.log("Usuario actualizado con exito.");
    }
    catch (error) {
        console.error("Error al actualizar el usuario: ", error);
    }
}

export async function get_user(id_subject) {
    try {
        const user = await Usuario.findOne({ where: {id: id_subject}});
        return user;
    }
    catch (error) {
        console.error('Error al encontrar el usuario: ' , error)
    }
}

export async function destroy_user(id_subject) {
    try {
        await Usuario.destroy({ where: {id: id_subject}})
        console.log('Usuario eliminado.')
    }
    catch (error) {
        console.error('Error al eliminar el usuario: ', error);
    }
}