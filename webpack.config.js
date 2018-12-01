const path = require('path');
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    output: {
        filename: "[name].[contenthash].js",
        chunkFilename: '[name].[contenthash].js',
        path: __dirname + '/public/assets/js/',
        publicPath: './assets/js/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: 
    {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            // Babel Loader untuk Dynamic Import
            { enforce: "pre", test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },

            // CSS Loader, Ekstrak ke Folder assets/css/
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: './assets/css/'
                        }
                    },
                    "css-loader"
                ]
            },

            // CSS minify
            {
                enforce: "pre",
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    //externals: { },  
    
    // webpack config
    plugins: [
        new HTMLWebpackPlugin({
            filename: __dirname + "/public/index.html",
            template: __dirname + '/index.html',
            minify: {
                html5                          : true,
                collapseWhitespace             : true,
                minifyCSS                      : true,
                minifyJS                       : true,
                minifyURLs                     : false,
                removeAttributeQuotes          : true,
                removeComments                 : true,
                removeEmptyAttributes          : true,
                removeOptionalTags             : true,
                removeRedundantAttributes      : true,
                removeScriptTypeAttributes     : true,
                removeStyleLinkTypeAttributese : true,
                useShortDoctype                : true
            }
        }),
        new AsyncChunkNames(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "./../css/[name].[contenthash].css",
            chunkFilename: "./../css/[name].[contenthash].css"
        })
    ],
    
    // development server configuration
    devServer: {   

        contentBase: path.join(__dirname, 'public'),

        inline: true,

        port: 3333,

        // must be `true` for SPAs
        historyApiFallback: true,
    
        // open browser on server start
        open: true
    },
    
    // optimization
    optimization: 
    {
        splitChunks: 
        {
            cacheGroups: 
            {
                default: false,
                vendors: false,

                // vendor chunk
                vendor: 
                {
                    // name of the chunk
                    name: 'vendor',
                    // async + async chunks
                    chunks: 'all',
                    // import file path containing node_modules
                    test: /node_modules/,
                    // priority
                    priority: 20
                },

                // common chunk
                common: 
                {
                    name: 'common',
                    minChunks: 2,
                    chunks: 'async',
                    priority: 10,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        }
    }
};