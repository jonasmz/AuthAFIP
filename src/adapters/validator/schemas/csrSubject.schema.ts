import Joi from "joi";

export const csrSubjectSchema = Joi.object({
    commonName: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .trim()
        .required()
        .messages({
            'string.base': 'El campo commonName debe ser un texto',
            'string.alphanum': 'El campo commonName solo puede contener caracteres alfanumericos',
            'string.min': 'El campo commonName debe contener al menos 3 caracteres',
            'string.max': 'El campo commonName no debe superar los 50 caracteres',
            'any.required': 'El campo commonName es requerido'

        }),
    organizationName: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .trim()
        .required()
        .messages({
            'string.base': 'El campo organizationName debe ser un texto',
            'string.alphanum': 'El campo organizationName solo puede contener caracteres alfanumericos',
            'string.min': 'El campo organizationName debe contener al menos 3 caracteres',
            'string.max': 'El campo organizationName no debe superar los 50 caracteres',
            'any.required': 'El campo organizationName es requerido'

        }),
    serialNumber: Joi.string()
        .length(11)
        .pattern(/^\d+$/)
        .required()
        .messages({
            'string.length': 'El CUIT debe ser de 11 digitos',
            'any.required': 'El CUIT es requerido'

        }),
})