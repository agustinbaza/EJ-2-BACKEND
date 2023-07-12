import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarColor = [
  check("nombreColor")
    .notEmpty()
    .withMessage("El nombre del color es obligatorio")
    .isLength({ min: 2, max: 40 })
    .withMessage("El nombre del color debe contener entre 2 y 40 caracteres"),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarColor;
