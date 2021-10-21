const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000;
app.use(cors())
app.use(express.json())
const users = [
    {id: 0, name: "ibrahim", age: 23, phone: 01232323222, email: "hello@gmail.com"}, 
    {id: 1, name: "kholil", age: 23, phone: 01232323222, email: "hello@gmail.com"}, 
    {id: 2, name: "Babul", age: 23, phone: 01232323222, email: "hello@gmail.com"}, 
    {id: 3, name: "Mahbub", age: 23, phone: 01232323222, email: "hello@gmail.com"}, 
    {id: 4, name: "karim", age: 23, phone: 01232323222, email: "hello@gmail.com"}, 
    {id: 5, name: "Mahim", age: 23, phone: 01232323222, email: "hello@gmail.com"}, 
]
app.get('/users', (req, res) => {
    const search = req.query.search
    if(search){
        const user = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(user)
    }else{
        res.send(users)
    }
    
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log("hitting the post", req.body)
    res.json(newUser)
})

app.listen(port, () => {
    console.log('Listening to port ', port)
})