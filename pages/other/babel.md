## babel.config(12мар 2022)
~~~js
import 'core-js/stable';
// import 'core-js-pure/stable';
// import 'core-js/stable/object/assign';
import 'regenerator-runtime/runtime';





const PRODUCTION_MODE = !!(process.env.NODE_ENV === 'production');

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: PRODUCTION_MODE,
        modules: false,
        loose: true,
        useBuiltIns: 'entry',
        // useBuiltIns: 'usage',
        // corejs: {
        //   version: '3.8',
        //   proposals: true
        // }
      }
    ]
  ]
  // С этим не разобрался
  // plugins: [
  //   [
  //     '@babel/plugin-transform-runtime',
  //     {
  //       absoluteRuntime: false,
  //       corejs: false,
  //       helpers: true,
  //       regenerator: true
  //     }
  //   ]
  // ]

  // Пример NODE_ENV
  // env: {
  //   production: {},
  //   development: {}
  // }
};

~~~

## babel.config(23фев 2022)
~~~js
const PRODUCTION_MODE = process.env.NODE_ENV === 'production';

module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        debug: !!PRODUCTION_MODE,
        useBuiltIns: 'usage',
        corejs: 3,
        modules: false,
        loose: true
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: false,
        regenerator: false,
        // useESModules: true
      }
    ],
    ['@babel/plugin-transform-object-assign']
  ]
}
~~~
