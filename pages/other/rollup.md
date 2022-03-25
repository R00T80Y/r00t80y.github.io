## Plugins
~~~js
export default [{
  plugins: [
    {
      name: 'package-type',
      // output содержит данные о созданных бандлах
      async writeBundle(output) {
        console.log('File:', output.file);
        const type = 'commonjs';
        const pkgFilePath = path.join(paths.build, 'package.json');

        try {
          await promises.unlink(pkgFilePath);
        // eslint-disable-next-line no-empty
        } catch (error) { }

        await promises.writeFile(
          pkgFilePath,
          JSON.stringify({ type, pkgFilePath }),
          'utf8'
        );
      }
    },
    {
      name: 'package-type',
      async buildStart() {
        let files = await promises.readdir(paths.public);
        files.forEach(file => {
          if (file.endsWith('.html')) {
            console.log(file);
            this.addWatchFile(`${paths.public}/${file}`);
          }
        });
      }
    }
  ]
}];
~~~

## Config(12мар 2022)
~~~js
import copy from 'rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import fg from 'fast-glob';
import commonjs from '@rollup/plugin-commonjs';
import browsersync from 'rollup-plugin-browsersync';
import { terser } from 'rollup-plugin-terser';
import paths from './paths';
// import pkg from './../package.json';
const path = require('path');

const PRODUCTION_MODE = !!(process.env.NODE_ENV === 'production');

// console.log(Object.keys(pkg.dependencies));
export default [{
  input: `${paths.source}/index.js`,
  output: [
    {
      file: `${paths.build}/bundle.js`,
      name: 'PluginName',
      format: 'umd',
      sourcemap: true,
      // globals: {
      //   'throttle-debounce': 'throttleDebounce'
      // }
    },
    {
      file: `${paths.build}/bundle.min.js`,
      name: 'PluginName',
      format: 'umd',
      sourcemap: false,
      plugins: [terser()],
    //   globals: {
    //     'throttle-debounce': 'throttleDebounce'
    //   }
    }
  ],
  // external: ['throttle-debounce'],
  plugins: [
    copy({
      targets: [
        { src: `${paths.public}/*`, dest: paths.build }
      ]
    }),

    postcss({
      extract: path.resolve(`${paths.build}/styles.css`)
    }),

    resolve({
      browser: true
    }),

    commonjs(),

    babel({
      // babelHelpers: 'runtime',
      babelHelpers: 'bundled',
      exclude: ['node_modules/**']
      // Проходится по папкам node_modules
      // exclude: [
      //   'node_modules/core-js/**',
      //   'node_modules/core-js-compact/**',
      //   'node_modules/core-js-pure/**'
      // ]
    }),

    {
      name: 'watch-external',
      async buildStart() {
        const files = await fg(`${paths.public}/*.html`);
        // eslint-disable-next-line no-restricted-syntax
        for (const file of files) {
          this.addWatchFile(file);
        }
      }
    },
    browsersync({
      server: 'build',
      port: 9000
    })
  ]
}];
~~~
