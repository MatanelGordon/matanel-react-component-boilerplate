const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

const pkg = require('./package.json');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

const NODE_ENV = process.env['NODE_ENV'];

const OUT_DIR = 'dist';
const ENABLE_SOURCE_MAP = NODE_ENV !== 'production';

const config = {
	mode: 'production',
	devtool: NODE_ENV === 'development' ? 'inline-source-map' : 'source-map',
	entry: {
		main: './src/index.ts',
	},
	output: {
		path: path.resolve(OUT_DIR),
		filename: 'index.js',
		module: true,
		library: {
			type: 'module',
		},
		environment: {
			module: true,
		},
	},
	experiments: {
		outputModule: true,
	},
	target: ['es2020', 'node'],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: {
					loader: 'ts-loader',
					options: {
						configFile: 'tsconfig.json',
						compilerOptions: {
							outDir: OUT_DIR,
							sourceMap: ENABLE_SOURCE_MAP,
							declaration: true,
						},
						onlyCompileBundledFiles: true,
					},
				},
				exclude: /node_modules/,
			},
			{
				test: /\.s[ca]ss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								auto: true,
							},
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							implementation: require('postcss'),
						},
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
						},
					},
				],
			},
			{
				test: /\.(png | jpg | jpeg | webp | avif | apng)$/,
				type: 'asset/resource',
			},
			{
				test: /\.svg$/,
				type: 'asset/inline',
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		modules: ['node_modules'],
	},
	externals: Object.keys({
		...pkg.dependencies,
		...pkg.peerDependencies,
	}).reduce((acc, dep) => ({ ...acc, [dep]: dep }), {}),
	optimization: {
		usedExports: true,
		minimizer: [
			'...',
			new CssMinimizerPlugin({
				minify: CssMinimizerPlugin.lightningCssMinify,
				test: /\.(css|s[ac]ss)(\?.*)?$/i,
				minimizerOptions: {
					preset: 'advanced',
				},
			}),
		],
	},
	plugins: [
		// new EslintWebpackPlugin({
		// 	fix: true,
		// 	threads: true,
		// }),
		new StylelintWebpackPlugin({
			fix: true,
			threads: true,
		}),
	],
};

module.exports = config;
