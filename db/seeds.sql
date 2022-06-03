INSERT INTO department
    (id, name)
    VALUES 
    (1, 'Human Resources'),
    (2, 'Accounting'),
    (3, 'Operations'),
    (4, 'Marketing'),
    (5, 'Sales');

INSERT INTO role
    (id, title, salary, department_id)
    VALUES
    (1,'HR Manager', 200, 1),
    (2,'HR Associate', 150, 1),
    (3,'Accounting Manager', 200, 2),
    (4,'Accouting Intern', 100, 2),
    (5,'Operations Manager', 200, 3),
    (6,'Operations Associate', 150, 3),
    (7,'Digital Marketing Manager', 200, 4),
    (8,'Digital Marketing Associate', 150, 4),
    (9,'Sales Manager', 200, 5),
    (10,'Sales Associate', 150, 5);

INSERT INTO employee
    (id, first_name, last_name, role_id, manager_id, dept_id)
    VALUES
    (1, 'Jessie', 'Reese', 1, NULL, 1),
    (2, 'Clay', 'Snyder',  6, 5, 3),
    (3, 'Santos', 'Conner', 5, NULL, 3),
    (4, 'Jeffrey', 'Hudson', 2, 1, 2),
    (5, 'Kimberly', 'Harrison', 9, NULL, 5);

