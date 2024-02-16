const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");


const User  = mongoose.model ('CRUD', {
  username: String,
  email: String
});

router.get('/', async (req, res) => {
  try {
      const user = await User.find();
      res.send( { user });
  } catch (error) {
      res.send(error);
  }
});

router.get('/createUser', (req, res) => {
  res.send('user created');
})

router.post("/createUser", async (req, res) => {
  const newUser = req.body;
  await User.create(newUser);
  res.send('completed');
})

router.put('/updateUser/:id', async (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  await User.findByIdAndUpdate (id, { username, email }); 
  res.send('completed');
})

router.delete('/deleteUser/:id', async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.send('completed');
})

module.exports = router;
