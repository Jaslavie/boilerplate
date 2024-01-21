# Some heads up before you read through this file
Most of this is front-end boilerplate since this is what I usually deal with. 70% of it is css (scss/sass structure). I will try to incorporate more backend later on but currently everything include in the doc is in front end.

# Some first steps and things to install

Mostly making this for hackathons or times when you need quick snippets of code w/o researching all over the internet for it.

## I usually use vite (react.js). Here are the steps to create a new vite file in your local terminal
Do these steps in order in your terminal.
```
npm create vite@latest
```
now follow the steps.
For the step below, you might need to do some commands to enter the specific pathway to the file. 
```
cd [name.of.vite.file]
```
to open the folder in your local code editor
```
code .
```

# Cool installations to make your code cooler
## Make your code easier to read

https://prettier.io/docs/en/install.html

```
npm install --save-dev --save-exact prettier
```
## Import an icon library (FontAwesome)
install all the packages here:
```
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
```
Importing them into react components. Here's a tempate:
```
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
```
really easy import inline inside a component. Example below
```
      <FontAwesomeIcon icon={faHeart}/>
```

## Sass for streamlined css

https://sass-lang.com/guide/#:~:text=CSS%20on%20its%20own%20can,you%20write%20robust%2C%20maintainable%20CSS.

```
npm install sass
```
## Other random git commands that I keep needing to search up
to check what repo you're in:
```
git remote -v
```
