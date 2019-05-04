var path = require('path');

module.exports = {
  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, 'dist'),
    compress: true
  }
};
