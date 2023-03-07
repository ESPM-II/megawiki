const express = require('express')
const Publication = require('../../models/Publication.js')

//Declaracion de ruta
const routerPublication = express.Router()

//Obtener todas las publicaciones 
routerPublication.get('/', async (req, res) => {
    try{
        const publication = await Publication.findAll()

        res.status(200).json(publication)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
)

//Crear una nueva publicacion
routerPublication.post('/', async (req, res) => {
    try {
        const publication = await Publication.create(req.body)
        res.status(201).json(publication)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

//Obtener un producto por id. 
routerPublication.get('/:id', async (req, res) => {
    try {
        const publication = await Publication.findByPk(req.params.id)
        if(publication){
            res.status(200).json(publication)
        } else {
            res.status(404).json({ error: 'publicacion no encontrada'})
        }
       
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
})

// Actualizzr una publicación por id 
routerPublication.put('/:id', async (req, res) => {
    try {
        const publication = await Publication.findByPk(req.params.id)
        if(publication) {
            await publication.update(req.body)
            res.status(200).json(publication)
        } else {
            res.status(404).json({error: 'Publicación no encontrada'})
        }
    }
    catch (error){
        res.status(500).json({error: error.message})
    }
})

// Eliminar publicación por id
routerPublication.delete('/:id', async (req, res) => {
    try {
        const publication = await Publication.findByPk(req.params.id)
        if(publication) {
            await publication.destroy()
            res.status(200).json({message: ' Producto eliminado correctamente '})
        } else {
            res.status(400).json({error: error.message})
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = routerPublication;