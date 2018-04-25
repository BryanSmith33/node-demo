// the animals array is mocking our database(db) for right now. In the future, you will make a call to your db
const animals = [
  { id: 0, name: 'Buddy', image: 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg' },
  { id: 1, name: 'Snuggles', image: 'http://cdn.kickvick.com/wp-content/uploads/2015/09/cutest-bunny-rabbits-23.jpg' },
  { id: 2, name: 'Damian', image: 'http://cdn.natgeotv.com.au/videos/thumbnails/video-platypus.jpg?v=29&azure=false&scale=both&width=1600&height=900&mode=crop' }
]

// module.exports allows us to export an object, that we call ac in our index.js file, and use the different methods to perform an action when the specific route is hit.
module.exports = {
  getAll: (req, res) => {
    res.send(animals)
  },
  createAnimal: (req, res) => {
    const { name, image } = req.body
    const animal = {
      id: animals[animals.length - 1].id + 1,
      name,
      image
    }
    animals.push(animal)
    res.send(animals)
  },
  updateAnimal: (req, res) => {
    let animalIndex = null
    const {name, image} = req.body
    animals.forEach((animal, index) => {
      if (animal.id === Number(req.params.id)) {
        animalIndex = index
      }
    })
    animals[animalIndex] = {
      id: animals[animalIndex],
      name: name || animals[animalIndex].name,
      image: image || animals[animalIndex].image
    }

    res.send(animals)
  },
  deleteAnimal: (req, res) => {
    animals.forEach((animal, index) => {
      if (animal.id === Number(req.params.id)) {
        animals.splice(index, 1)
      }
    })
    res.send(animals)
  }
}