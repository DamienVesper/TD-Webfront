import * as path from 'path';

import * as Webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';

interface Configuration extends Webpack.Configuration {
    devServer?: WebpackDevServer.Configuration
}

const config: Configuration = {
    entry: path.resolve(__dirname, `../src/index.tsx`),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: `ts-loader`,
                        options: {
                            transpileOnly: true,
                            experimentalWatchApi: true
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: `babel-loader`,
                options: {
                    presets: [`@babel/preset-env`, `@babel/preset-react`]
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    `style-loader`,
                    `css-loader`,
                    `sass-loader`
                ]
            },
            {
                test: /\.css$/,
                use: [`style-loader`, `css-loader`]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: `asset/resource`
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: `asset/resource`
            }
        ]
    },

    resolve: {
        extensions: [`*`, `.js`, `.jsx`, `.ts`, `.tsx`]
    },

    output: {
        path: path.resolve(__dirname, `../dist`),
        publicPath: `/dist`,
        filename: `bundle.min.js`
    },

    devServer: {
        contentBase: path.resolve(__dirname, `../public`),
        historyApiFallback: true,
        port: 3000,
        publicPath: `http://localhost:3000/dist`,
        hotOnly: true
    },

    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.ProgressPlugin()
    ]
};

export default config;
