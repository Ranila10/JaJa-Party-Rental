JaJa Party Rental

Introduction 
Jaja party rental is a place where you can rent all the equipment for your party! you can crate your own package, and view the previous one.


Installation
Before you can run the app with npm start, install the dependencies: Node.js and npm on your computer.

Documentation on downloading and installing Node.js and npm. To begin, navigate on the project directory (after you have downloaded or cloned this repository) and run:

npm install
Then, while in the project directory, you can run:
npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

User Stories

User will be able to sign up, sign in, sign out and change password.
User will create a package and be able to update and delete it.

Routes
Endpoint	Component	AuthenticatedRoute?
/sign-up	SignUp	No
/sign-in	SignIn	No
/change-password	ChangePassword	Yes
/sign-out	SignOut	Yes

Technologies Used
Libraries	Languages	Frameworks	Database	Version Control	API
React.js	HTML	Express	MongoDB	GitHub	Ghibli Studio API
Axios	Javascript	BootStrap			
Mongoose	CSS				

![App Wireframe](https://i.imgur.com/xLLKtko.png)

![App ERD](https://i.imgur.com/iCemSKW.png)


If I had more time, I would have create a button where people can give reviews about their experience with my app.

## API Routes
| HTTP Method     | URL Path          | Action             | CRUD       |
| :-------------- | :---------------- | :----------------- | ---------- |
| GET             | /posts            | index or list      | `R`ead     |
| GET             | /posts/`:id`      | show or retrieve   | `R`ead     |
| POST            | /posts            | create             | `C`reate   |
| PATCH           | /posts/`:id`      | update             | `U`pdate   |
| DELETE          | /posts/`:id`      | destroy            | `D`elete   |
| HTTP Method     | URL Path          | Action             | CRUD       |
| :-------------- | :---------------- | :----------------- | ---------- |
| POST            | /comments         | create             | `C`reate   |
| PATCH           | /comments/`:id`   | update             | `U`pdate   |
| DELETE          | /comments/`:id`   | destroy            | `D`elete   |

https://ranila10.github.io/JaJa-Party-Rental/

https://github.com/Ranila10/JaJa-Party-Rental
