module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/kraken-weather/dist/'
      : '/'
}