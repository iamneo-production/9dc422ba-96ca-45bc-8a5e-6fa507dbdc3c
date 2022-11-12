# bank_app

## livesite #
![Project Image](#)

> This is a full-stack web application for banking .

---

### Table of Contents

- [FrontEnd](#Frontend)
- [Backend](#Backend)
- [Technologies](#Technologies)
- [Descripion](#Descriprion)
- [How to Use](#how-to-use)


---

#### FrontEnd

- This is a web app in which users can post their adventures or their stories that they wanna share with others.
- Users can like and comment on different post.
- In order to like comment or post a story they need to login.
- User can login wither by Google or manually by registering.

#### Backend

- The backend is created on Express. It has 3 features for now.
   1. New Account creationg
   2. Account Validation and other basic user services
   3. Transactional services (NEFT type of tranfer technique)
- The transactional services includes normal banking transactions between users, Account balance, Account validation, New account creation etc.   


#### Technologies

- React   ->
- Express -> A Nodejs module to develop Restfull APIs. Here I have used it for developing Restfull APIs.
- MongoDB -> One of the most popular database,
- Redux   ->
- M-UI    ->
- JWT     -> A Nodejs module to generate JWT token and to verify the provided token. Here I have used to it generate JWT token on successful login and to verify each endpoint at the time of request.
- JOI     -> A Nodejs module to validate schemas. Here I have used it to validate the request body as input.
- Morgan  -> A Nodejs module to log http request and respone. Here I have used it for development purpose.
- B-crypt -> A Nodejs module to encrypt and decrypt. Here I have used it to encrypt the user password at the time of registering and compare it at the time of login.


####  Description

- This API is for creating a simple banking application developed in Node JS and secured by JWT token.
- It includes three independent services
  1. User-Service
  1. Account-Service
  1. Transaction-Service
- The User-Service takes care of handling user related information.
- the Account-Service takes care of handling account related information.
- The User-Service takes care of handling user related information.
- The Transaction-Service takes care of handling transaction related information.
- I will be adding the low level designs of this seperately very soon.


[Back To The Top](#read-me-template)

---

## How To Use

Download the repo and then follow the installation methods given below.

#### Installation


# For backend
###### Step 1 - Cd over to the folder
###### Step 2 - npm i
###### Step 3 - Set the environment variable.
###### Step 4 - Make sure to connect your MongoDB server is running on the same environment.
###### Step 5 - Nodemon index.js



[Back To The Top](#read-me-template)


# 9dc422ba-96ca-45bc-8a5e-6fa507dbdc3c
https://sonarcloud.io/summary/overall?id=examly-test_9dc422ba-96ca-45bc-8a5e-6fa507dbdc3c
