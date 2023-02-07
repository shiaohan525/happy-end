const path = require('path');
const webpack  = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

module.exports = {
    mode: process.env.NODE_ENV,// development production
    entry: {//頁面檔名:"對應檔名路徑"
        main: './src/sass/style.scss',
        global: './src/js/global.js',
        img: './src/js/img.js',
        index: './src/js/index.js',
        swiper: './src/js/swiper.js',
        app: './src/js/application.js',
        cardJob: './src/js/card-job.js',
    },
    output: {
        path: path.resolve(__dirname, 'pro'),
        filename: 'assets/js/[name].js',
        assetModuleFilename: 'assets/img/[name][ext][query]',//圖檔輸出在pro的哪裡
        publicPath: 'auto',
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: [MiniCssExtractPlugin.loader,"css-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                require('autoprefixer')
                            ],
                        },
                    },
                },"sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/,
                dependency: { not: ['url'] },
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/img/[name].[ext]'
                    }
                  },
                ],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']// 如使用babelconfig 此option可刪
                    }
                },
                include: path.resolve(__dirname, 'src'),
            }, 
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: "assets/css/[name].css"
        }),
        new CleanWebpackPlugin(),        
        new HtmlWebpackPlugin({//要多一頁html 就new一個HtmlWebpackPlugin 格式照下面填空就好
            template: path.resolve(__dirname, './src/index.html'),
            minify: false,//HTML壓縮用，true是壓縮、false是不壓縮
            filename: 'index.html', //首頁
            chunks: ['main','global','img','index','swiper','cardJob'],//要多吃別支JS在後面新增就好 ex:['index','about']，先後順序有影響喔
        }),
        new HtmlWebpackPlugin({//4-1 文章列表_企業報導
            template: path.resolve(__dirname, './src/archive-coverage.html'),
            minify: false,
            filename: 'archive-coverage.html',
            chunks: ['main','global','img'],
        }),
        new HtmlWebpackPlugin({//4-1 文章列表_企業特刊
            template: path.resolve(__dirname, './src/archive-issue.html'),
            minify: false,
            filename: 'archive-issue.html',
            chunks: ['main','global','img'],
        }),
        new HtmlWebpackPlugin({//2-1 報名初始
            template: path.resolve(__dirname, './src/application.html'),
            minify: false,
            filename: 'application.html',
            chunks: ['main','global','img','app'],
        }),
        new HtmlWebpackPlugin({//3-1 幸福職涯-嚴選企業
            template: path.resolve(__dirname, './src/happiness-company.html'),
            minify: false,//HTML壓縮用，true是壓縮、false是不壓縮
            filename: 'happiness-company.html',
            chunks: ['main','global','img'],
        }),
        new HtmlWebpackPlugin({//3-1 幸福職涯-推薦職缺
            template: path.resolve(__dirname, './src/happiness-job.html'),
            minify: false,//HTML壓縮用，true是壓縮、false是不壓縮
            filename: 'happiness-job.html',
            chunks: ['main','global','img'],
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/layout/header.html'),
            location: 'header',//要放入的html tag位置
            template_filename: ['index.html','archive-coverage.html','application.html']//需引用的頁面記得新增在這裡
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/layout/footer.html'),
            location: 'footer',
            template_filename: ['index.html','archive-coverage.html','application.html']
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/layout/swiper.html'),
            location: 'swiper',
            template_filename: ['index.html','archive-coverage.html']
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/layout/card-job.html'),
            location: 'card-job',
            template_filename: ['index.html']
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/layout/pgnb-style2.html'),
            location: 'pgnb-second',
            template_filename: ['archive-coverage.html']
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/layout/category.html'),
            location: 'category',
            template_filename: ['index.html']
        }),
    ],
    devtool: 'source-map',// 開發完請刪掉pro裡的map檔或是先註解這個工具再建立發布包裝
    devServer:{
        host: 'localhost',
        port: 8080,
        open: true
    },
};