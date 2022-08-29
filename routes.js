import express from 'express'
import { ProdController } from './src/controllers/prodCtrl.js'

const routes = express.Router()

routes.get('/produto/get', ProdController.getProd)
routes.post('/produto/insert', ProdController.insertProd)
routes.put('/produto/update/:id', ProdController.updateProd)
routes.delete('/produto/delete/:id', ProdController.deleteProd)

export { routes }