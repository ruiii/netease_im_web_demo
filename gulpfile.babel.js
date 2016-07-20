import gulp from 'gulp';
import gulpif from 'gulp-if';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import minifyCSS from 'gulp-minify-css';
import del from 'del';
import webpack from 'webpack-stream';

const isProduction = (process.env.NODE_ENV === 'production');

const webpackConfig = {
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015-loose', 'stage-0'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
};

gulp.task('clean-script', () => {
  return del([
    './assets/js'
  ]);
});

gulp.task('clean-style', () => {
  return del([
    './assets/css'
  ]);
});

gulp.task('script', ['clean-script'], () => {
  return gulp.src('public/src/index.js')
             .pipe(webpack(webpackConfig))
             .pipe(gulpif(isProduction, uglify()))
             .pipe(gulp.dest('public/assets/src'));
});

gulp.task('style', ['clean-style'], () => {
  return gulp.src(['public/style/*.css'])
             .pipe(concat('bundle.css'))
             .pipe(gulpif(isProduction, minifyCSS()))
             .pipe(gulp.dest('public/assets/style'));
});

gulp.task('compile', ['script', 'style']);

gulp.task('default', [
  'compile'
]);
