import express, {request, response} from "express";
import "./database";

const app = express();
import {routes} from "./routes";
app.use(express.json())
app.use(routes);

app.listen(3333, () =>console.log("rodandooooo"));