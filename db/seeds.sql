INSERT INTO department
    (id, department_name)
    VALUES 
    (1, 'Human Resources'),
    (2, 'Accounting'),
    (3, 'Operations'),
    (4, 'Marketing'),
    (5, 'Sales');

INSERT INTO role
    (title, id, department_id, salary)
    VALUES
    ('HR Manager',1, 1, 200),
    ('HR Associate',2 , 1, 150),
    ('Accounting Manager', 3, 2, 200),
    ('Accouting Intern', 4, 2, 100),
    ('Operations Manager', 5, 3, 200),
    ('Operations Associate', 6, 3, 150),
    ('Digital Marketing Manager', 7, 4, 200),
    ('Digital Marketing Associate', 8, 4, 150),
    ('Sales Manager', 9, 5, 200),
    ('Sales Associate', 10, 5, 150);

INSERT INTO employee
    (id, first_name, last_name, role_id,    department_id, salary, manager_id)
    VALUES
    (1, 'Jessie', 'Reese', 1, 1, 200, NULL),
    (2, 'Clay', 'Snyder', 2, 1, 150, 1),
    (3, 'Santos', 'Conner', 3, 2, 200, NULL),
    (4, 'Jeffrey', 'Hudson', 4, 2, 100, 2),
    (5, 'Kimberly', 'Harrison', 5, 3, 200, NULL);


