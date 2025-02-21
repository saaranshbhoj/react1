#Namaste React Hello React!!

#Parcel gives us good-visual error!
Created local server
created dev build 
doing HMR Hot Module Replacement
uses a file watching algorithm-written in c++
faster dev exp by caching 
Image Optimization
Minification of the file(it is basically a bundler bundle files together to make them ready for production!)

#Bable Package:
parcel uses bable for transpiling(jS compiler takes your jsx and convert) the jsx/react code to the js engine.
It converts jsx code to reactobject which eventually get rendered to html element that browser understands.

#Creating a Food-Ordering App;
We are using Basic React components to design App Layout,Header,Footer or the body.CSS is preferred for styling and our main aim to learn is how to make our web page dynamic. We do not recommend hard coding your data,it should be fetched from server directly to your container!

# Testing inside React;
React testing Library uses Jest behind the scenes which is basically a javascript testing framework.

Jest in itself uses bable!
# Configure Babel;
Inside Parcel we are already using Bable for transpilation and Jest also uses bable therefore we need to make some configurations so that there should be no error or interference. By adding "babel.config.js" we make sure bable works well with Jest and transpilation inside parcel is disabled.

# Steps in setting up Testing Feature;
Install React Testing Library
Install Jest
Install Babel-dependencies
Configure Babel
Config Babel to disable default babel transpilation
Jest -npx jest--init [Jest Configuration]
Install jsdom library
npm i-D @babel/preset-react [To run JSX inside testcase]
Include @babel/preset-react inside my babel.config.js
Install another library @testing-library/jest-dom