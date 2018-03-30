<<div align="center">
<img src="https://github.com/GrissomErick/MogulCoders/blob/master/images/crittersitter.png?raw=true" alt="Project logo"></img>
</div>

<img src="https://github.com/GrissomErick/MogulCoders/blob/master/images/mogulcoders.png?raw=true" align="right"></img>


# Bamazon Customer Application
 UNC Coding Boot Camp - Critter Sitter - Project 2
 <p></p>
 
# Project Requirements are

The base requirements for Project 2 are the following:

### Must:
* Use a Node and Express Web Server.
* Be backed by a MySQL Database an ORM (not necessarily Sequelize)
* Have both GET and POST routes for retrieving and adding new data.
* Be deployed using Heroku (with Data).
* Utilize at least one new library, package, or technology that we haven't discussed.
* Have a polished frontend / UI;
* Have folder structure that meets MVC Paradigm.
* Meet good quality coding standards (indentation, scoping, naming).
* Must not expose sensitive API key information on the server.

### _Should_:
* Incorporate Basic Testing Framework.
* Use Handlebars for Server-Side Templating.
* Incorporate Authentication (JSON Web Tokens, Sessions, Etc.)
* Use an existing public dataset to power the database.
* Create a migration strategy for sharing data across team members.


The Bamazon customer version of the program displays the terminal storefront and allows the user can purchase storefront items, display total(s) based upon quantity ordered. The customer application will also decrease store inventory based upon each customer purchase.

## Customer Application Screen Capture
<img src="https://github.com/GrissomErick/Bamazon/blob/master/images/BamazonCustomer.gif?raw=true" alt="Customer App GIF"></img>
</p>

## Direct Screen Capture GIF Links
The homework submission guide outlines animated screenshots or video is required to submit this homework assignment. I have included direct links below and embedded GIF images within the individual application Readme files.

* <a href="http://s3.amazonaws.com/ewg.uncbc/Bamazon/BamazonCustomer.gif" target="_blank">Bamazon Customer GIF</a>
* <a href="http://s3.amazonaws.com/ewg.uncbc/Bamazon/BamazonManager.gif" target="_blank">Bamazon Manager GIF</a>
* <a href="http://s3.amazonaws.com/ewg.uncbc/Bamazon/BamazonSupervisor.gif" target="_blank">Bamazon Supervisor GIF</a>

## Getting Started
To use Bamazon customer application you must accomplish the following steps below. (NOTE: Ensure you have completed ["Initial Enviroment Setup"](https://github.com/GrissomErick/Bamazon#initial-environment-setup) steps first, BEFORE you complete the "Getting Started" steps below.):

**Step 1 - Edit the javascript MySQL information.**
```
1. open "bamazonCustomer.js" in your script editor
2. edit lines 14 - 17 with your database connectivity information
(Note: pay close attention to line 17, your MySQL database password)
```
**Step 2 - Begin the application using the following command line.**
```
node bamazonCustomer.js
```
## Application Readme Links
Bamazon consists of three separate applications. Each of the three applications has it's own separate Readme file. To use particular  application simply click any of the links below and follow the instructions. (NOTE: Ensure you have completed ["Initial Enviroment Setup"](https://github.com/GrissomErick/Bamazon#initial-environment-setup) steps first, BEFORE you complete the "Getting Started" steps for each seperate application Readme file.)

* [Critter Sitter Users' Readme](https://github.com/GrissomErick/MogulCoders/blob/master/README.md)
* [Critter Sitter Application Readme](https://github.com/GrissomErick/MogulCoders/blob/master/appdocs/MogulCoders.md)


## Tools Used to Built

* VS Code - [https://code.visualstudio.com/](https://code.visualstudio.com/)
* Git Tools - [https://git-scm.com/download](https://git-scm.com/download)
* Live Markdown Editor - [https://jbt.github.io/markdown-editor/](https://jbt.github.io/markdown-editor/)

## Challanges
1. Email validation was itself a bigger piece to develop from scratch.  We found one npm package (https://www.npmjs.com/package/email-verification) but that supports MongoDB and our whole project was designed to built on MySql.  So later we decided to drop the email validation.
2. When Front end and Back end developers were working on their parts, it was not clear if the application is functioning and responding properly.
3. Redfining the repo, photoshop work was done again, redesiging of web page and fillable forms. - (need reasoning language???)
4. Filtering out the APIs (will write more about this)

## Author

* **Erick Grissom** - *JS/Node.js/Express Server* - [Erick Grissom MogulCoders Repo](https://github.com/GrissomErick/MogulCoders)

## Contributors
1. Eric Grisson   (https://github.com/GrissomErick)
2. Richard Paez   (https://github.com/RPaez09)
3. Deb Bayo       (https://github.com/DABAYO)
4. Anna Pena      (https://github.com/apena21)
5. Kamal Kishore  (https://github.com/kkishore219)


