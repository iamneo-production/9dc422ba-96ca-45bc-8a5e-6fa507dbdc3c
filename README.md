<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Ayush][linkedin-shield2]][contributors-url2]
[![Anuj][linkedin-shield1]][contributors-url1]
[![Prakhar][linkedin-shield3]][contributors-url3]
[![Sanket][linkedin-shield4]][contributors-url4]

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
<!-- [![LinkedIn][linkedin-shield]][linkedin-url] -->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">RBH BANK by Code-O-Holics</h3>

  <p align="center">
    An awesome Online banking web app made by students of punjab engineering college!
    <br />
    <a href="#"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://neobank2.vercel.app/">API URL</a>
    ·
    <a href="https://github.com/iamneo-production/9dc422ba-96ca-45bc-8a5e-6fa507dbdc3c/issues">Report Bug</a>
    ·
    <a href="https://github.com/iamneo-production/9dc422ba-96ca-45bc-8a5e-6fa507dbdc3c/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project


 **RBH Bank is a digital bank built using Node.js, MongoDB, and Express. This application implements a user-service, account-service, and transaction-service to provide a complete banking experience.**




![Server Demo pic](https://user-images.githubusercontent.com/77238801/218259508-a04d01fe-a037-4439-8c79-172e1501dc9d.png)

Here are some of the key features of the Web App:
* Very user friendly User interface.
* Very robust and fast apis.
* Extremely safe and everything is secure.
* Whole server is tested using different testcases and if found any bugs then it does not affects other features.
Of course, there are still a lot of issues to be tackled and new features to be added and we are slowly but surely working on it.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This web app is divided into frontend (client) and backend (server or apis). 

#### Frontend Tech used
* [![React][React.js]][React-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]

#### Backend Tech used
* [![Express.js][Express.js]][Express-url]
* [![Node][Node]][Node-url]
* [![Morgan][Morgan]][Morgan-url]
* [![MongoDB][MongoDB]][MongoDB-url]
* [![JWT][JWT]][JWT-url]
* [![JOI][JOI]][JOI-url]
* [![Jest][Jest]][JEST-url]
* [![B-crypt][B-crypt]][Bcrypt-url]
* [![Vercel][Vercel]][Vercel-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To run this project locally you have the prerequisites and once you are done with that follow the instructions of the frontend and the backend.

### Prerequisites

Node 14.0.0 or higher
MongoDB account
Postman or any other software simiiar to it

### Installation

#### Frontend

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

#### Backend

1. fork the repo
2. clone the forked version of the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install Node packages
   ```sh
   npm install
   ```
4. Creating .env file
   ```
    cp .env.sample .env
   ```
5. make sure you have fill all the env variables like mongodb url, secret key and node env.:
6. make sure you have nodemon installed if not then just use node main.js from root else use:
   ```
    nodemon index.js
   ```
7. To run the test use
   ```
    npm test
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

The backend is created on Express. It has 3 features for now.
   1. New Account creation.
   2. Account Validation and other basic user services.
   3. Transactional services (NEFT type of tranfer technique).
- The transactional services includes normal banking transactions between users, Account balance, Account validation, New account creation etc.

### Description

 This API is for creating a simple banking application developed in Node JS and secured by JWT token.
- It includes three independent services
  1. User-Service
  2. Account-Service
  3. Transaction-Service
- The User-Service takes care of handling user related information.
- The Account-Service takes care of handling account related information.
- The User-Service takes care of handling user related information.
- The Transaction-Service takes care of handling transaction related information.
- We will be adding the low level designs of this seperately very soon.

#### User Service
The user-service allows users to register with RBH Bank and provides a validate function for login. The service also includes several GET and UPDATE requests. During login, a JSON Web Token (JWT) is generated and used as a header for the account-service.

#### Account Service
The account-service allows users to create a new account and includes functions such as createnewaccount, getaccountdetailsbyusername, getaccountdetails, addpayee, getpayees, and transferamount. The addpayee function is used to add a beneficiary for making payments. The username is used as a foreign key in the user table and the JWT token is used for security.

#### Transaction Service
The transaction-service includes two functions: trans summary and log summary. Trans summary provides a transaction summary with remarks after the transaction.

### Folder structuring
The main file for the server is at the root named by index.js. There you can find the express server. Then there are various folders. Each of them quite different from other and you can find the details of it in the documentation.
- Controllers -> it included the router and the breakpoints of the rest apis.
- lib -> it contains some of the functions which have been used again and again in various places.
- .vercel -> it inclued the files necessary for the deployment.
- logger -> it includes the logger (what should be logged in the console what should'nt).
- Middlewares -> simple middleware for jwt setup.
- models -> it contains the schemas for different tables of the database.
- validator -> it includes the validator files which validates the schema coming from the client.
- Dao -> It includes all the data access operations (the functions which are related to database manipulation).

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap
![Account](https://user-images.githubusercontent.com/77981888/201920119-68f6b221-d7c1-4a47-9658-125f3defe780.jpeg)
![User](https://user-images.githubusercontent.com/77981888/201920553-cabedc64-6a02-4887-b13e-705092cdb6d6.jpeg)
![Transaction](https://user-images.githubusercontent.com/77981888/201920424-7c2c4a68-a4f6-4a1a-87f3-72d4134b9ef7.jpeg)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## Workflow


[![Canva][canva-shield]][canva-url]

More Coming Soon ...

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

[![Ayush][Ayush]][Ayush-url][![LinkedIn][linkedin-shield]][linkedin-url][![Gmail][Gmail]][Gmail-url]

[![Anuj][Anuj]][Anuj-url][![LinkedIn][linkedin-shield]][linkedin-url][![Gmail][Gmail]][Gmail-url]

[![Sanket][Sanket]][Sanket-url][![LinkedIn][linkedin-shield]][linkedin-url][![Gmail][Gmail]][Gmail-url]

[![Prakhar][Prakhar]][Prakhar-url][![LinkedIn][linkedin-shield]][linkedin-url][![Gmail][Gmail]][Gmail-url]


[![Project-Link][Project-Link]][Prakhar-url][![Github][Github]][Github-url] 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- Docs -->
## Documetation

Coming Soon...

<p align="right">(<a href="#readme-top">back to top</a>)</p>


[linkedin-shield1]: https://img.shields.io/static/v1?label=&message=Anuj&color=black&style=for-the-badge&logo=linkedin
[linkedin-shield2]: https://img.shields.io/static/v1?label=&message=Ayush&color=black&style=for-the-badge&logo=linkedin
[linkedin-shield3]: https://img.shields.io/static/v1?label=&message=Prakhar&color=black&style=for-the-badge&logo=linkedin
[linkedin-shield4]: https://img.shields.io/static/v1?label=&message=Sanket&color=black&style=for-the-badge&logo=linkedin
[contributors-url1]: https://www.linkedin.com/in/awasthi-anuj/
[contributors-url2]: https://www.linkedin.com/in/ayush-mehta-6997a4235/
[contributors-url3]: https://www.linkedin.com/in/prakhartomar53/
[contributors-url4]: https://www.linkedin.com/in/sanket-kumar-singh-b698191b8/
[contributors-shield]: https://img.shields.io/static/v1?label=&message=Contributors&color=black&style=for-the-badge&logo=contributors
[contributors-url]: https://img.shields.io/badge/Contributors-0769AD?style=for-the-badge&Contributors&logoColor=white
[forks-shield]: https://img.shields.io/badge/issues-12open-0769AD?style=for-the-badge&issues=12&logoColor=white
[forks-url]: https://github.com/iamneo-production/9dc422ba-96ca-45bc-8a5e-6fa507dbdc3c/network/members
[stars-shield]: https://img.shields.io/badge/stars-5-0769AD?style=for-the-badge&stars&logoColor=white
[stars-url]: https://github.com/iamneo-production/9dc422ba-96ca-45bc-8a5e-6fa507dbdc3c/pulls
[issues-shield]: https://img.shields.io/badge/Pull_Request-70merged-0769AD?style=for-the-badge&Pullrequest&logoColor=white
[issues-url]: https://github.com/iamneo-production/9dc422ba-96ca-45bc-8a5e-6fa507dbdc3c/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/ayushbhaimehta/
[product-screenshot]: ../Screenshot%202023-02-11%20142945.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[github-url]: https://github.com/iamneo-production/9dc422ba-96ca-45bc-8a5e-6fa507dbdc3c
[email-url]: https://github.com/iamneo-production/9dc422ba-96ca-45bc-8a5e-6fa507dbdc3c
[github-url]: https://github.com/iamneo-production/9dc422ba-96ca-45bc-8a5e-6fa507dbdc3c
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[JWT]: https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink
[JWT-url]: https://jwt.io/
[JOI]: https://img.shields.io/badge/joi-%23121011.svg?style=for-the-badge&logo=joi&logoColor=white
[JOI-url]: https://joi.dev/
[Morgan]: https://img.shields.io/badge/Morgan-563D7C?style=for-the-badge&logo=morgan&logoColor=white
[Morgan-url]: https://www.npmjs.com/package/morgan
[B-crypt]: https://img.shields.io/badge/Bcrypt-0769AD?style=for-the-badge&logo=bcrypt&logoColor=white
[Bcrypt-url]: https://www.npmjs.com/package/bcryptjs
[Node]:https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/dist/latest-v18.x/docs/api/
[Jest]:https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]:https://jestjs.io/docs/api
[Vercel]:https://img.shields.io/badge/vercel-%23121011.svg?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]:https://vercel.com/docs
[Gmail]:https://img.shields.io/badge/gmail-%23121011.svg?style=for-the-badge&logo=gmail&logoColor=white
[Gmail-url]:mailto:ayushmehta0620@gmail.com
[Ayush]:https://img.shields.io/badge/Ayush-20232A?style=for-the-badge&logo=Ayush&logoColor=61DAFB
[Ayush-url]:https://avatars.githubusercontent.com/u/77238801?s=400&u=e8e4e22dda235142e1e5e2d6ac75737759f8b41d&v=4
[Anuj]:https://img.shields.io/badge/Anuj-DD0031?style=for-the-badge&logo=Anuj&logoColor=white
[Sanket]:https://img.shields.io/badge/Sanket-4EA94B?style=for-the-badge&logo=Sanket&logoColor=white
[Prakhar]:https://img.shields.io/badge/Prakhar-563D7C?style=for-the-badge&logo=Prakhar&logoColor=white
[Anuj-url]:https://avatars.githubusercontent.com/u/77238801?s=400&u=e8e4e22dda235142e1e5e2d6ac75737759f8b41d&v=4
[Sanket-url]:https://avatars.githubusercontent.com/u/77238801?s=400&u=e8e4e22dda235142e1e5e2d6ac75737759f8b41d&v=4
[Prakhar-url]:https://avatars.githubusercontent.com/u/77238801?s=400&u=e8e4e22dda235142e1e5e2d6ac75737759f8b41d&v=4
[Github]:https://img.shields.io/badge/Github-4A4A55?style=for-the-badge&logo=github&logoColor=61DAFB
[Github-url]:https://github.com/ayushbhaimehta/NEo-Bank
[Project-Link]:https://img.shields.io/badge/ProjectLink-0769AD?style=for-the-badge&logo=ProjectLink&logoColor=white
[Project-Link-url]:https://github.com/ayushbhaimehta/NEo-Bank
<!-- <a name="readme-top"></a>





-----------------------------------------------------------------------------------

<!-- PROJECT LOGO -->
<!-- <br />
<div align="center">


![image](https://user-images.githubusercontent.com/77242965/204131932-eed3c646-8e34-4356-83e9-9712817a959b.png) -->


<!-- 
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
</div> -->



<!-- TABLE OF CONTENTS -->
<!-- <details>
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
</details> -->



<!-- ABOUT THE PROJECT -->
<!-- ## About The Project

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
<!-- ## Description

 This API is for creating a simple banking application developed in Node JS and secured by JWT token.
- It includes three independent services
  1. User-Service
  2. Account-Service
  3. Transaction-Service
- The User-Service takes care of handling user related information.
- The Account-Service takes care of handling account related information.
- The User-Service takes care of handling user related information.
- The Transaction-Service takes care of handling transaction related information.
- We will be adding the low level designs of this seperately very soon.

## User Service
The user-service allows users to register with RBH Bank and provides a validate function for login. The service also includes several GET and UPDATE requests. During login, a JSON Web Token (JWT) is generated and used as a header for the account-service.

## Account Service
The account-service allows users to create a new account and includes functions such as createnewaccount, getaccountdetailsbyusername, getaccountdetails, addpayee, getpayees, and transferamount. The addpayee function is used to add a beneficiary for making payments. The username is used as a foreign key in the user table and the JWT token is used for security.

## Transaction Service
The transaction-service includes two functions: trans summary and log summary. Trans summary provides a transaction summary with remarks after the transaction.

<!-- Frontend -->
<!-- ## Frontend

  1. Users will not be able acess Dashboard untill they login.
  2. UIDAI Aadhar verification is integrated.
  3. OTP verification will be soon implemented. -->
  
  
<!-- backend -->
<!-- ## Backend -->
<!-- 
The backend is created on Express. It has 3 features for now.
   1. New Account creation.
   2. Account Validation and other basic user services.
   3. Transactional services (NEFT type of tranfer technique).
- The transactional services includes normal banking transactions between users, Account balance, Account validation, New account creation etc. -->

<!-- <p align="right"><a href="#readme-top">back to top</a></p> -->


<!-- Roadmap -->
<!-- ## Roadmap
<div display="flex">
<img src="https://user-images.githubusercontent.com/77981888/201920119-68f6b221-d7c1-4a47-9658-125f3defe780.jpeg"  width="400" height="300" />
<img src="https://user-images.githubusercontent.com/77981888/201920553-cabedc64-6a02-4887-b13e-705092cdb6d6.jpeg"  width="400" height="300" />

</div>
<div display="flex" justify-content="center">
<img src="https://user-images.githubusercontent.com/77981888/201920424-7c2c4a68-a4f6-4a1a-87f3-72d4134b9ef7.jpeg"  width="800" height="300" />

</div> --> 



<!-- 
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

[canva-shield]: https://img.shields.io/static/v1?label=&message=Presentation&color=black&style=for-the-badge&logo=Canva
[canva-url]: https://www.canva.com/design/DAFTILlf_XE/UVbaZyQnBFmsyjjHRuuNgQ/view?utm_content=DAFTILlf_XE&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent


