const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    filename: 'app.js'
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
        use: ['style-loader', 'css-loader','sass-loader']
      }
    ]
  },

  //html web pack plugin
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HTML Plugin',
      //tên file muốn build ra 
      filename: 'index.html',
      //muốn render dựa trên 1 file có sẵn 
      template: 'src/template.html'
    })
  ]
};
