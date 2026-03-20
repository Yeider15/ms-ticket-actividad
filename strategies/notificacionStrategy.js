class INotificacionStrategy {
    enviar(destino) {
        throw new Error("El método enviar() debe ser implementado");
    }
}

// Estrategia 1: WhatsApp
class WhatsAppStrategy extends INotificacionStrategy {
    enviar(destino) {
        console.log(`[SIMULACIÓN STRATEGY] Enviando WhatsApp al contacto ${destino}...`);
    }
}

// Estrategia 2: SMS
class SMSStrategy extends INotificacionStrategy {
    enviar(destino) {
        console.log(`[SIMULACIÓN STRATEGY] Enviando SMS al número ${destino}...`);
    }
}

// Estrategia 3: Email
class EmailStrategy extends INotificacionStrategy {
    enviar(destino) {
        console.log(`[SIMULACIÓN STRATEGY] Enviando Email a la dirección ${destino}...`);
    }
}

module.exports = {
    WhatsAppStrategy,
    SMSStrategy,
    EmailStrategy
};