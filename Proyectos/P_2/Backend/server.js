import express from 'express';
import cors from 'cors';
import db from './db.js';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.DB_PORT || 3000;
app.use(cors());
app.use(express.json());
dotenv.config();

/* Endpoints */

// Conseguir todos los analysis
// Traer análisis con info amigable para la tabla
app.get('/analysis', (req, res) => {
  const query = `
    SELECT a.analysis_id, a.submission_id, a.ia_percentage, a.ia_detected, a.explanation,
           f.feedback_id, f.comment,
           s.name_coder, s.name_training
    FROM Analysis a
    JOIN Submissions s ON a.submission_id = s.submission_id
    LEFT JOIN Feedbacks f ON a.analysis_id = f.analysis_id
  `;
  db.query(query, (err, rows) => {
    if (err) return res.status(500).json({ error: 'Error en DB' });
    res.json(rows);
  });
});


// Conseguir un analysis por ID
app.get('/analysis/:id', (req, res) => {
    const { id } = req.params;
    const query = `
    SELECT a.analysis_id, a.submission_id, a.ia_percentage, a.ia_detected, a.explanation, f.feedback_id, f.comment
    FROM Analysis a
    LEFT JOIN Feedbacks f ON a.analysis_id = f.analysis_id
    WHERE a.analysis_id = ?
    `;

    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Error en DB'});
        if (results.length === 0) return res.status(404).json({ error: 'Análisis no encontrado' });
        res.json(results[0]);
    });
});

// Crear un feedback
app.post('/feedback', (req, res) => {
    const { analysis_id, comment } = req.body;
    if (!analysis_id || !comment) return res.status(400).json({ error: 'Faltan datos' });

    const query = 'INSERT INTO Feedbacks (analysis_id, comment) VALUES (?, ?)';
    db.query(query, [analysis_id, comment], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error en DB' });
        res.status(201).json({ message: 'Feedback creado', insertedId: result.insertId });
    });
});

// DELETE /feedback/:id
app.delete('/feedback/:id', async (req, res) => {
    const feedbackId = req.params.id;
    try {
        const [result] = await db.query('DELETE FROM feedback WHERE id = ?', [feedbackId]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Feedback no encontrado' });
        }
        res.json({ message: 'Feedback eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error eliminando el feedback' });
    }
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});