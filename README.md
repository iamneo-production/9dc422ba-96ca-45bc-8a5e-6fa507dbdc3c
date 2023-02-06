<a name="readme-top"></a>


[![Anuj][linkedin-shield1]][contributors-url1]
[![Ayush][linkedin-shield2]][contributors-url2]
[![Prakhar][linkedin-shield3]][contributors-url3]
[![Sanket][linkedin-shield4]][contributors-url4]

## The Project Presentation
[![Canva][canva-shield]][canva-url]
-----------------------------------------------------------------------------------

<!-- PROJECT LOGO -->
<br />
<div align="center">


![image](https://user-images.githubusercontent.com/77242965/204131932-eed3c646-8e34-4356-83e9-9712817a959b.png)



  <h3 align="center">RBH</h3>

  <p align="center">
     This is a full-stack web application for banking .
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="#">Report Bug</a>
    ·
    <a href="#">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="technologies-used">Technologies used</a></li>
    <li><a href="#frontend">Frontend</a></li>
    <li><a href="#backend">Backend</a></li>
    <li><a href="#description">Description</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#installation">How to use</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![image](https://user-images.githubusercontent.com/77242965/204131812-13bfe3ee-d794-49e7-be72-5c839280d1e5.png)

----------------------



<p align="right"><a href="#readme-top">back to top</a></p>


----------------------

## RBH Bank - A Digital Neobank
RBH Bank is a digital bank built using Node.js, MongoDB, and Express. This application implements a user-service, account-service, and transaction-service to provide a complete banking experience.

## Installation
To install the RBH Bank, follow these steps:

- Clone the repository
- cd into the server directory
- Run npm i to install dependencies
- Start the server using nodemon index.js

## File Structure
The main root file for the server is index.js, which connects to three main routes: user-service, account-service, and transaction-service.

<!-- Description -->
## Description

 This API is for creating a simple banking application developed in Node JS and secured by JWT token.
- It includes three independent services
  1. User-Service
  1. Account-Service
  1. Transaction-Service
- The User-Service takes care of handling user related information.
- the Account-Service takes care of handling account related information.
- The User-Service takes care of handling user related information.
- The Transaction-Service takes care of handling transaction related information.
- I will be adding the low level designs of this seperately very soon.

## User Service
The user-service allows users to register with RBH Bank and provides a validate function for login. The service also includes several GET and UPDATE requests. During login, a JSON Web Token (JWT) is generated and used as a header for the account-service.

## Account Service
The account-service allows users to create a new account and includes functions such as createnewaccount, getaccountdetailsbyusername, getaccountdetails, addpayee, getpayees, and transferamount. The addpayee function is used to add a beneficiary for making payments. The username is used as a foreign key in the user table and the JWT token is used for security.

## Transaction Service
The transaction-service includes two functions: trans summary and log summary. Trans summary provides a transaction summary with remarks after the transaction.

<!-- Frontend -->
## Frontend

  1. Use Will not be able acess Dashboard untill they login.
  2. UIDAI Aadhar verification is integrated.
  3. OTP verification will be soon implemented.
  
  
<!-- backend -->
## Backend

The backend is created on Express. It has 3 features for now.
   1. New Account creationg
   2. Account Validation and other basic user services
   3. Transactional services (NEFT type of tranfer technique)
- The transactional services includes normal banking transactions between users, Account balance, Account validation, New account creation etc.

<p align="right"><a href="#readme-top">back to top</a></p>


<!-- Roadmap -->
## Roadmap
<div display="flex">
<img src="https://user-images.githubusercontent.com/77981888/201920119-68f6b221-d7c1-4a47-9658-125f3defe780.jpeg"  width="400" height="300" />
<img src="https://user-images.githubusercontent.com/77981888/201920553-cabedc64-6a02-4887-b13e-705092cdb6d6.jpeg"  width="400" height="300" />

</div>
<div display="flex" justify-content="center">
<img src="https://user-images.githubusercontent.com/77981888/201920424-7c2c4a68-a4f6-4a1a-87f3-72d4134b9ef7.jpeg"  width="800" height="300" />

</div>




## Tech Stack
The following technologies were used to build RBH Bank:


* [![React][React.js]][React-url] -> One of the most popular front-end javascript library.
* [![Express][Express.js]][Express-url] -> A Nodejs module to develop Restfull APIs. Here I have used it for developing Restfull APIs.
* [![MongoDB][MongoDB]][MongoDB-url] ->  One of the most popular database.
* [![JWT][JWT]][JWT-url] ->  A Nodejs module to generate JWT token and to verify the provided token. Here I have used to it generate JWT token on successful login and to verify each endpoint at the time of request.
* [![JOI][JOI]][JOI-url] ->  A Nodejs module to validate schemas. Here I have used it to validate the request body as input.
* [![Morgan][Morgan]][Morgan-url] ->  A Nodejs module to log http request and respone. Here I have used it for development purpose.
* [![B-crypt][B-crypt]][Bcrypt-url] ->  A Nodejs module to encrypt and decrypt. Here I have used it to encrypt the user password at the time of registering and compare it at the time of login.

## Contributing
If you would like to contribute to RBH Bank, please reach out to the development team.

<p align="right"><a href="#readme-top">back to top</a></p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield1]: https://img.shields.io/static/v1?label=&message=Anuj&color=black&style=for-the-badge&logo=linkedin
[linkedin-shield2]: https://img.shields.io/static/v1?label=&message=Ayush&color=black&style=for-the-badge&logo=linkedin
[linkedin-shield3]: https://img.shields.io/static/v1?label=&message=Prakhar&color=black&style=for-the-badge&logo=linkedin
[linkedin-shield4]: https://img.shields.io/static/v1?label=&message=Sanket&color=black&style=for-the-badge&logo=linkedin
[canva-shield]: https://img.shields.io/static/v1?label=&message=Click-Here&color=black&style=for-the-badge&logo=Canva
[contributors-url1]: https://www.linkedin.com/in/awasthi-anuj/
[contributors-url2]: https://www.linkedin.com/in/ayush-mehta-6997a4235/
[contributors-url3]: https://www.linkedin.com/in/prakhartomar53/
[contributors-url4]: https://www.linkedin.com/in/sanket-kumar-singh-b698191b8/
[canva-url]: https://www.canva.com/design/DAFTILlf_XE/UVbaZyQnBFmsyjjHRuuNgQ/view?utm_content=DAFTILlf_XE&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent


[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[JWT]: https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink
[JWT-url]: https://jwt.io/
[JOI]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[JOI-url]: https://joi.dev/
[Morgan]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Morgan-url]: https://www.npmjs.com/package/morgan
[B-crypt]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[Bcrypt-url]: https://www.npmjs.com/package/bcryptjs
#
