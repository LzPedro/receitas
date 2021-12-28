const express = require("express");
const mongoose = require('mongoose');
var cors = require('cors')

const app = express();



const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions)) 


app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/recipe", require("./routes/recipe"));

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello There!')
})

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
