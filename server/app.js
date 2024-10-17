const express = require('express');
const cors = require('cors');
const mongooseconnection = require('./config/mongoose');
const userModel = require('./models/usermodel');
const app = express();

app.use(cors()); // Enable CORS for all origins
app.use(express.json());


app.get("/users" ,async function( req, res, next ) {
     let users = await userModel.find()
     res.send(users);
  })

app.post("/create", async function (req, res) {
  let {username, name, email, age , contact} = req.body
  let createduser = await userModel.create({
      username,
      name,
      email,
      age,
      contact,
  })
  res.send(createduser)
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
