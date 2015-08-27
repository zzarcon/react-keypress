module.exports = {
    entry: './react-keypress.js',
    output: {
        publicPath: 'http://localhost:8090/assets'
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