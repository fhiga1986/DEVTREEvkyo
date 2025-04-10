// const express = require('express') // CJS Common JS (ya no se usa)
import express from 'express' // ESM Ecmascript module

import router from './router'

const app = express()
//se crea instancia con el servidor, se puede ir agregando diferentes lineas de comando/configuraciones
//bbdd, que voy a usar para mis vistas, que voy a colocar para routing, como manejar formularios

app.use('/', router)

app.use('/ecommerce', () => {
        console.log('Desde Ecommerce') 
                            }  

        )

export default app