const express = require('express');
const ticketController = require('./controllers/ticketController');

const app = express();
app.use(express.json());

// API 1: Registrar
app.post('/api/tickets', ticketController.postTicket);

// API 2: Consultar
app.get('/api/tickets/:id', ticketController.getTicket);

app.listen(3000, () => console.log('Monolito listo en puerto 3000'));