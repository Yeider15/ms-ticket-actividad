const Ticket = require("../models/ticket");
const ticketRepository = require("../repositories/ticketRepository");

async function enviarNotificacionSimulada(tipo, destino) {
  console.log(`[SIMULACIÓN] Enviando notificación por ${tipo} al contacto ${destino}...`);
}

const ticketService = {
  registrar: async (titulo, descripcion) => {
    // 1. Usamos el MODELO para instanciar un nuevo Ticket en memoria
    // Si no hay título, el Modelo lanzará un error aquí mismo y detendrá la ejecución
    const nuevoTicket = new Ticket(titulo, descripcion);

    // 2. Usamos el REPOSITORIO para guardarlo en la Base de Datos
    const ticketGuardado = await ticketRepository.crear(nuevoTicket);

    // 3. Notificación (Regla de negocio)
    // Ahora garantizamos que solo se envíe si el ticket pasó la validación y se guardó en la DB
    await enviarNotificacionSimulada("WhatsApp", "+56912345678");

    return ticketGuardado;
  },

  consultar: async (id) => {
    return await ticketRepository.obtenerPorId(id);
  },
};

module.exports = ticketService;