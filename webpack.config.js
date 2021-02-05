const path = require('path')
const {merge,} = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin,} = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = {
	mode: 'production',
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
				extensions: ['.jsx',],
			},
		}, {
			test: /\.(sc|sa|c)ss$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',],
		}, {
			test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
			type: 'asset',
		},],
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				component: {
					test: /[\\/]src[\\/]component[\\/]/,
					name: 'component',
					chunks: 'initial',
					minSize: 0,
				},
				loadable: {
					test: /[\\/]src[\\/]component[\\/]/,
					name: 'loadable',
					chunks: 'async',
					minSize: 0,
				},
				react: {
					test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
					name: 'react',
					chunks: 'all',
				},
				vendor: {
					name: 'vendor',
					chunks: 'all',
					reuseExistingChunk: true,
					priority: -20,
				},
			},
		},
		minimize: true,
		minimizer: [new TerserPlugin({extractComments: false,}),],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/template.html',
			favicon: 'src/favicon.ico',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
			},
		}),
		new MiniCssExtractPlugin(),
		new AntdDayjsWebpackPlugin(),
		new CleanWebpackPlugin({verbose: true,}),
	],
}


let patch = {}
if (process.env.MODE ==='dev') {
	patch = {
		mode: 'development',
		devtool: 'inline-source-map',
	}
} else if (process.env.MODE==='analyze') {
	patch = {
		plugins: [new BundleAnalyzerPlugin(),],
	}
}

module.exports = merge(config, patch)
