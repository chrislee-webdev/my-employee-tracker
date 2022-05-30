const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Username
        user: 'root',
        // Password
        password: 'meiling14',
        database: 'employees'
    },
    console.log('Connected to the employees database.')
);

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

// Get all departments
app.get('/api/department', (req, res) => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message});
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Create a department
const sql = `INSERT INTO department (id, name) VALUES (?, ?)`;
const params = [2, 'Information Tech'];
db.query(sql, params, (err, result) => {
    if (err) {
    console.log(err);
    }
    console.log(result);
})

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.statusCode(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});