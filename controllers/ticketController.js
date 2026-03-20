const ticketService = require('../services/ticketService');
const { WhatsAppStrategy, SMSStrategy, EmailStrategy } = require('../strategies/notificacionStrategy');

const ticketController = {
  postTicket: async (req, res) => {
    try {
      const { titulo, descripcion, metodoNotificacion, destino } = req.body;
      
      let estrategia;
      switch (metodoNotificacion) {
        case 'sms':
          estrategia = new SMSStrategy();
          break;
        case 'email':
          estrategia = new EmailStrategy();
          break;
        case 'whatsapp':
        default:
          estrategia = new WhatsAppStrategy(); 
          break;
      }

      const ticket = await ticketService.registrar(titulo, descripcion, estrategia, destino);
      res.status(201).json(ticket);
    } catch (err) {
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