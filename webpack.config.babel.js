import { tmpdir } from "os";
import { resolve } from "path";

import { getWebpackConfig } from "./config/webpack.config";

export const WEBPACK_CONFIG_TEST = getWebpackConfig({
  entry: "./test/module.ts",
  libraryTarget: "window",
  srcPath: [resolve("./test")],
  path: tmpdir(),
  test: true,
  debug: true,
});

export default WEBPACK_CONFIG_TEST;
