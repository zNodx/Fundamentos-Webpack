const webpack = require('webpack')
const modoDev = process.env.NODE_ENV !== 'production'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyjsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
    mode:  modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename:'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port:9000
    },
    optimization: {
        minimizer: [
            new UglifyjsPlugin({
                cache:true,
                parallel: true
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader',
                'sass-loader'
            ]
        },{
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            use: ['file-loader']
        }]
    }
}