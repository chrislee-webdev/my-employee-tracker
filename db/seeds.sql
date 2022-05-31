INSERT INTO department
    (department_name)
    VALUES 
    ('Human Resources'),
    ('Accounting'),
    ('Operations'),
    ('Marketing'),
    ('Sales')

INSERT INTO roles
    (id, title, salary, department_id)
    VALUES
    (1, 'HR Manager', 200, 1),
    (2, 'HR Associate', 150, 1),
    (3, 'Accounting Manager', 200, 2),
    (4, 'Accouting Intern', 100, 2),
    (5, 'Operations Manager', 200, 3),
    (6, 'Operations Associate', 150 3),
    (7, 'Digital Marketing Manager', 200, 4),
    (8, 'Digital Marketing Associate', 150, 4),
    (9, 'Sales Manager', 200, 5),
    (10, 'Sales Associate', 150, 5)

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
    VALUES
    ('Makoto', 'Street' 1, 1 ),
    ('Harold', 'Chou', 8, 5),
    ('Gwynedd', 'Lewis', 3, 3),
    ('Danielle', 'Riley', 9, 9),
    ('Sasha', 'Borysov', 10, 9)


