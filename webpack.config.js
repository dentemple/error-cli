const path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	mode: 'development',
	entry: ['./src/index.js', 'webpack/hot/dev-server'],
	output: {
		path: path.resolve(__dirname, "build/"),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'public/'),
		port: 3000,
		publicPath: 'http://localhost:3000/build/',
		historyApiFallback: false,
		proxy: {
      '/api': {
          target: 'http://localhost:8080/',
          secure: false
      }
    },
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	}
}
