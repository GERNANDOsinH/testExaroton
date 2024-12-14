const express = require('express');
const { create_user, get_all_users, get_user, update_user, destroy_user } = require('../controllers/user_controller')

const app = express();

app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});

app.get('/usuarios', () => {
    const usarios = get_all_users();
});

app.get('/usuarios/:id', (req) => {
    const { id } = req.params;
    const usuario = get_user(id);
});

app.post('/usuarios/:nombre/:email/:password/:rol', (req) => {
    const { nombre, email, password, rol } = req.params;
    create_user(nombre, email, password, rol);
});

app.put('/usuarios/:id/:nombre/:rol', (req) => {
    const { id, nombre, rol } = req.params;
    update_user(id, nombre, rol);
});

app.delete('/usuarios/:id', (req) => {
    const { id } = req.params;
    destroy_user(id);
});