require("dotenv").config();
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/dbConnect");
const methodOverride = require("method-override");

const PORT = 3000;

const app = express();
dbConnect();
app.use(express.static("./public"))
app.set("view engine", "ejs");
app.set("views", "./views");

/* session middlewares */
app.use(cookieParser());

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

/* data middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

/* routers */
app.use("/", require("./routes/rootRoutes"));
app.use("/main", require("./routes/mainRoutes"));

app.listen(PORT, () => {
  console.log(`Server listening from http://localhost:${PORT}`);
});
