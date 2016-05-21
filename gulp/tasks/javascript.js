var gulp      = require('gulp'),
    config    = require('../config').javascript,
    jshint = require('gulp-jshint'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat');
    //uglify = require('gulp-uglify');

// SCSS TASK
gulp.task('jshint', function() 
{
  return gulp.src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('javascript', function() 
{
  return gulp.src(config.src)
      .pipe(concat("main.js"))
      //.pipe(uglify("main.js")) 
    .pipe(gulp.dest(config.dest))
    .pipe(livereload());
});