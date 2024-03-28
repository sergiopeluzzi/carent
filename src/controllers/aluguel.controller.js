const express = require("express");
const router = express.Router();
const aluguelService = require("../services/aluguel.service");

router.post("/", async (req, res) => {
    const aluguel = req.body;
    const newAluguel = await aluguelService.create(aluguel);
    res.json(newAluguel);
});

router.get("/", async (req, res) => {
    const alugueis = await aluguelService.findAll();
    res.json(alugueis);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const aluguel = await aluguelService.findById(id);
    res.json(aluguel);
});

router.patch("/:id", async (req, res) => {
    const id = req.params.id;
    const aluguel = req.body;
    const updatedAluguel = await aluguelService.update(id, aluguel);
    res.json(updatedAluguel);
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await aluguelService.delete(id);
    res.json({ message: "Aluguel deleted" });
});

module.exports = router;
