const { DataTypes } = require("sequelize");
const db = require("../database/db.config");
const Aluguel = require("./aluguel.model");
const Cliente = require("./cliente.model");

const Carro = db.define("Carro", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    preco: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
});

module.exports = Carro;
