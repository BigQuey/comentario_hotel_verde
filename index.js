const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const comentarios = [
    {
        id: 101,
        usuario: "Juan Pérez",
        comentario: "La habitación estaba impecable y la vista al mar era increíble. El servicio a la habitación fue muy rápido. ¡Definitivamente volveré!",
        fecha: "2025-12-25 08:46 AM",
        calificacion: 5
    },
    {
        id: 102,
        usuario: "Maria Garcia",
        comentario: "El desayuno buffet estuvo delicioso, pero sentí que el proceso de check-in fue un poco lento debido a la cantidad de gente.",
        fecha: "2025-12-24 10:30 AM",
        calificacion: 4
    },
    {
        id: 103,
        usuario: "Carlos López",
        comentario: "Todo perfecto, la piscina es muy grande y limpia. Mis hijos se divirtieron mucho.",
        fecha: "2025-12-23 03:15 PM",
        calificacion: 5
    },
    {
        id: 104,
        usuario: "Ana Torres",
        comentario: "La ubicación es excelente, cerca de todo. Sin embargo, el aire acondicionado hacía un poco de ruido por la noche.",
        fecha: "2025-12-22 09:00 PM",
        calificacion: 3
    },
    {
        id: 105,
        usuario: "Luisa Méndez",
        comentario: "Me encantó la decoración del lobby. El personal de recepción muy amable en todo momento.",
        fecha: "2025-12-20 02:45 PM",
        calificacion: 5
    },
    {
        id: 106,
        usuario: "Jorge Ruiz",
        comentario: "Buena relación calidad-precio. Las camas son muy cómodas.",
        fecha: "2025-12-19 11:20 AM",
        calificacion: 4
    },
    {
        id: 107,
        usuario: "Sofía Castro",
        comentario: "No me gustó mucho la comida del restaurante principal, esperaba más variedad local.",
        fecha: "2025-12-18 08:10 PM",
        calificacion: 2
    },
    {
        id: 108,
        usuario: "Pedro Castillo",
        comentario: "Excelente experiencia en el spa. Muy relajante.",
        fecha: "2025-12-15 05:00 PM",
        calificacion: 5
    }
];

app.get('/api/comentarios', (req, res) => {
    res.status(200).json({
        exito: true,
        cantidad: comentarios.length,
        data: comentarios
    });
});

app.get('/api/comentarios/:id', (req, res) => {
    const idBusqueda = parseInt(req.params.id);
    const comentarioEncontrado = comentarios.find(c => c.id === idBusqueda);

    if (comentarioEncontrado) {
        res.status(200).json({
            exito: true,
            data: comentarioEncontrado
        });
    } else {
        res.status(404).json({
            exito: false,
            mensaje: "Comentario no encontrado con ese código"
        });
    }
});

app.get('/', (req, res) => {
    res.send('API HotelVerde Comentarios v2 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});