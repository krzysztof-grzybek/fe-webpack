const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // /home/krzysztofgrzybek/Projects/fe-webpack/webpack/dist
        filename: 'bundle.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()]
};