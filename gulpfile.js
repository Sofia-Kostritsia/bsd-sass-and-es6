const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

// Debug Configuration
gulp.task('debug', () => {
  return gulp.src('C:/Users/User/Downloads/web-tex/lab3/style/style.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('C:/Users/User/Downloads/web-tex/lab3/css/debug'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('C:/Users/User/Downloads/web-tex/lab3/css/debug'));
});


// Production Configuration
gulp.task('production', () => {
  return gulp.src('C:/Users/User/Downloads/web-tex/lab3/style/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('C:/Users/User/Downloads/web-tex/lab3/css/production'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('C:/Users/User/Downloads/web-tex/lab3/css/production'));
});

// Watch Task
gulp.task('watch', () => {
  gulp.watch('C:/Users/User/Downloads/web-tex/lab3/style/**/*.scss', gulp.series('debug', 'production'));
});

// Default Task
gulp.task('default', gulp.series('debug', 'production', 'watch'));
