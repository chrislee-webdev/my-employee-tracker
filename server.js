const mysql = require('mysql2');
const express = require('express');
const inquirer = require('inquirer');
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

// Main menu
const mainMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'mainMenu',
            message: 'Please select from the following options:',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add department',
                'Add role',
                'Add employee',
                'Update employee role'
            ]
        }
    ]).then((select) => {
        if (select.mainMenu === 'View all departments') {
            viewAllDepartments();
        }
        if (select.mainMenu === 'View all roles') {
            viewAllRoles();
        }
        if (select.mainMenu === 'View all employees') {
             viewAllEmployees();
        }
        if (select.mainMenu === 'Add department') {
            addDepartment();
        }
        if (select.mainMenu === 'Add role') {
            addRole();
        }
        if (select.mainMenu === 'Add employee') {
            addEmployee();
        }
        if (select.mainMenu === 'Update employee role') {
            updateEmployeeRole();
        }
    })   
}
mainMenu();

// Get all departments
app.get('/api/department', (req, res) => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message});
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});

//Get all roles
app.get('/api/role', (req, res) => {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message});
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});

//Get all employees
app.get('/api/employee', (req, res) => {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message});
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});

// Create a department
const sql = `INSERT INTO department (id, name) VALUES (?, ?)`;
db.query(sql, (err, result) => {
    if (err) {
    console.log(err);
    }
    console.log(result);
})

// Create a role
const sql = `INSERT INTO role (id, title, salary, department_id) VALUES (?, ?, ? ,?)`;
db.query(sql, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
})

// Create an employee
const sql = `INSERT INTO employee (id, first_name, last_name, role_id, manager_id)`;
db.query(sql, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result)
})

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.statusCode(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});