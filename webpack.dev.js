const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				],
				include: /src/
			},
			{
				test: /\.(jpg?g|png|gif|svg|webp)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'img'
						}
					}
				]
			}
		]
	},
	mode: 'development',
	devServer: {
		proxy: [{
			context: ['/proxy', '/bookmarks'],
			target: 'http://localhost:3010',
		}]
	},
	devtool: false
})
