import { Router } from "express";
import {
  borrarColor,
  controladorPrueba,
  crearColor,
  editarColor,
  obtenerListaColores,
  obtenerColor,
} from "../controllers/colores.controllers";
import validarColor from "../helpers/validarColor";

const router = Router();

router.route("/prueba").get(controladorPrueba);
router.route("/colores").post(validarColor, crearColor).get(obtenerListaColores);
router
  .route("/colores/:id")
  .get(obtenerColor)
  .delete(borrarColor)
  .put(validarColor, editarColor);

export default router;
