import { create_user, get_all_users, get_user, update_user, destroy_user } from './utils';

const express = require('express');
const app = express();

app.get('/usuarios', (req, res) => {
    const usarios = get_all_users();
});

app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const usuario = get_user(id);
});

app.post('/usuarios/:nombre/:email/:password/:rol', (req, res) => {
    const { nombre, email, password, rol } = req.params;
    create_user(nombre, email, password, rol);
});

app.put('/usuarios/:id/:nombre/:rol', (req, res) => {
    const { id, nombre, rol } = req.params;
    update_user(id, nombre, rol);
});

app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    destroy_user(id);
});

app.listen(3000, () => {
    -console.log('Servidor ejecutándose en http://localhost:3000');
});
