const express = require("express");
const clienteController = require("./controllers/cliente.controller");
const carroController = require("./controllers/carro.controller");
const aluguelController = require("./controllers/aluguel.controller");
const sequelize = require("./database/db.config");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/clientes", clienteController);
app.use("/api/carros", carroController);
app.use("/api/alugueis", aluguelController);

app.get("/api/apagardb", (req, res) => {
    sequelize.sync({ force: true });
    res.send("DB apagado com sucesso!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
