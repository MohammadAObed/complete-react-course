*****************
React:
*****************

Facebook 2011,
Angular, Vue, Svelte

!!Components = independent reusable isolated chunks (components) of user interfaces, meaning changing logic & layout in one component will not break your other stuff..., just locate your component, then change it

virtual dom: only the component that needs to be updated is affected, without rerendering your entire app

Root Component, Component Tree
Independent, Reusable, Speed

*****************
Terminal
*****************
pwd: full pathname to current working directory (root directory)
ls: List of directories
mkdir: Create a directory/folder
cd: change a directory
cd .. : Navigate to parent /one level updated
clear: clear console
arrow key up/down


*****************
NPM
*****************
npm (node package manager): saves time automate tasks and stop reinventing the wheel, packages can be as simple as utility functions, to complext full frameworks
npm init: creates package.json (manifest) file, list dependencies
npm install <package name> --save: install package locally (default) and add to package.json
npm install <package name> -g: install package globally (access anywhere) SUDO (sudo must be present before npm, so it gives permission to install globally, it will give password to enter if there is one)
npm install <package name> --save-dev: use only in development

npm start: starts development sever (dev server, or real world appliaction server)
npm run build: sets up production ready build
npm test
npm run eject

cd fileName
npm start

//issues in executing commands in vs code terminal! so use gitbash terminal instead (if you have issues) (cd to your file first dummy)

**************************
File Structure
**************************
node_modules: contains all dependencies (the actual folders & files), ignore this folder when setting up source control

package.json: works with node-modules, lists the dependencies your app uses, when forking and cloning from github you just npm install and package.json will contain what the install needs

package-lock.json: contains the same dependencies that the package.json has, but also the dependencies of the dependencies in package.json

public: contains index.html, some things we can do in index.html, index.html: contains .root div! where our whole javascript application will going to live!!

build: folder is created when typing npm build command: contains the ready for production app, has all static assets, so you can deploy for example on netlify

src: all work will be here!!!!!!!!!, 
App.css,
App.js: where all components will meet
index.css
index.js: imports App, will place app in root,
