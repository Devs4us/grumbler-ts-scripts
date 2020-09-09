import { tmpdir } from "os";
import { resolve } from "path";

import {
  getWebPackVariants,
  WebpackConfigOptions,
} from "./config/webpack.config";

const BASE_CONFIG: WebpackConfigOptions = {
  entry: "./test/module.ts",
  filename: "base-config.js",
  libraryTarget: "window",
  srcPath: [resolve("./test")],
  test: true,
  debug: true,
};

export const WEBPACK_CONFIG_TEST: WebpackConfigOptions = {
  path: tmpdir(),
};

export const WEBPACK_CONFIG_OTHER: WebpackConfigOptions = {
  libraryTarget: "umd",
  filename: "module.umd1.js",
  srcPath: [resolve("./test")],
};

export default getWebPackVariants(
  [WEBPACK_CONFIG_TEST, WEBPACK_CONFIG_OTHER],
  BASE_CONFIG
);
