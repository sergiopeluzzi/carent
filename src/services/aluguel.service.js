const aluguelModel = require("../models/aluguel.model");

class AluguelService {
    async create(aluguel) {
        return await aluguelModel.create(aluguel);
    }

    async findAll() {
        return await aluguelModel.findAll();
    }

    async findById(id) {
        return await aluguelModel.findByPk(id);
    }

    async update(id, aluguel) {
        return await aluguelModel.update(aluguel, {
            where: {
                id: id,
            },
        });
    }

    async delete(id) {
        return await aluguelModel.destroy({
            where: {
                id: id,
            },
        });
    }
}

module.exports = new AluguelService();
