var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: './build',
		filename: '[name].js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: [ /\.css$/ ],
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
				loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Chat Client with WebSockets',
			inject: 'body',
			template: path.resolve(__dirname, './src/index.html')
		}),
		new ExtractTextPlugin('[name].css')
	]
};
