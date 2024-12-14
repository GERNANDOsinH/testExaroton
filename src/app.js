const express = require('express');
const { create_user, get_all_users, get_user, update_user, destroy_user } = require('../controllers/user_controller')

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});

app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await get_all_users();
        res.json(usuarios);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
});

app.get('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await get_user(id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error al encontrar el usuario', error });
    }
});

app.post('/usuarios', async (req, res) => {
    const { nombre, email, password, rol } = req.body;
    try {
        const usuario = await create_user(nombre, email, password, rol);
        if (usuario) {res.status(201).json(usuario);}
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error });
    }
});

app.put('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, rol } = req.body;
    try {
        await update_user(id, nombre, rol);
        res.json({ message: `Usuario con ID ${id} actualizado.` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await destroy_user(id);
        res.json({ message: `Usuario con ID ${id} eliminado.` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});