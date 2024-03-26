const { default: mongoose } = require('mongoose')
const mongo =require('mongoose')
const url_db = 'mongodb://localhost:27017/utma'

mongo.connect(url_db)
.then(()=>{
   console.log('conexion exitosa') 
})
.catch((err)=>{
 console.log('Fallo en la conexion')
})

const alumnos_esquema = new mongo.Schema({
    name:{
        type:String
    },
    apepat:{
        type:String
    },
    numerotel:{
        type:Number
    }
})

const alumnos = new mongoose.model('tabla de registro de alumnos', alumnos_esquema) 

alumnos.create({
    name:'jesus',
    apepat:'salazar',
    numerotel:4493246225,
})