## Grumbler Typescript Scripts

Based on grumbler-script project by KrakenJs and porting to Typescript

Shared scripts for grumbler based modules.

## Package.json scripts

```json
"scripts": {
    "watch": "webpack --watch",
    "setup": "yarn",
    "build": "yarn types:build && yarn babel && yarn bundle",
    "start": "webpack-dev-server --progress --colors --open",
    "clean": "rimraf dist coverage",
    "babel": "babel ./src --ignore=node_modules --extensions=\".ts,.tsx\" --out-dir ./config",
    "bundle": "webpack --progress --colors",
    "types:build": "tsc --emitDeclarationOnly",
    "types:check": "tsc --noEmit",
    "types:watch": "yarn types:check -- --watch",
    "check-updates": "npm-check-updates"
  }
```

## Babel

### `.babelrc`

#### Node

```json
{
  "extends": "grumbler-scripts/config/.babelrc-node"
}
```

#### Browser

```json
{
  "extends": "grumbler-scripts/config/.babelrc-browser"
}
```

## Webpack

### `webpack.config.js`

```javascript
import { getWebpackConfig } from "grumbler-scripts/config/webpack.config";

const FILE_NAME = "mylibrary";
const MODULE_NAME = "mylibrary";

export let WEBPACK_CONFIG = getWebpackConfig({
  filename: `${FILE_NAME}.min.js`,
  modulename: MODULE_NAME,
  minify: true,
});

export default [WEBPACK_CONFIG];
```
