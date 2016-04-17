# React keypress [![NPM](https://img.shields.io/npm/v/react-keypress.svg)](https://www.npmjs.org/package/react-keypress) [![Bower version](https://badge.fury.io/bo/react-keypress.svg)](http://badge.fury.io/bo/react-keypress)

> multi Keypress detection handlers for React.js

React wrapper for Keypress.js - http://dmauro.github.io/Keypress

Keypress is an input capture library which can be used to capture combination of keys in a simple way.

##Installation

```
$ npm install react-keypress
```
or 
```
$ bower install react-keypress
```


##Usage 

Lets say that you want to fire a function when the user press `shift + enter + a`:

```javascript
  var React = require("react");
  var Keypress = require("react-keypress");

  React.createClass({
    sayHello() {
      alert("hello!");
    },

    render() {
      <div>
        <input type="text" onKeyPress={Keypress("shift enter a", this.sayHello)}/>
      </div>
    }
  });
```

##API

### Keypress(keysCombination, handler)

#### keysCombination

Type: `String`

This option can be either an array of strings, or a single space separated string of key names that describe the keys that make up the combo.

#### handler

Type: `Function`

This is a function that gets called everytime the keypress event for our combo is fired.

###Special keys support

* backspace
* tab
* num
* enter
* shift
* ctrl
* alt
* pause
* caps
* esc
* space
* pageup
* pagedown
* end
* home
* left
* up
* right
* down
* print
* insert
* delete
* cmd

##Created by

Hector Leon Zarco Garcia - [@zzarcon](https://twitter.com/zzarcon)
