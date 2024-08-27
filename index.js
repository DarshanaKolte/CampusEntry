const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Student = require('./student');


const app = express();
let port = 8080;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("MongoDB error is", err));
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const student = new Student({ username, email, password });
    await student.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    res.status(500).send('Error creating user');
    console.log(error);
  }
});

app.get('/', (req, res) => {
  res.send('Server started');
});
app.get('/signup', (req, res) => {
  res.send('Signup page response');
});

app.listen(port, () => {

  console.log(`Server running on port ${port}`);
});
