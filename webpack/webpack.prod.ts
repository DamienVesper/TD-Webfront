import { DefinePlugin } from 'webpack';
import merge from 'webpack-merge';

import common from './webpack.common';

const config = merge(common, {
    mode: `production`,
    plugins: [new DefinePlugin({ API_URL: `https://throwdown.tv` })]
});

export default config;
