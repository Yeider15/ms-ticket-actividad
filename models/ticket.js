class Ticket {
    constructor(titulo, descripcion) {
        
        if (!titulo) {
            throw new Error("El título no puede estar vacío");
        }
        
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = 'abierto';
    }
}

module.exports = Ticket;