module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      browsers: ['last 2 versions', '> 5%'],
    }),
    require('autoprefixer'),
    require('cssnano'),
  ],
};
