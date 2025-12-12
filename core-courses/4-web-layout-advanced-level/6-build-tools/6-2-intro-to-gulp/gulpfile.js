const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

const styles = () => {
  return src('./src/css/**/*.css').pipe(concat('main.css')).pipe(dest('dist'));
};

const htmlMinify = () => {
  return src('src/**/*.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(dest('dist'));
};

exports.styles = styles;
exports.htmlMinify = htmlMinify;

exports.default = series(styles, htmlMinify);
