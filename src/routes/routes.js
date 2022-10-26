const { Router } = require("express");
const { default: Tabaco } = require("../models/Tabaco");

const router = Router();

//==== GET ====
router.get('/tabaco', (req, resp) => {

    const data={
        "sector_id" : 32,
        "sector_nombre": "Tabaco",
        "variable_id": 841,
        "actividad_producto_nombre": "Cigarrillos 30 unidades",
        "indicador":"Precio interno inferior",
        "unidad_de_medida":"$/paquete",
        "fuente":"MAGYP",
        "frecuencia_nombre":"Mensual",
        "cobertura_nombre":"Nacional",
        "alcance_tipo":"PAIS",
        "alcance_id":200,
        "alcance_nombre":"Argentina",
        "indice_tiempo":"2022-10-26",
        "valor":2.2
    }

    resp.json(data);
  });

 
//==== POST ====
router.post('/tabaco', async(req, resp) => {

 let tabaco = new Tabaco(
  {
        sector_id : req.body.sector_id,
        
        sector_nombre: req.body.sector_nombre,

        variable_id: req.body.variable_id,

        actividad_producto_nombre: req.body.actividad_producto_nombre,

        indicador:req.body.indicador,

        unidad_de_medida : req.body.unidad_de_medida,

        fuente: req.body.fuente,

        frecuencia_nombre :req.body.frecuencia_nombre,

        cobertura_nombre:req.body.cobertura_nombre,

        alcance_tipo:req.body.alcance_tipo,

        alcance_id:req.body.alcance_id,
        
        alcance_nombre:req.body.alcance_nombre,
        
        indice_tiempo:req.body.indice_tiempo,
        
        valor:req.body.valor
  }
  );

 await tabaco.save();
 
  console.log("Nuevo objeto enviado");
  resp.json(tabaco);
}); 


module.exports = router;
