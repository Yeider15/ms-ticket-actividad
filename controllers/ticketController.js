const ticketService = require('../services/ticketService');

const ticketController = {
  postTicket: async (req, res) => {
    try {
      const { titulo, descripcion } = req.body;
      const ticket = await ticketService.registrar(titulo, descripcion);
      res.status(201).json(ticket);
    } catch (err) {
      // Capturamos el error del modelo (ej: "El título no puede estar vacío")
      // y respondemos con un 400 Bad Request, que es el código correcto para datos inválidos
      res.status(400).json({ error: err.message });
    }
  },

  getTicket: async (req, res) => {
    try {
      const ticket = await ticketService.consultar(req.params.id);
      ticket ? res.json(ticket) : res.status(404).json({ error: "No existe" });
    } catch (err) {
      res.status(500).json({ error: "Error al consultar" });
    }
  }
};

module.exports = ticketController;