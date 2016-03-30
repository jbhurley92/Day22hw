var gulp = require ('gulp');
var browserify = require ('gulp-browserify');


gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', function (){
		return gulp.src('./index.html')
			.pipe(gulp.dest('public'));

});

gulp.task('css', function() {
  return gulp.src('./css/app.css')
    .pipe(gulp.dest('./public/css'));
});


gulp.task('js', function () {
    return gulp.src('./js/app1.js')
        .pipe(browserify())
        .pipe(gulp.dest('./public/js/'));
});
