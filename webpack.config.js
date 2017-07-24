const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = (env = {}) => {
  
  const isProduction = env.production === true;
  
  return    {

      entry: {
        vendor: './src/vendor.js',
        index: './src/app.module.js'
      },

      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
      },

      devtool: (() => {
            if (isProduction) return 'hidden-source-map'
            else return 'cheap-module-source-map'
      })(),

      devServer: (() => {
            if (isProduction) return {}
            else return {
                          contentBase: './dist',
                          historyApiFallback: true
                        }
      })(), 

      module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
          { test: /\.html$/, exclude: /node_modules/, use: 'raw-loader' },
          { test: /\.(jpe?g|png|gif)$/, 
            exclude: /node_modules/, 
            use: [{
                      loader: 'url-loader',
                      options: {
                          limit: 10000,
                          name: 'assets/[hash].[ext]'
                      }
                  }]
          },
          { test: /\.css$/, 
            use: (() => {
                  if (isProduction) return ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?sourceMap'
                  });
                  else return ['style-loader', 'css-loader']
            })()
          }   
        ]
      },

      plugins: (() => {
        const pluginList = [
          // plugins used by dev and production
            new HTMLWebpackPlugin({
                template: path.resolve(__dirname, 'src/index.html'),
                filename: 'index.html',
                inject: 'body'
            })
        ];
          // plugins for production only
          if (isProduction) {
            pluginList.push(
              new CleanWebpackPlugin(['dist']),
              new ExtractTextPlugin({
                filename: '[name].[contenthash].css'
              }),
              new CompressionPlugin({
                asset: "[path].gz[query]",
                algorithm: "gzip",
                threshold: 10240,
                test: /\.js$|\.html$|\.css$/,
                minRatio: 0.8
              })
            )
          }
          return pluginList;
      })()

  }

}