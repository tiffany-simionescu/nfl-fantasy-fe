
 ## NFL Fantasy Football Trade Anaylzer

 You can find the deployed project at http://www.tacklemytrade.com/

 ## Contributors

|                                       [Thatcher Phan](https://github.com/Th5tch3r)                                        |                                       [Laura Theimer](https://github.com/lauralyeinc)                                        |                                       [Joshua Doan](https://github.com/doanmade)                                        |                                       [Tiffany Simionescu](https://github.com/tiffany-simionescu)                                                           |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|                      [<img src="https://avatars3.githubusercontent.com/u/49928461?s=460&u=8bcddfb35e84b632c8550d1a362efb1df1921626&v=4" width = "200" />](https://github.com/Th5tch3r)                       |                      [<img src="https://avatars1.githubusercontent.com/u/52268790?s=460&v=4" width = "200" />](https://github.com/lauralyeinc)                       |                      [<img src="https://ca.slack-edge.com/ESZCHB482-W012JHQ0T2N-48b400e3487b-512" width = "200" />](https://github.com/doanmade)                       |                      [<img src="https://avatars3.githubusercontent.com/u/42684183?s=460&u=6350285357ccb2175cd8b98b2fbd951c27e35b89&v=4" width = "200" />](https://github.com/tiffany-simionescu)                       |                       
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Th5tch3r)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/lauralyeinc)             |           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/doanmade)            |          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/tiffany-simionescu)           |            
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/theimerlaura) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/josh-doan-50a72920/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/tiffanysimionescu/) | 

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![Typescript](https://img.shields.io/npm/types/typescript.svg?style=flat)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c4db1c-b10d-42c3-b157-3746edd9e81d/deploy-status)](netlify link goes in these parenthesis)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Maintainability](https://api.codeclimate.com/v1/badges/92a8bccfc4cbed259b32/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/nfl-fantasy-fe/maintainability)

Project Overview

 [Trello Board] https://trello.com/b/GR22EAEc/nfl-fantasy-perfect-trade

 [Product Canvas] https://www.notion.so/NFL-Fantasy-Perfect-Trade-881bd44def114fda8cffd8ccc362caf0

 [UX Design files] https://drive.google.com/drive/folders/1ITqPq3QO9YYWnI4oXH267EZuELNh-yTQ 

Tackle My Trade NFL Fantasy Football Trade Anaylzer is to help a fan to build their ultimate fantasy league, by making the optinmal trades trades to win their fantasy competions.  The application is user friendly for new fans that want to enjoy another excitment but not just watching the game, but having their own team to score points to win the bragging rights for each season.  It's also packed full, (not current release) of predictions and more stats for more advanced fans.  


### 4️⃣ Key Features

-    Fan can pick two NFL football players to anaylzer to see who would score more points per week.
-    Fan can pick 17 different weeks to see if a player is better than other player. 
-    Fan can register/login to have a personal dashboard. 

 1️⃣ Tech Stack

 Front end built using:
-   React
-   Material-ui
-   Styled-Components 
-   Redux 
-   Heroku 
-   React-Router-Dom 

#### Front end deployed to Heroku 

#### [Back end](https://github.com/Lambda-School-Labs/nfl-fantasy-be) built using:

#### 🚫 back end framework goes here

-    Postgres
-    Heroku
-    Express
-    Cors
-    Knex
-    Nodemon
-    Jsonwebtoken

# APIs

## 2️⃣ Authentication API https://tacklemytrade-api.herokuapp.com/api/

Base api url for the backend. 

## 3️⃣ Data Science API https://nfl-trade.herokuapp.com - under the Methodology Tab

The datascience api that hooks to the backend. This is where all 621 players stats are. 


# 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

🚫These are just examples, replace them with the specifics for your app

    *  REACT_APP_apiKey - this is your Google API key, which can be generated in the Google Cloud Console
    *  REACT_APP_authDomain - when you set up your Firebase project, this information will be in the dashboard
    *  REACT_APP_databaseURL - in the Firebase dashboard
    *  REACT_APP_projectID - in the Firebase dashboard
    *  REACT_APP_storageBucket - in the Firebase dashboard
    *  REACT_APP_messagingSenderId - in the Firebase dashboard
    *  REACT_APP_stripe_API - this is your public Stripe API key, generated in the Stripe dashboard
    *  REACT_APP_backendURL - optional for your local development server
    *  REACT_APP_clientid - this is the Stripe_connect clientID, generated in Stripe_connect settings
    *  REACT_APP_stripe_plan - this is the ID for a second Stripe subscription plan, generated under Stripe products

# 5️⃣ Content Licenses

🚫For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             |

# 4️⃣ Testing

🚫Document what you used for testing and why

# 4️⃣ Installation Instructions

NPM install 

## Other Scripts

🚫replace these examples with your own

    * typecheck - runs the TypeScript compiler
    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](🚫_link to your backend readme here_) for details on the backend of our project.
