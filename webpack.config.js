const path = require('path');

module.exports = {
    entry: [
        "./src/index.js"
    ],
    output: {
        path:__dirname+ '/public/',
        filename: 'bundle.js'
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [{
            loader: "babel-loader",
            exclude: /node_modules/,
            test: /\.jsx?$/,
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};
