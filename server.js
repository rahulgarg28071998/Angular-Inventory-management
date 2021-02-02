const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

// app.use(cors(corsOptions));

app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// simple route
// app.get("/", (req, res) => {
//     // res.json({ message: "Welcome to inventory management application." });
//     res.sendFile(path.join(__dirname + '/src/index.html'));
// });

const db = require("./app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});