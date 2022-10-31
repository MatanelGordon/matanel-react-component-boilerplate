const path = require('path');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const cssLoader = {
    loader: "css-loader",
    options: {
        modules: {
            auto: true
        }
    }
}

const config = {
    mode: "production",
    devtool: "source-map",
    entry: {
        main: './src/index.ts',
    },
    experiments: {
        outputModule: true
    },
    target: ["es2020", 'node'],
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: {
                    loader: "ts-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    cssLoader
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    cssLoader,
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: ["node_modules"]
    },
    optimization: {
        usedExports: true,
        minimizer: [
            "...",
            new CssMinimizerPlugin({
                minify: CssMinimizerPlugin.lightningCssMinify,
                test: /\.(css | less | s[ac]ss | styl)(\?.*)?$/i,
                minimizerOptions: {
                    preset: 'advanced'
                }
            })
        ]
    },
}

module.exports = [
    {
        ...config,
        output: {
            path: path.resolve('dist'),
            filename: "index.js",
            module: true,
            library: {
                type: "module"
            }
        },
    },
    {
        ...config,
        output: {
            path: path.resolve('dist'),
            filename: "index.common.js",
            library: {
                type: "commonjs2"
            }
        }
    }
]