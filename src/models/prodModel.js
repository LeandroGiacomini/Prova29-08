import { poolConnect } from "../../poolConnect.js"

const con = await poolConnect()

export class Produto{
    constructor(preco, descricao, id){
        this.preco = preco,
        this.descricao = descricao,
        this.id = id
    }

    static async get(){
        try {
            const { recordset } = await con.query('select * from Produtos')
            return recordset
        } 
        catch (error)
        {
            console.log('error model ' + error)
            return error(error)
        }
    }

    async insert(){
        try {
            const { rowsAffected } = con.query(` insert into Produtos values (${this.preco}, '${this.descricao}')`)
            return true
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }

    async update(){
        try {
            const { rowsAffected } = await con.query(`update Produtos set preco = ${this.preco} , descricao = '${this.descricao}'  where id = ${this.id}`)
            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }

    async delete(){
        try {
            const { rowsAffected } = await con.query(`delete from Produtos where id = ${this.id}`)
            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }






}