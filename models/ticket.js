class Ticket {
    constructor(titulo, descripcion) {
        
        if (!titulo) {
            throw new Error("El título no puede estar vacío");
        }
        
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = 'abierto'; // Estado por defecto dictado por el negocio
    }
}

module.exports = Ticket;