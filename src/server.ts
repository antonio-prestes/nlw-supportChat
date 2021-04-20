import express, {request, response} from "express";
import "./database";

const app = express();

// GET - buscas
// POST - criação
// PUT - alteração
// DELETE - apagar
// PATCH - alterar uma info especifica

app.get("/",(request, response) =>{
    return response.json({
        message: "Opaaa"
    })
});

app.post("/users",(request, response) =>{
    return response.json({
        message: "opaaa deu boa"
    })
})

app.listen(3333, () =>console.log("rodandooooo"));