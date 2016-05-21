var gulp     = require('gulp'),
	config    = require('../config');
	livereload = require('gulp-livereload');


// WATCH TASK
gulp.task('watch', function() 
{
	livereload.listen();
  	gulp.watch(config.sass.src, ['sass']);
  	gulp.watch(config.javascript.src, ['jshint']);
  	gulp.watch(config.javascript.src, ['javascript']);
});

