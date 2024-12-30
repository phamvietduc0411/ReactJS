const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { clear } = require('console');

module.exports = {
  // Xác định chế độ chạy của Webpack, có thể là 'development' hoặc 'production'.
  // Điều này giúp Webpack tối ưu hóa quá trình đóng gói tùy thuộc vào môi trường.
  mode: 'production',
  // Xác định điểm đầu vào (entry point) của ứng dụng.
  // Đây là tệp JavaScript hoặc tệp chính của ứng dụng mà Webpack sẽ bắt đầu đóng gói.
  entry: {
    app: path.resolve('./src/index.js')
  },
  // Nơi Webpack sẽ lưu các tệp đã được đóng gói và tên của các tệp đó.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean : true 
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },

  //html web pack plugin
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Plugin',
      //tên file muốn build ra 
      filename: 'index.html',
      //muốn render dựa trên 1 file có sẵn 
      template: 'src/template.html'
    })
  ],
//không cần dùng live server trong vs ==> cái này lưu trực tiếp vào RAM
  devServer: {
    static: {
      directory: 'dist' // Đường dẫn tương đối đến với thư mục chứa index.html
    },
    port: 3000, // Port thay cho port mặc định (8080)
    open: true, // Mở trang webpack khi chạy terminal
    hot: true, // Bật tính năng reload nhanh Hot Module Replacement
    compress: true, // Bật Gzip cho các tài nguyên
    historyApiFallback: true // Set true nếu bạn dùng cho các SPA và sử dụng History API của HTML5
  }
};
