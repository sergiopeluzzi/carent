const clienteModel = require("../models/cliente.model");

class ClienteService {
    async create(cliente) {
        return await clienteModel.create(cliente);
    }

    async findAll() {
        return await clienteModel.findAll();
    }

    async findById(id) {
        return await clienteModel.findByPk(id);
    }

    async update(id, cliente) {
        return await clienteModel.update(cliente, {
            where: {
                id: id,
            },
        });
    }

    async delete(id) {
        return await clienteModel.destroy({
            where: {
                id: id,
            },
        });
    }
}

module.exports = new ClienteService();
