# xplorotest

## Requirements

Produce a demo for interacting with an input form to pull data from the Spotify Search API.

## Technologies

Makes most sense to use node.js for backend and React for the backend because:
 - Uses same language for both
 - If I deploy to a server, the solution is the easiest for the user to use as just browse to the web page. No installation required.

## Initial development strategy

 1. Scope out existing solutions available online for inspiration.
 1. Decide early on which Spotify authentication approach to use.
 1. Get the structure of the app in place.
 1. Start TDD development.

## Deployment

To setup with heroku:
```bash
npm i -g heroku
heroku login
heroku git:remote -a xplorotest
git push heroku main
```

Then to deploy:
```bash
To deploy to heroku:
```

The app is located at https://xplorotest.herokuapp.com/

## Running client and server locally

From inside the project root:
```bash
npm run build
npm start
```

This builds the client, which the server the serves to the browser. Open `http://localhost:3001` in a browser. Note that this will not update if either the server or client changes.

To have the server update on changes, use nodemon:
```bash
npm i -g nodemon
nodemon server/index.js localhost 3001
```
