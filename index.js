const express = require("express");
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
const tasks = [
    { id: 1,
     name: "Task 1", 
     completed: false },
     {
        id: 2,
        name: "Task 2",
        completed: false
     }
];
app.get('/task' ,(req,res)=>{
    res.json(tasks)
})


app.get('/tasks/:id' ,(req,res)=>{
    const id = req.params.id;
    let enter = tasks.filter((task)=> task.id === id)
    res.json([enter])
})

let lenght = tasks.length;
function increaseid(){
    return ++lenght;
}
//Adding new task
// app.post('/task' ,(req,res)=>{
//    let body = req.body
//    console.log(body)
// tasks.push({
//     id: `${increaseid()}`,
//     ...body
// })
//    res.json(tasks)
// })

app.post('/tasks', (req, res) => {
    const body = req.body; // This will be an array of tasks
    console.log(body);

  if (Array.isArray(body)) {
    body.forEach(task => {
        task.id = `${increaseid()}`; // Assign a new ID to each task
        tasks.push(task); // Add each task with the ID to the tasks array
    });
} else {
    // If it's not an array, just add a single task
    tasks.push({
        id: `${increaseid()}`,
        ...body
    });
}
    res.json(tasks); // Return the updated tasks array
});

app.put("/tasks/:id" ,(req,res)=>{
let todo = tasks.find((todo)=> todo.id == req.params.id);
if(todo){
    todo.name = req.body.name;
    todo.completed = req.body.completed;
    res.json([tasks]);
}else{
   res.send("Todo with given id doesn't exist");
}
})

//delete task
app.delete("/tasks/:id",(req,res)=>{
    let index = tasks.findIndex((todo)=> todo.id == req.params.id);
    tasks.splice(index ,1);
    res.json(tasks);
})
app.listen(2000);  