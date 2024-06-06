import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const handleValidationErrors = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400)
                  .json({errors: errors.array()});
    }

    next();
}//Fin de handleValidationErrors


export const validateUserRequest = [
    body("name").isString()
                .notEmpty()
                .withMessage("El nombre debe ser string"),

    body("tel").isFloat({ min: 0 })
                        .withMessage("El teléfono debe ser un número positivo"),       
                    
    body("marcaVehiculo").isString()
                        .notEmpty()
                        .withMessage("La marca debe ser string"),   
                        
    body("modelo").isString()
                        .notEmpty()
                        .withMessage("El modelo debe ser string"),

    body("year").isFloat({ min: 0 })
                        .withMessage("El año debe ser un número positivo"),

    body("servicio").isString()
                        .notEmpty()
                        .withMessage("El servicio debe ser string"),
    handleValidationErrors                                       
];//Fin de validateUserRequest

export const validateTallerRequest = [
    body("menuItems.*.name").notEmpty()
        .withMessage("El nombre del item del menú es requerido"),
    body("menuItems.*.access").notEmpty()
        .withMessage("La disponibilidad del item es requerida"),
    
    handleValidationErrors
];//Fin de validateRestauranteRequest