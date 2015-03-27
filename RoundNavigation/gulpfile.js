var gulp        = require('gulp');
var browserSync = require('browser-sync');
var less 		= require('gulp-less');
var path 		= require('path');

var reload = browserSync.reload;

// Start the server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('less', function () {
	  return gulp.src('*.less')
	    .pipe(less({
	      paths: [ path.join(__dirname, 'less', 'includes') ]
	    }))
	    .pipe(gulp.dest('./'))
	    .pipe(reload({stream:true}));
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// Watch less AND html files, doing different things with each.
gulp.task('default', ['browser-sync'], function () {
    gulp.watch("*.less", ['less']);
    gulp.watch("*.html").on("change", browserSync.reload);
});