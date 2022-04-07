import express from "express";
import ejs from "ejs";
import expressLayout from "express-ejs-layouts";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

// express server setup
const app = express();
//demo ex
app.get("/", (req, res) => {
  res.render("home");
});
//set template engine
app.use(expressLayout);

app.set("views", join(__dirname, "/resourses/views"));
app.use(express.static(join(__dirname, "/public")));
app.set("view engine", "ejs");
//server config
app.listen(process.env.PORT, () => {
  console.log(`server is running  `);
});
