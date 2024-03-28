const { DataTypes } = require("sequelize");
const db = require("../database/db.config");

const Aluguel = db.define(
    "Aluguel",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        idCliente: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idCarro: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        dataInicio: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        dataFim: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        valorTotal: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
    },
    {
        tableName: "Alugueis",
    }
);

module.exports = Aluguel;
