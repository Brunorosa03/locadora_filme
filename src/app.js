import express from "express";
import "dotenv/config";
import movie_route from "./routes/movie_route.js";
import rented_route from "./routes/rented_route.js";
import user_route from "./routes/user_route.js";

const app = express();

app.use(express.json());

app.use("/movie", movie_route);
app.use("/rented", rented_route);
app.use("/user", user_route);

app.listen(process.env.API_PORT, () => console.log("Servidor executando na porta " + process.env.API_PORT));