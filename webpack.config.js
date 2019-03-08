const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/index.js',
    output:
    {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module :{
        rules: [
            {
                test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/
            }
        ]
    },
    resolve:
    {
          extensions:['.js','.jsx']
    },
    plugins : [
        new htmlwebpackplugin({
            template: './public/index.html'
        })
    ]


}