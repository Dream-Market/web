const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.tsx'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build'),
        },
        historyApiFallback: true,
        port: 8080,
        hot: true,
        compress: true,
        client: {
            overlay: true,
            progress: true,
        },
        devMiddleware: { writeToDisk: true },
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
            api: path.join('src', 'api'),
            components: path.join('src', 'components'),
            const: path.join('src', 'const'),
            pages: path.join('src', 'pages'),
            store: path.join('src', 'store'),
            utils: path.join('src', 'utils'),          
        },
        modules: [
            __dirname,
            'src',
            'node_modules',
        ],
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].min.css',
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            publicPath: '/',
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all',
        },
    },
};