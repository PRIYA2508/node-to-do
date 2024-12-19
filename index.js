const express = require("express");

const app = express();

const tasks = [
    {
        id: "1",
        task1:"wakeup"
    },
    {
        id:2,
        task2:"exercise"
    },
    {
        id:3,
        task3:"breakfast"
    },
    {
        id:4,
        task4:"study"
    }
];
app.get('/task' ,(req,res)=>{
    const alltask = tasks.map((task , index)=>{
        task[`task${index+1}`]
    })      
    res.json({tasks:alltask})
})
app.listen(2000);  