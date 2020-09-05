"use strict";

exports.__esModule = true;
exports.getCurrentVersion = getCurrentVersion;
exports.getNextVersion = getNextVersion;
exports.getWebpackConfig = getWebpackConfig;

var _path = require("path");

var _os = require("os");

var _fs = require("fs");

var _rimraf = _interopRequireDefault(require("rimraf"));

var _semver = _interopRequireDefault(require("semver"));

var _webpack = _interopRequireDefault(require("webpack"));

var _nodeCleanup = _interopRequireDefault(require("node-cleanup"));

var _terserWebpackPlugin = _interopRequireDefault(require("terser-webpack-plugin"));

var _circularDependencyPlugin = _interopRequireDefault(require("circular-dependency-plugin"));

var _hardSourceWebpackPlugin = _interopRequireDefault(require("hard-source-webpack-plugin"));

var _webpackBundleAnalyzer = require("webpack-bundle-analyzer");

var _fsExtra = require("fs-extra");

var _rmfr = _interopRequireDefault(require("rmfr"));

var _processExists = _interopRequireDefault(require("process-exists"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let cacheDirsCreated = false;

const setupCacheDirs = ({
  dynamic = false
} = {}) => {
  const tmpDir = (0, _os.tmpdir)();
  const HARD_SOURCE_CACHE_FOLDER = "cache-hard-source";
  const BABEL_CACHE_FOLDER = "cache-babel";
  const TERSER_CACHE_FOLDER = "cache-terser";
  const CACHE_LOADER_FOLDER = "cache-loader";
  const folders = [HARD_SOURCE_CACHE_FOLDER, BABEL_CACHE_FOLDER, TERSER_CACHE_FOLDER, CACHE_LOADER_FOLDER];
  const id = dynamic ? process.pid.toString() : "static";
  const HARD_SOURCE_CACHE_DIR = (0, _path.join)(tmpDir, `cache-hard-source-${id}`);
  const BABEL_CACHE_DIR = (0, _path.join)(tmpDir, `cache-babel-${id}`);
  const TERSER_CACHE_DIR = (0, _path.join)(tmpDir, `cache-terser-${id}`);
  const CACHE_LOADER_DIR = (0, _path.join)(tmpDir, `cache-loader-${id}`);
  const dirs = [HARD_SOURCE_CACHE_DIR, BABEL_CACHE_DIR, TERSER_CACHE_DIR, CACHE_LOADER_DIR];

  const create = () => {
    if (cacheDirsCreated) {
      return;
    }

    for (const path of dirs) {
      if (!(0, _fs.existsSync)(path)) {
        (0, _fs.mkdirSync)(path);
      }
    }

    if (dynamic) {
      (0, _nodeCleanup.default)(() => {
        for (const path of dirs) {
          if ((0, _fs.existsSync)(path)) {
            try {
              _rimraf.default.sync(path);
            } catch (err) {// pass
            }
          }
        }
      });
    }

    (async () => {
      try {
        for (const folder of await (0, _fsExtra.readdir)(tmpDir)) {
          const match = folder.match(/^[\w-]+-(\d+)$/);

          if (!match) {
            continue;
          }

          for (const cacheFolder of folders) {
            if (folder.indexOf(cacheFolder) !== 0) {
              continue;
            }

            const pid = parseInt(match[1], 10);

            if (typeof pid !== "number" || pid === process.pid || (await (0, _processExists.default)(pid))) {
              continue;
            }

            try {
              await (0, _rmfr.default)((0, _path.join)(tmpDir, folder));
            } catch (err) {
              // eslint-disable-next-line no-console
              console.error(err);
            }
          }
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    })();

    cacheDirsCreated = true;
  };

  create();
  return {
    hardSource: HARD_SOURCE_CACHE_DIR,
    babel: BABEL_CACHE_DIR,
    terser: TERSER_CACHE_DIR,
    cacheLoader: CACHE_LOADER_DIR
  };
};

function jsonifyPrimitives(item) {
  if (Array.isArray(item)) {
    return JSON.stringify(item);
  } else if (typeof item === "object" && item !== null) {
    if (item.hasOwnProperty("__literal__")) {
      return item.__literal__;
    }

    const result = {};

    for (const key of Object.keys(item)) {
      result[key] = jsonifyPrimitives(item[key]);
    }

    return result;
  } else if (typeof item === "string" || typeof item === "number" || typeof item === "boolean" || item === null || item === undefined) {
    return JSON.stringify(item);
  } else if (typeof item === "function") {
    // $FlowFixMe
    return item();
  } else {
    throw new TypeError(`Unrecognized type: ${typeof item}`);
  }
}

function getCurrentVersion(pkg) {
  var _pkg$version$replace, _pkg$version;

  return (_pkg$version$replace = (_pkg$version = pkg.version) == null ? void 0 : _pkg$version.replace(/[^\d]+/g, "_")) != null ? _pkg$version$replace : null;
}

function getNextVersion(pkg, level = "patch") {
  return getCurrentVersion({
    version: _semver.default.inc(pkg.version, level)
  });
}

function getWebpackConfig({
  context = process.cwd(),
  entry = "./src/index.ts",
  filename,
  modulename,
  libraryTarget = "umd",
  web = true,
  test = process.env.NODE_ENV === "test",
  debug = test,
  minify = !test && !debug,
  options = {},
  vars = {},
  alias = {},
  path = (0, _path.resolve)("./dist"),
  env = test ? "test" : "production",
  sourcemaps = minify,
  cache = false,
  analyze = false,
  dynamic = false,
  optimize = env !== "local",
  babelConfig = (0, _path.join)(__dirname, "./.babelrc-browser"),
  srcPath = [(0, _path.resolve)("./src")]
} = {}) {
  const enableSourceMap = sourcemaps && web && !test;
  const enableInlineSourceMap = enableSourceMap && (test || debug);
  const enableCheckCircularDeps = test;
  const enableCaching = cache && !test;
  const enableTreeShake = web && !test && !debug;
  const enableBeautify = debug || test || !minify;
  const enableStyling = true;

  if (filename && !filename.endsWith(".js")) {
    if (minify && !filename.endsWith(".min")) {
      filename = `${filename}.min`;
    }

    filename = `${filename}.js`;
  }

  vars = { ...vars,
    __MIN__: minify,
    __TEST__: test,
    __WEB__: web,
    __FILE_NAME__: filename,
    __DEBUG__: debug,
    __ENV__: env,
    __TREE_SHAKE__: enableTreeShake,
    __LOCAL__: env === "local",
    __STAGE__: env === "stage",
    __SANDBOX__: env === "sandbox",
    __PRODUCTION__: env === "production",
    __WINDOW__: () => "global",
    __GLOBAL__: () => "global",
    global: web ? () => "window" : () => "global"
  };
  const mode = debug || test ? "development" : "production";
  const cacheDirs = setupCacheDirs({
    dynamic
  });
  let plugins = [new _webpack.default.DefinePlugin(jsonifyPrimitives(vars))];
  const optimization = optimize ? {
    minimize: true,
    namedModules: debug,
    concatenateModules: true,
    minimizer: [new _terserWebpackPlugin.default({
      test: /\.ts$/,
      terserOptions: {
        warnings: false,
        compress: {
          pure_getters: true,
          unsafe_proto: true,
          passes: 3,
          join_vars: minify,
          sequences: minify,
          drop_debugger: !debug
        },
        output: {
          beautify: enableBeautify
        },
        mangle: minify ? true : false
      },
      parallel: true,
      sourceMap: enableSourceMap,
      cache: enableCaching && cacheDirs.terser
    })]
  } : {};

  if (enableCheckCircularDeps) {
    plugins = [...plugins, new _circularDependencyPlugin.default({
      exclude: /node_modules/,
      failOnError: true
    })];
  }

  if (enableCaching && !dynamic) {
    plugins = [...plugins, new _hardSourceWebpackPlugin.default({
      cacheDirectory: cacheDirs.hardSource
    })];
  }

  if (enableInlineSourceMap) {
    options.devtool = "inline-source-map";
  } else if (enableSourceMap) {
    options.devtool = "source-map";
  } else {
    options.devtool = false;
  }

  if (analyze) {
    plugins = [...plugins, new _webpackBundleAnalyzer.BundleAnalyzerPlugin({
      analyzerMode: "static",
      defaultSizes: "gzip",
      openAnalyzer: false
    })];
  }

  const globalObject = `(typeof self !== 'undefined' ? self : this)`;
  const rules = [];

  if (enableStyling) {
    rules.push({
      test: /\.scss$/i,
      use: ["isomorphic-style-loader", {
        loader: "css-loader",
        options: {
          importLoaders: 1
        }
      }, "scoped-css-loader", "sass-loader"],
      include: srcPath
    });
  }

  if (enableCaching) {
    rules.push({
      test: /\.(ts|js)x?$/,
      loader: "cache-loader",
      options: {
        cacheDirectory: cacheDirs.cacheLoader
      },
      include: srcPath
    });
  }

  rules.push({
    test: /\.(ts|js)x?$/,
    include: srcPath,
    loader: "babel-loader",
    options: {
      cacheDirectory: enableCaching && cacheDirs.babel,
      extends: babelConfig
    }
  });
  rules.push({
    test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
    use: "file-loader",
    include: srcPath
  });
  rules.push({
    test: /\.(html?|css|json|svg)$/,
    loader: "raw-loader",
    include: srcPath
  });
  const output = {
    path,
    filename,
    globalObject,
    umdNamedDefine: true,
    library: modulename,
    pathinfo: false,
    libraryTarget
  };
  return {
    context,
    mode,
    entry,
    output,
    node: {
      console: false,
      global: false,
      process: false,
      __filename: false,
      __dirname: false,
      Buffer: false,
      setImmediate: false
    },
    resolve: {
      alias: { ...alias,
        "@babel/runtime": (0, _path.join)((0, _path.dirname)(require.resolve("@babel/runtime/helpers/extends")), "..")
      },
      extensions: [".ts", ".tsx", ".js", ".json"],
      modules: [__dirname, "node_modules"]
    },
    module: {
      rules
    },
    bail: true,
    stats: {
      optimizationBailout: true
    },
    optimization,
    plugins,
    ...options
  };
}