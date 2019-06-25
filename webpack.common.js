const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: 'babel-loader'
			},
			{
				test: /\.s?css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../'
						}
					},
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: isDevelopment ? '[name].[ext]' : '[hash].[ext]',
							outputPath: 'img'
						}
					}
				]
			}
		]
	}
}
