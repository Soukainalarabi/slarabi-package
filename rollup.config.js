import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import scss from "rollup-plugin-scss";
import image from "@rollup/plugin-image";

import commonjs from "@rollup/plugin-commonjs";
import noderesolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const rollupConfig = {
	input: "src/index.js",
	output: [
		{ file: "dist/main.min.js", format: "cjs" },
		{ file: "dist/main.es.min.js", format: "es" },
	],
	plugins: [
		del({ targets: ["dist/*"] }),
		scss({ insert: true, failOnError: true }),
		image(),
		external(),
		noderesolve(),
		babel({
			exclude: "node_modules/**",
			presets: ['@babel/env', '@babel/preset-react'],
			babelHelpers: "bundled",
			
		}),
		commonjs(), // prise en charge de require
		terser(), // minification
	],
	external: Object.keys(pkg.peerDependencies || {}),
};

export default rollupConfig;