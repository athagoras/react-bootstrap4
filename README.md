# react-bootstrap4

The React boilerplate code with Bootstrap 4, Webpack 3 and Babel 6 included.

# Features
- React with Webpack and Babel integrated.
- Bootstrap 4 Beta with SCSS.
- Fully Bootstrap 4 Variable Customize.

# Prerequitises
To working properly, please install some programs in the list below.

- Node.js 8.0.0 with NPM 5.3.0 or higher
- Yarn 0.27.5 or higher (Optional, if you use instead NPM)

# Dependencies
For full list of dependencies you can see in package.json

- React 15.6.1
- ReactDOM 15.6.1
- JQuery 3.2.1
- Bootstrap 4.0.0-beta
- Popper.js 1.11.1

# Development Dependencies
For full list of devevelopment dependencies you can see in package.json
- Webpack 3.5.4
- Babel 6.25.0

# Getting Started

Clone this repository in your local and install Node.js module by ...

```
npm install
```

or if you use Yarn Package Manager you can install them by ...

```
yarn install
```

To start webpack, please install webpack-dev-server as global package.

```
npm install -g webpack-dev-server
```

To start server please run this command.
```
npm start
```

It's will run the project with `webpack-dev-server` with localhost.

# Folder Structure
```
|-- dist/
|   |-- index.html
|-- node_modules
|   |-- ..
|-- src/
|   |-- components/
|   |-- modules/
|   |-- bootstraps/
|   |   |-- js/
|   |   |    |-- bootstrap.js
|   |   |-- scss/
|   |   |    |-- bootstrap.scss
|   |   |    |-- _variables.scss
|   |   |-- bootstrap.js
|   |-- scss/
|   |   |-- style.scss
|   |-- index.js
|-- webpack.config.js
```

# Customization

## Include Bootstrap
To include Bootstrap into your JSX files, place it on the top of JSX files.

```JSX
import './modules/bootstrap/bootstrap';
```

It's will include the Bootstrap SCSS and Javascript individually and complie those files with Webpack after you run `npm start` .

## Customize Bootstrap
You can modifiy a lot of Bootstrap variables on `src/modules/bootstrap/scss/_variables.scss` .

Or you can add/remove some component on `src/modules/bootstrap/js/bootstrap.js` and `src/modules/bootstrap/scss/bootstrap.scss` .

If you edit while webpack-dev-server is running, these changes will apply automatically after you save them.

**Please Note:** If you remove some JavaScript components of Bootstrap, please remove it on `webpack.config.js` too.

```JSX
'plugins': [
    new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
        'window.jQuery': 'jquery',
        'Popper': ['popper.js', 'default'],
        //If you remove some component below, please delete it on src/modules/bootstrap/js/bootstrap.js too!
        'Alert': 'export-loader?Alert!bootstrap/js/src/alert',
        'Button': 'export-loader?Button!bootstrap/js/src/button',
        'Carousel': 'export-loader?Carousel!bootstrap/js/src/carousel',
        'Collapse': 'export-loader?Collapse!bootstrap/js/src/collapse',
        'Dropdown': 'export-loader?Dropdown!bootstrap/js/src/dropdown',
        'Modal': 'export-loader?Modal!bootstrap/js/src/modal',
        'Popover': 'export-loader?Popover!bootstrap/js/src/popover',
        'Scrollspy': 'export-loader?Scrollspy!bootstrap/js/src/scrollspy',
        'Tab': 'export-loader?Tab!bootstrap/js/src/tab',
        'Tooltip': 'export-loader?Tooltip!bootstrap/js/src/tooltip',
        'Util': 'export-loader?Util!bootstrap/js/src/util',
    })
],
```

## Customize Styles
You can modify some styles which you prefer on `src\scss\styles.scss` .

Or if you want to add some SCSS, create files on `src\scss` folder and go to `webpack.config.js` to add those files in to webpack.

```JSX
'entry': [
    './src/index.js',
    './src/scss/style.scss',
],
```

If you edit while webpack-dev-server is running, these changes will apply automatically after you save them.

**Please Note:** If you edit some configuration in `webpack.config.js`, changes will apply after webpack-dev-server terminated and start it again.

# Bugs report and Suggestion

If you found something wrong, you can create issue on this repository. I will contact you and fix it as soon as possible.

---
Created with :muscle: and :heart: by Phongphan Bunlom (@athagoras)