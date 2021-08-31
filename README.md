## Credentials

1.  **admin** credentials:

* **username**: *admin_user*
* **password**: *123456*

##Live App

Hosted at https://lib-manage.herokuapp.com/

## Tech Stack Used

### Setting up server and database

1. Initialise a package.json file by entering the following command in terminal, after getting into the project directory :

```(bash)
npm init
```

2. Install npm packages required for backend side :

```(bash)
npm i express body-parser mongoose concurrently
npm i -D nodemon
```

3. Create an account on MongoDB cloud Atlas, thereafter, creating a database on it and get your MongoURI exported from a file keys.js in a folder config


4. Type the following command to get your server running on your localhost and ensure hot-reloading, when the server-side code is modified :

```(bash)
npm run server
```

### Setting up the React client

1. In the package.json of the server, add the following scripts :

```(JSON)
"client-install": "npm install --prefix client",
"client": "npm start --prefix client",
"dev": "concurrently \"npm run server\" \"npm run client\" ",
```

2. Remove all the additional default setup from client folder like logo, index.css, etc. Then, configure the client to make use of *bootstrap* and *reactstrap* to make the app responsive by using following commands in terminal :

```(bash)
cd client
npm i bootstrap reactstrap react-popper font-awesome bootstrap-social
```

3. Install Redux for maintaining the state :

```(Terminal)
npm i redux react-redux redux-thunk
```
### Deployment

1. Install Heroku CLI and make sure you have intialised a git repository in the project directory. Enter the following commands in the terminal :

```(bash)
heroku login
heroku create
git add .
git commit -am "Deployed to Heroku"
git push heroku master
```

2. Open your heroku account and click on **Open App** option in the dashboard.