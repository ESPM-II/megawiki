const express = require('express');
const Clients = require('../../models/Clients.js');

//Declaracion de ruta
const routerClients = express.Router();

//Obtener todos los clientes
routerClients.get('/', async (req,res) => {
    try {
        const clients = await Clients.findAll()
        res.status(200).json(clients)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

//Crear una nuevo cliente
routerClients.post('/', async (req,res) => {
    try{
        const clients = await Clients.create(req.body);
        res.status(201).json(clients);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

//Obtener un cliente por id
routerClients.get('/:id', async (req,res) => {
    try {
        const clients = await Clients.findByPk(req.params.id);
        if(clients){
            res.status(200).json(clients);
        } else {
            res.status(404).json({error: 'Cliente no encontrado'});
        }
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
})

//Actualizar un usuario por id
routerClients.put('/:id', async (req, res) => {
    try {
        const clients = await Clients.findByPk(req.params.id);
        if(clients) {
            await clients.update(req.body);
            res.status(200).json(clients)
        } else {
            res.status(404).json({error: 'Cliente no encontrado'});
        }
    }
    catch(error) {
        res.status(500).json({error: error.message});
    }
})

// Eliminar cliente por id
routerClients.delete('/:id', async (req, res) => {
    try {
        const clients = await Clients.findByPk(req.params.id);
        if(clients) {
            await clients.destroy();
            res.status(200).json({message: 'Producto eliminado correctamente'})
        }
        else {
            res.status(400).json({error: error.message});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

module.exports = routerClients;