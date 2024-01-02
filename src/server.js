const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 8000;
const Pet = require('./db/models/pets')

const publicDir = path.join(__dirname, '..', 'public');
const staticAssets = express.static(publicDir);
app.use(staticAssets);

app.get('/test',  async(req, res) => {
    const petList =  await Pet.list();
    console.log(petList)
    res.send(petList);
});

app.post('/api', async (req, res) => {
    const { petName, profilePic, species, isFriendly } = req.body;
    const newPet = await Pet.create(petName, profilePic, species, isFriendly);
    console.log(newPet)
    res.send(newPet).status(201);
});

app.delete('/deletepet:id', async (req,res) => {
   const { id } = req.params;
   console.log(id)
   await Pet.delete(id);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})