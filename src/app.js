import express from "express";
import "dotenv/config";
import movie_route from "./routes/movie_route.js";
import rented_router from "./routes/rented-route.js";
import user_router from "./routes/user-route.js";

const app = express();

app.use(express.json());

app.use("/movie", movie_route);
app.use("/rented", rented_router);
app.use("/user", user_router);

app.listen(process.env.API_PORT, () => console.log("Servidor executando na porta " + process.env.API_PORT));