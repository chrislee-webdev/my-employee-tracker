DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    id INT PRIMARY KEY,
    department_name VARCHAR(30)
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department INT,
    CONSTRAINT fk_dept FOREIGN KEY (department) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    salary DECIMAL,
    role INT,
    manager_id INT,
    department INT,
    CONSTRAINT fk_role FOREIGN KEY (role) REFERENCES role(id),
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id),
    CONSTRAINT fk_department FOREIGN KEY (department) REFERENCES department(id)
);