const express = require("express");
const router = express.Router();
const clienteService = require("../services/cliente.service");

router.post("/", async (req, res) => {
    const cliente = req.body;
    const newCliente = await clienteService.create(cliente);
    res.json(newCliente);
});

router.get("/", async (req, res) => {
    const clientes = await clienteService.findAll();
    res.json(clientes);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const cliente = await clienteService.findById(id);
    res.json(cliente);
});

router.patch("/:id", async (req, res) => {
    const id = req.params.id;
    const cliente = req.body;
    const updatedCliente = await clienteService.update(id, cliente);
    res.json(updatedCliente);
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await clienteService.delete(id);
    res.json({ message: "Cliente deleted" });
});

module.exports = router;
