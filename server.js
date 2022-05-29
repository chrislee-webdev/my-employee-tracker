const mysql = require('mysql2');
const express = require('express');
const { status } = require('express/lib/response');

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

//Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    user:'',
    password:'',
    database: 'employees'
},
console.log('Connected to the employees database.')
)

// db.query(`SELECT * FROM employees`, (err, rows) => {
//     console.log(rows);
// });

//Get a single emplyee
db.query(`SELECT * FROM employees WHERE id = 1`, (err, row) => {
    if (err) {
        console.log(err);
    }
    console.log(row);
});

//Delete an employee
db.querry(`DELETE FROM employee WHERE id = ?`, 1, (err, result) => {
    if (err) {
        console.log(err)
    }
    console.log(result);
});

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});