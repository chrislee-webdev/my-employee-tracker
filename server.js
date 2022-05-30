const mysql = require('mysql2');
const express = require('express');
const { status } = require('express/lib/response');
const inquirer = require('inquirer');

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

//Inital prompt
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'mainMenu',
            message: 'What would you like to do?',
            choices: ['View all departments', "View all roles", 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role' ]
        },
    ]).then((answers) => {
        const { choices } = answers;
        if (choices === 'View all departments') {
            //View departments
            viewDepatments();
        }
        if (choices === 'View all roles') {
            //View roles
            viewRoles();
        }
        if (choices === 'View all employess') {
            viewEmployees();
        }
        if (choices === 'Add a department') {
            //Add department
            addDepartment();
        }
        if (choices === 'Add a role') {
            addRole();
        }
        if (choices === 'Add an employee') {
            addEmployee();
        }
        if (choices === 'Update an employee role') {
            updateEmployeeRole();
        }
    }) 
}

//viewDepartments function
const viewDepartments = () => {
    
}
//viewRoles function
//viewEmployees function
//addDepartment function
//addRole
//addEmployee
//updateEmployeeRole




















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

//Create an employee
const sql = `INSERT INTO employee (id, first_name, last_name, VALUES (?, ?, ?, ?)`;

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// })



//Delete an employee
// db.query(`DELETE FROM employee WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(result);
// });



app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});