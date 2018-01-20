const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const clean = require('gulp-clean');

const JS_SRC = 'src/**/*.js';
const SASS_SRC = 'sass/**/*.scss';

gulp.task('clean', () => (
  gulp.src('statics/dist', { read: false })
      .pipe(clean())
));

gulp.task('js', () => (
  gulp.src(JS_SRC)
      .pipe(babel({
        presets: ['env']
      }))
      .pipe(uglify())
      .pipe(gulp.dest('statics/dist/js'))
));

gulp.task('sass', () => (
  gulp.src(SASS_SRC)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('statics/dist/css'))
));

gulp.task('default', ['js', 'sass']);

gulp.task('watch', ['default'], () => gulp.watch([JS_SRC, SASS_SRC], ['default']));