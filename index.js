const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require('cors')
const session = require("express-session");
const { data } = require('./connection')
data()

const adminRoutes = require("./routes/adminRoutes");
const apiRoutes = require('./routes/api')
const productroute = require ('./routes/productroute')
const authRoutes = require('./routes/auth')


const app = express();

// Middleware
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(cors())
app.use(express.static("public"));
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));
app.use(express.static(path.join(__dirname, "../frontend")));

app.use(session({
  secret: "urbanmedex-secret-key",
  resave: false,
  saveUninitialized: false
}));

// Routes
app.use("/", adminRoutes);

app.use('/api', apiRoutes)

app.use("/product", productroute);

app.use("/", authRoutes);

app.listen(3000, () => {
    console.log('http://localhost:3000');

})
