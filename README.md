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
    <li><a href="#howtouse">How to use</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![image](https://user-images.githubusercontent.com/77242965/204131812-13bfe3ee-d794-49e7-be72-5c839280d1e5.png)

----------------------

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Technologies used

* [![React][React.js]][React-url] -> One of the most popular front-end javascript library.
* [![Express][Express.js]][Express-url] -> A Nodejs module to develop Restfull APIs. Here I have used it for developing Restfull APIs.
* [![MongoDB][MongoDB]][MongoDB-url] ->  One of the most popular database.
* [![JWT][JWT]][JWT-url] ->  A Nodejs module to generate JWT token and to verify the provided token. Here I have used to it generate JWT token on successful login and to verify each endpoint at the time of request.
* [![JOI][JOI]][JOI-url] ->  A Nodejs module to validate schemas. Here I have used it to validate the request body as input.
* [![Morgan][Morgan]][Morgan-url] ->  A Nodejs module to log http request and respone. Here I have used it for development purpose.
* [![B-crypt][B-crypt]][Bcrypt-url] ->  A Nodejs module to encrypt and decrypt. Here I have used it to encrypt the user password at the time of registering and compare it at the time of login.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

----------------------

<!-- Frontend -->
## Frontend

  1. Use Will not be able acess Dashboard untill they login.
  2. UIDAI Aadhar verification is integrated.
  3. OTP verification will be soon implemented.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

----------------------

<!-- backend -->
## Backend

The backend is created on Express. It has 3 features for now.
   1. New Account creationg
   2. Account Validation and other basic user services
   3. Transactional services (NEFT type of tranfer technique)
- The transactional services includes normal banking transactions between users, Account balance, Account validation, New account creation etc.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

----------------------

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

<p align="right">(<a href="#readme-top">back to top</a>)</p>

----------------------


<!-- Roadmap -->
## Roadmap
<div display="flex">
<img src="https://user-images.githubusercontent.com/77981888/201920119-68f6b221-d7c1-4a47-9658-125f3defe780.jpeg"  width="400" height="300" />
<img src="https://user-images.githubusercontent.com/77981888/201920553-cabedc64-6a02-4887-b13e-705092cdb6d6.jpeg"  width="400" height="300" />

</div>
<div display="flex" justify-content="center">
<img src="https://user-images.githubusercontent.com/77981888/201920424-7c2c4a68-a4f6-4a1a-87f3-72d4134b9ef7.jpeg"  width="800" height="300" />

</div>



<p align="right">(<a href="#readme-top">back to top</a>)</p>

----------------------



<!-- How to use -->
## How to use

Download the repo and then follow the installation methods given below.


### Backend

###### Step 1 - Cd over to the folder
###### Step 2 - npm i
###### Step 3 - Set the environment variable.
###### Step 4 - Make sure to connect your MongoDB server is running on the same environment.
###### Step 5 - Nodemon index.js

<p align="right">(<a href="#readme-top">back to top</a>)</p>

----------------------


### Frontend

###### Step 1 - Cd over to the folder
###### Step 2 - npm i
###### Step 3 - npm start

<p align="right">(<a href="#readme-top">back to top</a>)</p>

----------------------

# Talawa Docs
💬 Join the community on Slack. The link can be found in the `Talawa` [README.md](https://github.com/PalisadoesFoundation/talawa) file.

[![N|Solid](static/img/logos/talawa-logo-200x200.png)](https://github.com/PalisadoesFoundation/talawa-docs)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![GitHub stars](https://img.shields.io/github/stars/PalisadoesFoundation/talawa-docs.svg?style=social&label=Star&maxAge=2592000)](https://github.com/PalisadoesFoundation/talawa-docs)
[![GitHub forks](https://img.shields.io/github/forks/PalisadoesFoundation/talawa-docs.svg?style=social&label=Fork&maxAge=2592000)](https://github.com/PalisadoesFoundation/talawa-docs)

Talawa is a modular open source project to manage group activities of both non-profit organizations and businesses.

Core features include:

 1. Membership management
 2. Groups management
 3. Event registrations
 4. Recurring meetings
 5. Facilities registrations

``talawa`` is based on the original ``quito`` code created by the [Palisadoes Foundation][pfd] as part of its annual Calico Challenge program. Calico provides paid summer internships for  Jamaican university students to work on selected open source projects. They are mentored by software professionals and receive stipends based on the completion of predefined milestones. Calico was started in 2015. Visit [The Palisadoes Foundation's website](http://www.palisadoes.org/) for more details on its origin and activities.

# Talawa Components

`talawa` has these major software components:

1. **talawa**: [A mobile application with social media features](https://github.com/PalisadoesFoundation/talawa)
1. **talawa-api**: [An API providing access to user data and features](https://github.com/PalisadoesFoundation/talawa-api)
1. **talawa-admin**: [A web based administrative portal](https://github.com/PalisadoesFoundation/talawa-admin)
1. **talawa-docs**: [The online documentation website](https://github.com/PalisadoesFoundation/talawa-docs)

# Documentation

- The `talawa` documentation can be found [here](https://docs.talawa.io/).
- Want to contribute? Look at [CONTRIBUTING.md](https://github.com/PalisadoesFoundation/talawa-docs/blob/master/CONTRIBUTING.md) to get started.
- Visit the [Talawa-Docs GitHub Repository](https://github.com/PalisadoesFoundation/talawa) to see the code.

# Installation

The contents of the `talawa-docs` repo is used to automatically create [the talawa documentation website](https://docs.talawa.io/). The automation uses [Docusaurus](https://docusaurus.io/docs/), a modern static website generator.

Intallation will vary depending on whether you use the `yarn` or `npm` packages. Visit the [Docusaurus installation web page](https://docusaurus.io/docs/installation) if you have any difficulties with the steps below.

## Using Yarn

The steps are simple:

1. Clone this repository
2. [Install `yarn` on your system using these instructions](https://classic.yarnpkg.com/en/docs/install)
3. Follow these steps next

```console
$ git clone https://github.com/PalisadoesFoundation/talawa-docs
$ cd talawa-docs
$ yarn add docusaurus
```

## Using NPM

Insert documentation here.

# Running the Development Server

To preview your changes as you edit the files, you can run a local development server that will serve your website and it will reflect the latest changes.

## Using Yarn

Follow these steps:

**Note:** Install the latest stable version of Node.js on your system if you get a `The engine "node" is incompatible with this module. Expected version` message during the procedure below. You may need to use a custom repository for this.

```console
$ sudo apt-get -y install npm
$ sudo npm install --global yarn
$ cd talawa-docs
$ yarn add docusaurus
$ yarn run start
```

By default, a browser window will open at http://localhost:3000.

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Using NPM

Insert documentation here.

# Building Static HTML Pages

**In most cases is unnecessary**. Running the `development server` will be sufficient.

If you need to generate static HTML pages (unlikely), then follow these steps.

```console
$ yarn run build
```

This command generates static content into the `/build` directory and can be served using any static contents hosting service.



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
