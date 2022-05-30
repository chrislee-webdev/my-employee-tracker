const mysql = require('mysql2');
const inquirer = require('inquirer');

//Connect to DB
const db = mysql.createConnection({
    host: 'loalhost',
    user: '',
    password: '',
    database: 'employees'
},
console.log('Connected to employees database.')
)

//Initial prompt
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'mainMenu',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role'
            ]
        },
    ]).then((answers) => {
        const { choices } = answers;
        if (choices === 'View all departments') {
            viewAllDepartments();
        }
        if (choices === 'View all roles') {
            viewAllRoles();
        }
        if (choices === 'View all employees') {
            viewAllEmployees();
        }
        if (choices === 'Add a department') {
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

//viewAllDepartments
const viewAllDepartments = () => {

}
//viewAllRoles
const viewAllRoles = () => {

}
//viewAllEmployees
const viewAllEmployees = () => {

}
//addDepartment
const addDepartment = () => {

}
//addRole
const addRole = () => {

}
//addEmployee
const addEmployee = () => {

}
//updateEmployeeRole
const updateEmployeeRole = () => {

}

//Call function
promptUser();