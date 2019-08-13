This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `Area of focus`
Progressive/Iterative approach, unit tests, scenrios, asynchronous testing, TDD, modular, resuablity, functional approach vs Object/Class.

### `out of focus`
Prod build, SCSS to CSS, Using middlewares and Redux, support libraries like lodash etc (as not required),  

### `Things to note`
1. There would a act function warning while runnning unit tests, seems to be known issue on react side. Tried to fix it but couldn't.

2. App uses the data from a temperory hosting service from https://api.myjson.com/bins/12878r, for any reason not working please enable the local data.json or let me know.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Assumptions made`

Display price is final price which has savings applied on it already.
Hotel not bookable when any of title, price, address is missing.
Hotel bookable when only image is missing and other details aviliable with a placeholder.

