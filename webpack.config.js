var path = require('path');
var webpack = require('webpack');

module.exports = {
    'entry': [
        './src/index.js',
        './src/scss/style.scss',
    ],
    'output': {
        'filename': 'bundle.js',
        'path': path.resolve(__dirname, 'dist')
    },
    'module': {
        'rules': [
            { 
                'test': /\.jsx?$/, 
                'loader': 'babel-loader', 
                'exclude': /node_modules/ 
            },
            {
                'test': /\.css$/,
                'use': [ 'style-loader', 'css-loader' ]
            },
            {
                'test': /\.(scss)$/,
                'use': [
                    { 'loader': 'style-loader' },
                    { 'loader': 'css-loader' },
                    {
                        'loader': 'postcss-loader',
                        'options': {
                            'plugins': function () {
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    { 'loader': 'sass-loader' }
                ]
            },
        ]
    },
    'plugins': [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery',
            'Popper': ['popper.js', 'default'],
            //If you remove some component below, please delete it on src/modules/bootstrap/js/bootstrap.js too!
            'Alert': 'export-loader?Alert!bootstrap/js/src/alert',
            'Button': 'export-loader?Button!bootstrap/js/src/button',
            'Carousel': 'export-loader?Carousel!bootstrap/js/src/carousel',
            'Collapse': 'export-loader?Collapse!bootstrap/js/src/collapse',
            'Dropdown': 'export-loader?Dropdown!bootstrap/js/src/dropdown',
            'Modal': 'export-loader?Modal!bootstrap/js/src/modal',
            'Popover': 'export-loader?Popover!bootstrap/js/src/popover',
            'Scrollspy': 'export-loader?Scrollspy!bootstrap/js/src/scrollspy',
            'Tab': 'export-loader?Tab!bootstrap/js/src/tab',
            'Tooltip': 'export-loader?Tooltip!bootstrap/js/src/tooltip',
            'Util': 'export-loader?Util!bootstrap/js/src/util',
        })
    ],
    'devServer': {
        'contentBase': path.resolve(__dirname, "dist")
    }
};
