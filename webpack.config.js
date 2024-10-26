import path from 'path';
import { fileURLToPath } from 'url';
import nodeExternals from 'webpack-node-externals';

// Handle __dirname in ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: {
        server: './server/index.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js',
    },
    target: 'node',
    node: {
        __dirname: false,   // Handle __dirname correctly
        __filename: false,  // Handle __filename correctly
    },
    externals: [nodeExternals()], // Avoid bundling node_modules
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    mode: 'development', // Set to 'development' or 'production' as needed
};
