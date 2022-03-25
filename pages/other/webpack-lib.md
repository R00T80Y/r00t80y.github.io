## Создание библиотеки
~~~js
{
  output: {
    libraryExport: 'default',
    umdNamedDefine: true,
    globalObject: 'typeof self === \'undefined\' ? this : self',
  }
}
~~~

Библиотеки которые не будут включены в конечный bundle
~~~js
  externals: {
    react: 'react'
  },
~~~

## html-particial
~~~js
// В папке ./src/pages/ лежат страницы с body
// ./src/wrapper.html шаблон для обертки страниц
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const partials = [];
findFilesByExt(paths.source + '/pages', 'html').map((file) => {
  let chunksName = ['main'];

  if (WebPackConfig.entry[file.filename]) {
    chunksName = [file.filename];
  }

  let settings = {
    template: path.join(__dirname, './../src/wrapper.html'),
    // template: `${file.filename}.${file.ext}`, // relative path to the HTML files
    filename: `${file.filename}.${file.ext}`, // output HTML files
    // chunks: chunksName, // respective JS files
    favicon: `${paths.public}/favicon.ico`,
    inject: 'body',
    minify: false,
    showErrors: false
  };

  partials.push({
    path: path.join(__dirname, `./../src/pages/${file.filename}.${file.ext}`),
    template_filename: `${file.filename}.${file.ext}`,
    location: "page-content",
    priority: "replace",
  });

  WebPackConfig.plugins.push(new HtmlWebpackPlugin(settings));
});

WebPackConfig.plugins.push(new HtmlWebpackPartialsPlugin(partials));
~~~

### HTML
~~~html
<% for (index in htmlWebpackPlugin) { %>
  <%= index %>
<% } %>
~~~
### Пример настройки(Axios)
~~~js
const TerserPlugin = require('terser-webpack-plugin');
var webpack = require('webpack');
var config = {};

function generateConfig(name) {
  var compress = name.indexOf('min') > -1;
  var config = {
    entry: './index.js',
    output: {
      path: __dirname + '/dist/',
      filename: name + '.js',
      sourceMapFilename: name + '.map',
      library: 'axios',
      libraryTarget: 'umd',
      globalObject: 'this'
    },
    node: {
      process: false
    },
    devtool: 'source-map',
    mode: compress ? 'production' : 'development'
  };
  return config;
}

['axios', 'axios.min'].forEach(function (key) {
  config[key] = generateConfig(key);
});

module.exports = config;
~~~
### Пример настройки 23фев
~~~js
module.exports = {
  entry: {
    // Исходник библиотеки
    toggleButtonPlugin: {
      import: `./toggleButton.plugin`,
      library: {
        // all options under `output.library` can be used here
        name: 'MyLibrary',
        type: 'umd',
        umdNamedDefine: true,
      },
    },
    index: {
      dependOn: 'toggleButtonPlugin',
      import: `./index`
    }
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    // extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
      // картинки из папки public
      // background-image: url('~assets/image-name.jpg');
      assets: paths.public,
    },
  },

  plugins: [
    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
}

module.exports = {
  module: {
    rules: [
      // HACK: Пример как можно модифицировать HTML файл
      {
        test: /\.html/,
        loader: "html-loader",
        options: {
          sources: false,
          preprocessor: (content, loaderContext) => {
            return content.replace(/\<\/html\>/g, `</html>${Config.getInfoText()}`)
          }
        }
      }
    ]
  }
};

// "@babel/plugin-transform-object-assign": "^7.16.7",
// "@babel/plugin-transform-runtime": "^7.17.0",
// "@babel/runtime": "^7.17.2",
// "@babel/runtime-corejs3": "^7.17.2",

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            exclude: [
              // \\ for Windows, \/ for Mac OS and Linux
              /node_modules[\\\/]core-js/,
              /node_modules[\\\/]webpack[\\\/]buildin/
            ],
            // exclude: {
            //   and: [/node_modules/],
            //   not: [/resize-delay/]
            // },
            presets: [
              [
                '@babel/preset-env',
                {
                  debug: true,
                  useBuiltIns: 'usage',
                  corejs: 3,
                  modules: false,
                  loose: true
                }
              ]
            ]
            // presets: [
            //   [
            //     '@babel/preset-env', {
            //       debug: !!PRODUCTION_MODE
            //     }
            //   ]
            // ],
            // plugins: [
            //   [
            //     '@babel/plugin-transform-runtime', {
            //       corejs: 3,
            //       helpers: true,
            //       regenerator: false
            //     }
            //   ],
            //   ['@babel/plugin-transform-object-assign']
            // ]
          }
        }
      }
    ]
  }
};
~~~
