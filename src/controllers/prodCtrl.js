import { Produto } from "../models/prodModel.js"

export class ProdController{
    static async getProd(req, res){
        try {
                const produtos = await Produto.get()
                return res.status(200).json(produtos)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    }


    static async insertProd(req, res){
        try {
                const { preco, descricao } = req.body
                const newProd = await new Produto(preco, descricao).insert()
                return res.status(200).json(newProd)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    }

    static async updateProd(req, res){
        try {
                const { id } = req.params
                const { preco, descricao } = req.body
                const alterProd = await new Produto(preco, descricao, id).update()
                return res.status(200).json(alterProd)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    }

    static async deleteProd(req, res){
        try {
                const { id } = req.params
                const delProd = await new Produto('ghost1', 'ghost2', id).delete()
                return res.status(200).json(delProd)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    }


}