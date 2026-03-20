const Ticket = require("../models/ticket");
const ticketRepository = require("../repositories/ticketRepository");

const ticketService = {
  registrar: async (titulo, descripcion, estrategiaNotificacion, destino) => {
    const nuevoTicket = new Ticket(titulo, descripcion);

    const ticketGuardado = await ticketRepository.crear(nuevoTicket);

    if (estrategiaNotificacion && destino) {
      estrategiaNotificacion.enviar(destino);
    }

    return ticketGuardado;
  },

  consultar: async (id) => {
    return await ticketRepository.obtenerPorId(id);
  },
};

module.exports = ticketService;