import * as Webpack from 'webpack';
import * as path from 'path';

interface Configuration extends Webpack.Configuration {
    devServer?: any
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

    plugins: [
        new Webpack.ProgressPlugin()
    ]
};

export default config;
