var gulp = require('gulp'),
	autoprefixer = require('autoprefixer'),
	image = require('gulp-image'),
	jshint = require('gulp-jshint'),
	postcss = require('gulp-postcss'),
	sass = require('gulp-sass'),
	newer = require('gulp-newer');

gulp.task('styles', function() {
	return gulp.src('themes/dill/assets/sass/style.scss')
	.pipe(sass({
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: '1'
	}).on('error', sass.logError))
	.pipe(postcss([
		autoprefixer('last 2 versions', '> 1%')
	]))
	.pipe(gulp.dest('themes/dill/static/css/'));
});

gulp.task('javascript', function() {
	return gulp.src(['themes/dill/static/js/*.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(gulp.dest('themes/dill/static/js/'));
});

gulp.task('watch', function() {
	gulp.watch('themes/dill/assets/sass/*.scss', gulp.series('styles'));
	//gulp.watch('themes/dill/static/js/*.js', ['javascript']);
});

gulp.task('default', gulp.series('watch'));
