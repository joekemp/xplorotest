# xplorotest

## Requirements

Produce a demo for interacting with an input form to pull data from the Spotify Search API.

## Technologies

Makes most sense to use node.js for backend and React for the backend because:
 - Uses same language for both
 - If I deploy to a server, the solution is the easiest for the user to use as just browse to the web page. No installation required.
 - I know that Xploro use React so it's a useful thing to learn!

## Initial development strategy

 1. Scope out existing solutions available online for inspiration.
 1. Decide early on which Spotify authentication approach to use.
 1. Get the structure of the app in place.
 1. Start TDD development.

## Installing

> Note that if you want to test out the app, then you don't need to run it locally. You can visit the deployed app here: https://xplorotest.herokuapp.com/

To install locally you will need to have node installed on your computer. I use nvm (https://github.com/nvm-sh/nvm).

```bash
git clone git@github.com:joekemp/xplorotest.git
cd xplorotest/client
npm i
cd ../server
npm i
cd ..
npm run build
```

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

## Testing

The current strategy is to not implement any testing of the server at this stage. ~~The server is currently hard coded to return the result of a fixed query.~~ Once it supports parameters from the client, then there may be a case for ensuring that the parameters provide a well formed query to the API. *<-- I didn't get round to this.*

TDD will be performed against a mocked server at the top level. Unit tests will be provided to test individual components.

To run the tests (client side only):
```bash
cd client
npm test
```

Then press 'a' to run all tests.

## Retrospective

How did this little mini project go?

I actually really enjoyed it but it took me quite a while because I had to learn React. If I were to tackle a project of similar size then it would take me less than half the time.

### What am I proud of?

I believe I have done a good job in my presentation, in terms of clear code and commits. I have not tidied/rebased my commit messages so you can get a good idea of my progress and thoughts throughout development.

I am pleased with the responsive frontend which works nicely at different resolutions and on mobile thanks to Bootstrap.

## Would could I have done better?

I would have liked to have done more TDD. TDD does take a little longer but I believe it results in a more robust product. Ultimately time constraints forced my hand on this one.

Other than TDD, I polished product would contain way more tests. It's missing end-to-end and integration tests. I am also aware that no effort has been put into testing security like XSS or DNS attacks.

There are some obvious features missing from the site. Pagination would have been a nice feature to have been able to implement. I also think a loading animation would have been good for times when either my or Spotify's server are slow.

I think it's good to have deployed the app so it can be easily tested on multiple devices. However, I would have liked to have had time to create a Dockerfile to push to Docker Hub for ease of testing locally.

Obviously, I only got to implement 3 of the 6 types of Spotify entity.

### Development tools

Development was on a Windows PC running WSL2. Development was inside an Ubuntu distribution using zsh. Used Git CLI and vim for commit messages. Visual Studio Code was used for editing source.