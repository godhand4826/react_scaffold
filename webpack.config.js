const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.jsx',
	},
	output: {
		publicPath: '/',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [{
			test: /\.jsx$/,
			exclude: /node_modules/,
			use: 'babel-loader',
			resolve: {
				extensions: ['.jsx']
			},
		}, {
			test: /\.(sc|sa|c)ss$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
		},{
			test:/\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
			type: 'asset',
		}],
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			cacheGroups:{
				react: {
					test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
					name: 'react',
					chunks: 'all',
					priority: 1,
				},
				vendor:{
					name:'vendor',
					chunks:'all',
					reuseExistingChunk: true,
					priority:-20
				}
			}
		},
		minimize: true,
		minimizer: [new TerserPlugin({ extractComments: false })]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/template.html' ,
			minify:{
				collapseWhitespace:true,
				removeComments:true,
				removeRedundantAttributes:true,
			}
		}),
		new CopyPlugin({
			patterns:[
				{from:'src/favicon.ico'}
			]
		}),
		new MiniCssExtractPlugin(),
		new AntdDayjsWebpackPlugin(),
		new CleanWebpackPlugin({ verbose: true })
	]
}