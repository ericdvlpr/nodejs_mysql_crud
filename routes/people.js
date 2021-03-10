const express = require('express');
const mysqlConnection = require('../connection');
const Router = express.Router();

Router.get("/", (req, res)=>{
    mysqlConnection.query("SELECT * FROM people",(err, rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    })
})

Router.get("/:id", (req, res)=>{
    mysqlConnection.query("SELECT * FROM people WHERE id = ?", [req.params.id],(err, rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    })
})

Router.post("/add", (req, res)=>{
    const params = req.body;
    mysqlConnection.query("INSERT INTO people SET ?", params ,(err, rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    })
})

Router.put("/edit", (req, res)=>{
    
    const {id, name, address,contact} = req.body;

    mysqlConnection.query("UPDATE people SET name = ?, address = ?, contact = ? WHERE id= ?", [name,address,contact,id] ,(err, rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;