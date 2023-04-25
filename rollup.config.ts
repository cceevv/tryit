import { readFileSync } from 'fs';
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import sourceMaps from "rollup-plugin-sourcemaps"

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

export default {
  input: `compiled/tryit.js`,
  output: [
    { file: pkg.main, name: 'tryit', format: "umd", sourcemap: true, exports: 'named' },
    { file: pkg.module, name: 'tryit', format: "es", sourcemap: true, exports: 'named' }
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: "compiled/**"
  },
  plugins: [
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),

    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),

    // Resolve source maps to the original source
    sourceMaps(),
  ]
}
