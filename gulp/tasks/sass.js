var gulp      = require('gulp'),
    sass      = require('gulp-ruby-sass'),       // Conversion des SCSS en CSS
    config    = require('../config').sass,
    livereload = require('gulp-livereload'),
    minifyCss = require('gulp-minify-css'); // Minification des CSS

// SCSS TASK
gulp.task('sass', function() 
{
  return sass(config.src, {style: 'compressed', compass: true }) 
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(minifyCss())              
    .pipe(gulp.dest(config.dest)) 
    .pipe(livereload());
});
