const { Router } = require("express");
import * as tabacoController from "../controllers/tabaco.controller";
const router = Router();


// const data = {
//   sector_id: 32,
//   sector_nombre: "Tabaco",
//   variable_id: 841,
//   actividad_producto_nombre: "Cigarrillos 30 unidades",
//   indicador: "Precio interno inferior",
//   unidad_de_medida: "$/paquete",
//   fuente: "MAGYP",
//   frecuencia_nombre: "Mensual",
//   cobertura_nombre: "Nacional",
//   alcance_tipo: "PAIS",
//   alcance_id: 200,
//   alcance_nombre: "Argentina",
//   indice_tiempo: "2022-10-26",
//   valor: 2.2,
// };


//==== GET ====
router.get("/tabaco", tabacoController.findAllTabaco);

//==== POST ====
router.post("/tabaco", tabacoController.createTabaco);


module.exports = router;
