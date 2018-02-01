// var webpack = require('webpack')

var path = require('path')

//在内存中根据参照文件(template.html),生成一个index.html
var HtmlWebpackPlugin = require('html-webpack-plugin');

//抽离.css文件
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var webpack = require('webpack')


module.exports = {
    // entry: './src/main.js', //打包的入口文件
    entry: {
        mintUi: ['mint-ui'],
        bundle: './src/main.js' //别忘记了它
    },
    output: { //打包的输出文件
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js'
        // filename:'build.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /vue-preview.src.*?js$/,
            loader: 'babel-loader'
        },

        {
            test: /\.vue$/,
            use: 'vue-loader'
        },
        {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            },
            {
                loader: 'css-loader'
            }
            ]
        },
        {
            test: /\.(png|svg|gif|jpg)$/,
            use: [
                {
                    /*
                        limit：
                            表示的是一个阀值,如果当前我们资源中的图片大小
                            4kb就从bundle.js中剥离出来，如果小于4kb打包进bundle.js,4kb只是我这设置的一个值
    
                        name:打包出来的图片，放在那个文件夹下，用什么文件名称命名
                            [name]代表你原始的文件名称
                            [hash:5] 避免图片换了之后，浏览器还加在原先的图片
                            [ext] 图片本身的拓展名
                    */
                    loader: 'url-loader?limit=4000&name=images/[name]-[hash:5].[ext]'
                }
            ]
        },
        {
            test: /\.(woff|ttf)$/,
            use: [
                {
                    /*
                        limit：
                            表示的是一个阀值,如果当前我们资源中的图片大小
                            4kb就从bundle.js中剥离出来，如果小于4kb打包进bundle.js,4kb只是我这设置的一个值
    
                        name:打包出来的图片，放在那个文件夹下，用什么文件名称命名
                            [name]代表你原始的文件名称
                            [hash:5] 避免图片换了之后，浏览器还加在原先的图片
                            [ext] 图片本身的拓展名
                    */
                    loader: 'url-loader?limit=4000&name=fonts/[name]-[hash:5].[ext]'
                }
            ]
        },
            // {
            //     test: /\.svg/,
            //     use: {
            //         loader: 'svg-url-loader',
            //         options: {}
            //     }
            // },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //在内存中生成文件名称
            // template: './template.html', //参照文件
            minify: {
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
                removeComments: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false //去掉版权信息等注释
        }),
        //这个地方有个小注意点，不要把自己业务逻辑bundle放在这里，
        //这里只放第三方
        /**
         * name:我们刚刚在entry打包入口对象里面的属性名称
         * minChunks:公共模块被使用的最小次数。比如配置为3，也就是同一个模块只有被3个以外的页面同时引用时才会被提取出来作为common chunks。
         */
        new webpack.optimize.CommonsChunkPlugin({ name: ["mintUi"], minChunks: Infinity }),

        //抽离出来的css文件放到哪里去
        new ExtractTextPlugin("css/styles.css")
    ]
}