1. Node Modules folder is not included. So will have to run "npm install" as package.json is included

2. Table naming "Teacher" and "Student" should be Present in MySql workbench under the Database schema named as "Node"
CREATE TABLE Student (
    Roll int NOT NULL,
    Name varchar(255) NOT NULL,
    Dob varchar(255),
    Marks int,
    PRIMARY KEY (Roll)
);
CREATE TABLE Teacher (
    ID int NOT NULL,
    Name varchar(255) NOT NULL,
    Password varchar(255),
    PRIMARY KEY (ID)
);

3. HBS is used as View Engine.

4. BCRYPT is used for Storing Passwords.

5. Proper Error messages are shown in every Screen. 

6. JWT is used for Authentication purposes.

7. Screenshots of the app are present in a seperate folder.