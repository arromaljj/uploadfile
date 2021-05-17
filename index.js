const express = require("express");
var path = require('path');
var cors = require('cors');
const app = express();
const port = 3000;
const multer = require('multer')




var storage = multer.diskStorage(
    {
        destination: './uploads/',
        filename: function ( req, file, cb ) {
            cb( null, file.originalname );
        }
    }
);

var upload = multer( { storage: storage } );


const bodyParser = require('body-parser');


app.use(cors());

app.use(bodyParser.json());






require("dotenv/config")


app.use("/", (req, res, next) => {
  console.log("We hit an endpoint");
  next();
});



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"))
});

app.post("/", upload.array('uploadedFile'), (req,res) => {

    res.sendFile(path.join(__dirname + "/submit.html"))
})


app.listen(port, () => {
  console.log("App listning on " + port);
});
