const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },

            {
                test:/\.(scss|sass|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            
            {
              test: /\.svg$/,
              use: ['@svgr/webpack'],
            },
        ]
    },

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};