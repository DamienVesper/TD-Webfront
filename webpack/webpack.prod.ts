import merge from 'webpack-merge';
import common from './webpack.common';

import HTMLWebpackPlugin from 'html-webpack-plugin';
import { DefinePlugin } from 'webpack';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';

import * as path from 'path';

const config = merge(common, {
    mode: `production`,

    output: {
        path: path.resolve(__dirname, `../dist`),
        filename: `static/js/[name].[contenthash:8].js`,
        chunkFilename: `static/js/[name].[contenthash:8].chunk.js`
    },

    optimization: {
        splitChunks: {
            chunks: `all`,
            name: false
        },

        runtimeChunk: {
            name: (entrypoint: any) => `runtime-${entrypoint.name}`
        }
    },

    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, `../src/index.html`),

            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new WebpackManifestPlugin(),
        new DefinePlugin({ API_URL: `\`https://throwdown.tv/api\`` })
    ]
});

export default config;
