const db = require('../db/database');

const ticketRepository = {
    crear: async (ticketModel) => {
        const [nuevo] = await db('tickets')
            .insert({
                titulo: ticketModel.titulo,
                descripcion: ticketModel.descripcion,
                estado: ticketModel.estado
            })
            .returning('*');
        return nuevo;
    },

    obtenerPorId: async (id) => {
        return await db('tickets').where({ id }).first();
    }
};

module.exports = ticketRepository;