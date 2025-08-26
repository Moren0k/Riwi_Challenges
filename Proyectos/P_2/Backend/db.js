import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'RiwiMVP'
});

db.connect(err => {
    if (err) console.error('Error DB:', err);
    else console.log('Conectado a la DB MySQL Correctamente');
});

export default db;