const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const CLIENT_PORT = 3000;

module.exports = {
    entry: "./src/client/index.tsx",
    output: {
        path: path.join(__dirname, "/dist/client"),
        filename: "index_bundle.js",
    },

    target: "web",

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, "src/client")],
                use: {
                    loader: "babel-loader",
                },
            },

            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
                include: [path.resolve(__dirname, "src/client")],
            },

            {
                test: /\.(scss|sass|css)$/,
                include: [path.resolve(__dirname, "src/client")],
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
            },

            {
                test: /\.svg$/,
                include: [path.resolve(__dirname, "src/client")],
                use: ["@svgr/webpack"],
            },
        ],
    },

    devServer: {
        port: CLIENT_PORT,
        open: true,
        // liveReload: true,
        hot: true,
        // watchContentBase: true,
        // publicPath: "/",
        contentBase: path.resolve(__dirname, "./dist/client"),
        compress: true,
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
