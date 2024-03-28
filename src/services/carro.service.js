const carroModel = require("../models/carro.model");

class CarroService {
    async create(carro) {
        return await carroModel.create(carro);
    }

    async findAll() {
        return await carroModel.findAll();
    }

    async findById(id) {
        return await carroModel.findByPk(id);
    }

    async update(id, carro) {
        return await carroModel.update(carro, {
            where: {
                id: id,
            },
        });
    }

    async delete(id) {
        return await carroModel.destroy({
            where: {
                id: id,
            },
        });
    }
}

module.exports = new CarroService();
