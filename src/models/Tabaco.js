import { Schema, model } from 'mongoose'

//data schema
const tabacoSchema = new Schema({
    sector_id: {
        type: Number,
        required: true,
        unique: true
    },
    sector_nombre: {
        type: String,
        required: true,
        unique: false
    },
    variable_id: {
        type: Number,
        required: false,
        unique: false
    },
    actividad_producto_nombre: {
        type: String,
        required: true,
        unique: false
    },
    indicador: {
        type: String,
        required: true,
        unique: false
    },
    unidad_de_medida: {
        type: String,
        required: true,
        unique: false
    },
    fuente: {
        type: String,
        required: false,
        unique: false
    },
    frecuencia_nombre:  {
        type: String,
        required: true,
        unique: false
    },
    cobertura_nombre: {
        type: String,
        required: true,
        unique: false
    },
    alcance_tipo: {
        type: String,
        required: true,
        unique: false
    },
    alcance_id: {
        type: Number,
        required: false,
        unique: false
    },
    alcance_nombre: {
        type: String,
        required: true,
        unique: false
    },
    indice_tiempo: {
        type: String,
        required: true,
        unique: true
    },
    valor: {
        type: Number,
        required: true,
        unique: false
    }

},{
    versionKey:false
})

//data model
export default model('Tabaco',tabacoSchema)