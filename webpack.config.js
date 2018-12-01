const path = require('path');
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    output: {
        filename: "bundle.js",
        chunkFilename: '[name].bundle.js',
        path: __dirname + '/assets/js/',
        publicPath: '/assets/js/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            { enforce: "pre", test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    // webpack config
    plugins: [
        new HTMLWebpackPlugin({
            filename: "../../index.html",
            template: 'index.html'
        }),
        new AsyncChunkNames()
    ],
    
    // development server configuration
    devServer: {   
        
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