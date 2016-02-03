var path    = require('path'),
    pack    = require(path.resolve(__dirname, 'package.json'));

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context : path.resolve(__dirname, 'src'),
    entry   : './bootstrap',
    output  : {
        path            : path.resolve(__dirname, 'build'),
        filename        : 'mediacenter.js',
        libraryTarget   : 'commonjs2'
    },
    module : {
        loaders : [{
            test    : /\.jsx?$/,
            exclude : [
                path.resolve(__dirname, 'node_modules')
            ],
            loader  : 'babel-loader',
            query   : {
                presets: [
                    'react',
                    'es2015'
                ]
            }
        }, {
            test    : /\.pcss$/,
            loader  : ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader')
        }]
    },
    plugins : [
        new ExtractTextPlugin('mediacenter.css')
    ],
    postcss: function () {
        return {
            defaults: [
                require('postcss-nested')
            ],
            production:  []
        };
    },
    resolve : {
        alias : {

        },
        modulesDirectories : [
            'node_modules'
        ],
        extensions : [
            '',
            '.js',
            '.pcss'
        ]
    },
    externals : Object.keys(pack.dependencies),
    resolveLoader : {
        modulesDirectories : [
            'node_modules'
        ]
    },
    target  : 'electron',
    bail    : true,
    devtool : 'source-map'
};