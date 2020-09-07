import { tmpdir } from "os";
import { resolve } from "path";

import { getWebPackVariants } from "./config/webpack.config";

const BASE_CONFIG = {
  entry: "./test/module.ts",
  filename: "base-config.js",
  libraryTarget: "window",
  srcPath: [resolve("./test")],
  test: true,
  debug: true,
};

export const WEBPACK_CONFIG_TEST = {
  path: resolve("./build"),
};

export const WEBPACK_CONFIG_OTHER = {
  libraryTarget: "umd",
  filename: "module.umd.js",
  srcPath: [resolve("./test")],
  test: false,
};

export default getWebPackVariants(
  [WEBPACK_CONFIG_TEST, WEBPACK_CONFIG_OTHER],
  BASE_CONFIG
);
