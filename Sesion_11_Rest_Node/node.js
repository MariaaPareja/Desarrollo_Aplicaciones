const express = require('express');
const app = express();
app.use(express.json());

let libros = [
    { id: 1, titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez" },
    { id: 2, titulo: "Don Quijote", autor: "Miguel de Cervantes" },
];

// GET - Obtener todos los libros
app.get('/api/libros', (req, res) => {
    res.json(libros);
});

// POST - Agregar un nuevo libro
app.post('/api/libros', (req, res) => {
    const { titulo, autor } = req.body;
    const nuevoLibro = { id: libros.length + 1, titulo, autor };
    libros.push(nuevoLibro);
    res.status(201).json(nuevoLibro);
});

// PUT - Actualizar un libro existente
app.put('/api/libros/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, autor } = req.body;
    const libro = libros.find(l => l.id === parseInt(id));
    if (!libro) return res.status(404).send('El libro no existe.');

    libro.titulo = titulo;
    libro.autor = autor;
    res.json(libro);
});

// DELETE - Eliminar un libro
app.delete('/api/libros/:id', (req, res) => {
    const { id } = req.params;
    const libroIndex = libros.findIndex(l => l.id === parseInt(id));
    if (libroIndex === -1) return res.status(404).send('El libro no existe.');

    const eliminado = libros.splice(libroIndex, 1);
    res.json(eliminado);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
