// 👇 These are our dependencies

// express is a server framework for Node, it simplifies some common tasks
const express = require('express')
// body-parser is top-level middleware, or code that performs an action for us, allows us to take information of the req.body. In this project we just were using the .json() functionality
const bodyParser = require('body-parser')

// ac is short for animal_controller. We use a controller to separate our concerns. The controller handles the manipulation of data
const ac = require('./controllers/animals_controller')

// Here we invoke express and assign it to a constant called app. We could call it anything but app is most common
const app = express()

// here we use the bodyParser middleware invoking json
app.use(bodyParser.json());

// get route. we set up the api that when hit, will perform the animal controller getAll method
app.get('/api/animals', ac.getAll)

//post route. we set up the api that when hit, will perform the animal controller createAnimal method
app.post('/api/animals', ac.createAnimal)

// we set up the api that when hit, will perform the animal controller updateAnimal method
app.put('/api/animals/:id', ac.updateAnimal)

// we set up the api that when hit, will perform the animal controller deleteAnimal method
app.delete('/api/animals/:id', ac.deleteAnimal)

// set the port. The port is just where our server will reside
const port = 3333

// app.listen allows us to start up our app. we pass in the port constant and then a console.log that just lets us know the server is up and running.
app.listen(port, () => console.log(`Magic is happening on port ${port} 💋`))