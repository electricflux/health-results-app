// This library allows us to combine paths easily
const path = require('path');
var debug = process.env.NODE_ENV !== "production";
module.exports = {
    entry: path.resolve(__dirname, 'react', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015'] }
                }
            },
        ]
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};
