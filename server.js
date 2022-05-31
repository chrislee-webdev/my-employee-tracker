const mysql = require('mysql2');
const express = require('express');
const inquirer = require('inquirer');
const e = require('express');
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

// View all departments
const viewAllDepartments = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message});
            return;
        }
        console.table(row);
        mainMenu();
        });
    };


// View all roles
const viewAllRoles = () => {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message});
            return;
        }
        console.table(row);
        mainMenu();
        });
    };

// View all employees
const viewAllEmployees = () => {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message});
            return;
        }
        console.table(row);
        mainMenu();
        });
    };


//Create a department
const addDepartment = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'What is the department id?'
        },
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the department?'
        }
    ]).then((answer) => {
        const sql = `INSERT INTO department (id,name) VALUES (?, ?)`;
        db.query(sql, [answer.id, 
            answer.departmentName], (err, results) => {
            if (err) {
            console.log(err);
            }
            console.log('Department created');
            })
            mainMenu();
        })
    }

// // Create a role
const addRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'roleId',
            message: 'What is the role ID?'
        },
        {
            type: 'input',
            name: 'roleTitle',
            message: 'What is the name of the role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for the role?'
        },
        {
            type: 'input',
            name: 'roleDepartment',
            message: 'What is the department ID for this role?'
        },
    ]).then((answer) => {
        const sql = `INSERT INTO role (id, title, salary, department_id) VALUES (?, ?, ?, ?)`
        db.query(sql, [answer.roleId, answer.roleTitle, answer.salary, answer.roleDepartment], (err, results) => {
            if (err) {
                console.log(err);
            }
            console.log('Role created')
        }) 
        mainMenu();
    })
}

// Create an employee
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Please enter the first name of the employee'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Please enter the last name of the employee',
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'Please enter the employee\'s role ID'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Please enter the manager ID'
        }
    ]).then((answer) => {
        const sql = `INSERT INTO employee ( first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
        db.query(sql, [answer.employeeId, answer.firstName, answer.lastName, answer.roleId, answer.manaderId], (err, results) => {
        if (err) {
        console.log(err);
        }
        console.log('Employee created')
        })
        mainMenu()
        })
    }

// Functions
mainMenu();

// Default response for any other request (Not Found)
// app.use((req, res) => {
//     res.statusCode(404).end();
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });