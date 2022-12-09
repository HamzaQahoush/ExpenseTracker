## Tarjama Task

Backend Developer Assessment

#### Overview

The purpose of this assessment is to give the employer a deep idea about the technical skills of the candidate since they are required to do the task explained below.
Task Details
The Main Idea
A candidate is required to build a backend application which manages the expenses of individuals, the only need is the backend API’s and nothing else.
Modules

The application consists of 3 modules:

1.  Users: represents the users of the application, the individuals who want to store their experiences.
2.  Categories: represents the type to which the expenses belong, ex: invoices, grocery, car fuel, schools, medical, insurance.
3.  Expenses: represents the expenses themselves, ex. The user X spent JOD 10 on Feb 15, 2022, as a grocery purchase
    Technologies to be used
4.  Programming language: Typescript
5.  Web framework: Express.js
6.  Database: PostgreSQL
7.  Database ORM: Sequelize.js
8.  Caching Service: Redis

Database Tables and Attributes

1. User
   a. id
   b. name
   c. email
   d. password
   e. last_login
2. Category
   a. id
   b. user_id
   c. name
3. Expenses
   a. id
   b. user_id
   c. category_id
   d. spending_date
   e. amount

### Resources and APIs

User
a. Register: Creating an account by the user name, email, and password.
b. Login
Category (For the logged in user)
a. Create
b. Edit
c. Get
d. List

Expenses (For the logged in user)
a. Create
b. Edit
c. Delete
d. List By (day, month, year)
Task Delivery

### Candidate is supposed to:

1. Create an empty repository on their github account.
2. Clone the repository above on their PC.
3. Implement the task
4. Keep doing git commit as much as possible to give a progress visibility.
5. git push their work.
6. Share the link of the repository with the assessment requester.
