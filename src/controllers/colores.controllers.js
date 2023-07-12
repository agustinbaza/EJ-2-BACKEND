import { validationResult } from "express-validator";
import Color from "../models/color";

export const controladorPrueba = (req, res) => {
  res.send("Esta es una prueba de mi ruta GET");
};

export const crearColor = async (req, res) => {
  try {
    const nuevoColor = new Color(req.body);
    await nuevoColor.save();
    res.status(201).json({
      mensaje: "El color fue creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Error al crear el color",
    });
  }
};

export const obtenerListaColores = async (req, res) => {
  try {
    const colores = await Color.find();
    res.status(200).json(colores);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar obtener los colores",
    });
  }
};

export const obtenerColor = async (req, res) => {
  try {
    const color = await Color.findById(req.params.id);
    res.status(200).json(color);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar obtener el color",
    });
  }
};

export const borrarColor = async (req, res) => {
  try {
    await Color.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El color fue eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error, no se pudo borrar el color",
    });
  }
};

export const editarColor = async (req, res) => {
  try {
    await Color.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El color fue actualizado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error, no se pudo actualizar el color",
    });
  }
};
