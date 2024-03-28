const express = require("express");
const router = express.Router();
const carroService = require("../services/carro.service");

router.post("/", async (req, res) => {
    const carro = req.body;
    const newCarro = await carroService.create(carro);
    res.json(newCarro);
});

router.get("/", async (req, res) => {
    const carros = await carroService.findAll();
    res.json(carros);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const carro = await carroService.findById(id);
    res.json(carro);
});

router.patch("/:id", async (req, res) => {
    const id = req.params.id;
    const carro = req.body;
    const updatedCarro = await carroService.update(id, carro);
    res.json(updatedCarro);
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await carroService.delete(id);
    res.json({ message: "Carro deleted" });
});

module.exports = router;
