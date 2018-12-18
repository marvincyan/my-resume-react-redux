## See it in action! [Click Here](https://marvincyan.github.io/my-resume-react-redux/)

## Create react project
#### Documentation: [https://reactjs.org/docs/create-a-new-react-app.html](https://reactjs.org/docs/create-a-new-react-app.html)

1. npx create-react-app [project]
2. cd [project]
3. npm start

## Setup Redux and Firebase/Firestore
1. Install Redux and Firebase
  	npm i -s redux react-redux redux-thunk react-router-dom
	npm i -s firebase
	npm i -s react-redux-firebase redux-firestore

## Setup GitHub Pages:
#### Documentation: [https://pages.github.com](https://pages.github.com)

1. Login to Github.
2. Create new repository.
3. Deploy project to GitHub Pages [follow instructions below]
4. Go to Settings in GitHub and change GitHub Pages Source to 'gh-pages-branch' 

## Deploy ReactJS project to GitHub Pages:
#### Documentation: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

1. Create new repository
2. Add to package.json:
	“homepage”: “https://marvincyan.github.io/[project]”
3. npm install —save gh-pages
4. Add to package.json in “scripts” object:
	“predeploy”: “npm run build”,
	“deploy”: “gh-pages -d build”,
5. Make sure remote origin is correct:
	git remote show origin
	git remote remove origin
	git remote add origin https://github.com/marvincyan/[project].git
6. npm run deploy
7. Make sure Source in Settings on GitHub repository is set to gh-pages branch

## Using Bootstrap with reactstrap:
#### Documentation: [http://reactstrap.github.io/components/](http://reactstrap.github.io/components/)

1. Install Bootstrap css
```
	npm i -save bootstrap
```

2. Add to index.js
```
	import 'bootstrap/dist/css/bootstrap.css';
```

3. Add Bootstrap.js to index.html
```
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
```

4. Install reactstrap
```
	npm -i save reactstrap
```

5. Add bootstrap components to component script (Modals.js)
```
	import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
```

## Using FontAwesome:
#### Documention: [https://fontawesome.com/how-to-use/on-the-web/using-with/react](https://fontawesome.com/how-to-use/on-the-web/using-with/react)

1. Install FontAwesome:
```
	npm i —save @fortawesome/fontawesome-svg-core
	npm i —save @fortawesome/free-solid-svg-icons
	npm i —save @fortawesome/free-regular-svg-icons
	npm i —save @fortawesome/react-fontawesome
```
2. Add to App.js:
```
	import { library } from ‘@fortawesome/fontawesome-svg-core’;
	import { far, faSmileBeam, faKeyboard, faComments } from ‘@fortawesome/free-regular-svg-icons’;
	library.add(far, faSmileBeam, faKeyboard, faComments);
```
3. Add to component script (NavigationItem.js):
```
	import { FontAwesomeIcon } from ‘@fortawesome/react-fontawesome’;
	<FontAwesomeIcon icon={[‘far’, ‘smile-beam’]} size=“3x” />
```

## Using FormSpree.io for emailing forms
#### Documentation: [https://formspree.io/docs](https://formspree.io/docs)

1. Add formspree url to form action:
```
	<form action="https://formspree.io/your@email.com" method="POST" />
```

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
