//entry point 

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        entry: './src/app.js',
        output: {
            //absolute path
            path: path.join(__dirname,'public'),
            filename: 'bundle.js'
        },
    
        //setup the loader
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,  //RE to test file ends with .js extension
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],

        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true
        }
    };
};