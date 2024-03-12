const express = require("express");
const dbConnect = require("./config/dbConnect");

const PORT = 3000;

const app = express();
dbConnect();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", require("./routes/rootRoutes"));
app.use("/main", require("./routes/mainRoutes"));

app.listen(PORT, () => {
  console.log(`Server listening from http://localhost:${PORT}`);
});
