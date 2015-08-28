module.exports = {
    entry: './react-keypress.js',
    output: {
        publicPath: 'http://localhost:8090/assets',
        path: './dist',
        filename: 'reactKeypress.js',
        libraryTarget: 'umd',
        library: 'ReactKeypress'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }]
    },
    resolve: {
        extensions: ['', '.js']
    }
};