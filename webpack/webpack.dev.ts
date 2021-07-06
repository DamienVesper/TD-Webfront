import merge from 'webpack-merge';
import common from './webpack.common';

import * as Webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

import * as path from 'path';

const config = merge(common, {
    mode: `development`,
    devtool: `source-map`,

    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, `../src/index.html`)
        }),
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.DefinePlugin({ API_URL: `\`http://localhost:8080\`` })
    ],

    output: {
        path: path.resolve(__dirname, `../dist`),
        filename: `bundle.min.js`
    },

    devServer: {
        contentBase: path.resolve(__dirname, `../public`),
        historyApiFallback: true,
        port: 3000,
        publicPath: `http://localhost:3000`,
        hotOnly: true
    }
});

export default config;
