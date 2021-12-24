const express = require("express");
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
app.use("/posts", require("./routes/posts"));

app.get('/', (req, res) => {
  res.send('Hello There!')
})

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
