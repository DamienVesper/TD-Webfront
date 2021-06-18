import { DefinePlugin } from 'webpack';
import merge from 'webpack-merge';

import common from './webpack.common';

const config = merge(common, {
    mode: `development`,
    devtool: `source-map`,
    plugins: [new DefinePlugin({ API_URL: `http://localhost:8080` })]
});

export default config;
