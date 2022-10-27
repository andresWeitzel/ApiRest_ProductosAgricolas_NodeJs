const { default: Tabaco } = require("../models/Tabaco");


//=========== POST ============
export const createObj = async (req, resp) => {
  let tabaco = await new Tabaco({
    sector_id: req.body.sector_id,

    sector_nombre: req.body.sector_nombre,

    variable_id: req.body.variable_id,

    actividad_producto_nombre: req.body.actividad_producto_nombre,

    indicador: req.body.indicador,

    unidad_de_medida: req.body.unidad_de_medida,

    fuente: req.body.fuente,

    frecuencia_nombre: req.body.frecuencia_nombre,

    cobertura_nombre: req.body.cobertura_nombre,

    alcance_tipo: req.body.alcance_tipo,

    alcance_id: req.body.alcance_id,

    alcance_nombre: req.body.alcance_nombre,

    indice_tiempo: req.body.indice_tiempo,

    valor: req.body.valor,
  });

  await tabaco.save();

  console.log("Nuevo objeto enviado");
  resp.json(tabaco);
};

//========= DELETE ========
export const deleteObj = async (req, resp) => {
    
   await Tabaco.findByIdAndDelete(req.params.id);
  
    resp.json(`EL OBJETO CON EL ID ${id} HA SIDO ELIMINADO CORRECTAMENTE`);
  };

//========= GET ALL ========
export const getAllObj = async (req, resp) => {
    const data = await Tabaco.find();
  
    resp.json(data);
  };


//========= GET BY ID ========
export const getById = async (req, resp) => {
    
    let data = await Tabaco.findById(req.params.id);
  
    resp.json(data);
  };
  