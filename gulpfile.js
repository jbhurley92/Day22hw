var gulp = require ('gulp');

gulp.task('default', ['html']);

gulp.task('html', function (){
		return gulp.src('./index.html')
			.pipe(gulp.dest('public'));

});
