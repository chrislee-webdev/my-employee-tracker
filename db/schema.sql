CREATE TABLE department (
    id INT PRIMARY KEY,
    department_name VARCHAR(30)
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    title VARCHAR(30),
    CONSTRAINT fk_party FOREIGN KEY (title) REFERENCES role(title) ON DELETE SET NULL,
    role_id INT,
    salary DECIMAL,
    manager_id INT
);