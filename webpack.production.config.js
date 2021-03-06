const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'none',

	entry:  __dirname + "/app/script/index.js",//已多次提及的唯一入口文件
	output: {
		path: __dirname + "/build",//打包后的文件存放的地方
		filename: "bundle-[hash].js"//打包后输出文件的文件名
	},

	module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
	                fallback: "style-loader",
	                use: [
		                {
		                    loader: "css-loader"
		                }, {
		                    loader: "less-loader"
			            }, {
		                    loader: "postcss-loader"
			            }
		            ],
	            })
            },
            {
                test: /\.(png|jpg)$/,
                use: {
                    loader: "url-loader?limit=8000&name=images/[hash:8].[name].[ext]"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")
    ],
}