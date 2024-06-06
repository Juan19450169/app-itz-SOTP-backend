import { Request, Response } from 'express';
import Taller from '../models/santinosModel';
//import cloudinary from 'cloudinary';
import mongoose from 'mongoose';

//Función para crear un restaurante
const createTaller = async (req: Request, res: Response) =>{
    try{
        const existingRestaurante = await Taller.findOne({ user: req.userId});

        if (existingRestaurante) {
            return res.status(409)
                      .json({ message: "El restaurante para este usuario ya existe"})
        }

        //const imageUrl = await uploadImage(req.file as Express.Multer.File);

        //Creamos el objeto restaurante y lo almacenamos en la base de datos
        const restaurante = new Taller(req.body)
        //restaurante.imageUrl = imageUrl;
        //restaurante.user = new mongoose.Types.ObjectId(req.userId);
        //restaurante.lastUpdate = new Date();

        await restaurante.save();
        res.status(201).send(restaurante);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Error al crear el restaurante'})
    }
}//Fin de createRestaurant

export default {
    //getRestaurante,
    createTaller,
}