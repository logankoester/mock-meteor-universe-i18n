# mock-meteor-universe-i18n
> Mock the [universe:i18n](https://github.com/vazco/meteor-universe-i18n) package for testing outside of Meteor

## Usage

`npm install --save-dev inject-loader mock-meteor-universe-i18n`

```js
let MyComponent = require('inject!../ShowUser.jsx')({
  'meteor/universe:i18n': require('mock-meteor-universe-i18n')
}).default;
```
