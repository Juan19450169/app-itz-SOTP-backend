import express from "express";
import multer from "multer";
import tallerController from "../controllers/tallerController";
import { validateTallerRequest } from "../middleware/validation";
import { jwtCheck, jwtParse } from "../middleware/auth";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1040 * 1024, //5mb
    }
})

//Rutas para el restaurante



//Ruta para crear un restaurante
router.post('/', 
    jwtCheck,
    jwtParse,
    upload.single("imageFile"), 
    validateTallerRequest,
    tallerController.createTaller
);



export default router;