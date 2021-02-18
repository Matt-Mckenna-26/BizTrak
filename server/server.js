const express = require("express");
const app = express();

const cors =require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config();

const port = 8000 || process.env.port
// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({credentials: true, origin:'http://localhost:3000'}))
app.use(cookieParser());

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./routes/user.routes");
AllMyUserRoutes(app);

app.listen(port, () => console.log("The server is all fired up on " + port + ""));
