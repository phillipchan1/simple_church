// Include gulp & gulp plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');
var livereload = require('gulp-livereload');
var runSequence = require('run-sequence');

// Compile SASS
gulp.task('sass', function() {
	return sass('client/assets/css/**/*.scss', { style: 'compressed' })
	.pipe(concat('app.min.css'))
	.pipe(gulp.dest('client/assets/'))
	.pipe(livereload());
});

// combine JS
gulp.task('scripts', function() {
	return gulp.src([
			// plugins
			'client/bower_components/angular/angular.min.js',
			'client/bower_components/angular-ui-router/release/angular-ui-router.min.js',
			'client/bower_components/jquery/dist/jquery.min.js',
			'client/bower_components/uikit/js/uikit.min.js',

			// our application
			'client/app/app.module.js',
			'client/app/app.routes.js',

			// shared components
			'client/app/shared/navigation.controller.js',

			// components

				// authentication
				'client/app/components/authentication/login/login.model.js',
				'client/app/components/authentication/login/login.controller.js',
				'client/app/components/authentication/register/register.controller.js',
				'client/app/components/authentication/register/register.model.js',

			// load scripts after our appliction
			'client/assets/js/*.js'
		])
		.pipe(concat('app.min.js'))
		.pipe(gulp.dest('client/assets/'))
		.pipe(livereload());
});

// listen for html changes
gulp.task('refresh', function() {
	return gulp.src([
		'client/index.html'
	])
	.pipe(livereload());
})

// Watch for changes
gulp.task('watch', function() {
	// watch html files
	gulp.watch('client/**/*.html', ['refresh']);

	// Watch .js files
	gulp.watch('client/**/*.js', function(callback) {
		runSequence(
			'scripts'
		)
	});
	
	// Watch .scss files
	gulp.watch('client/src/css/**/*.scss', ['sass']);

	// Watch server files
	gulp.watch('server/**/*.js', ['refresh']);
	gulp.watch('server/**/*.pug', ['refresh']);

	// automatically reload browser
	livereload.listen();
});

// Default Task
gulp.task('default', function(callback) {
	runSequence(
		'scripts',
		'sass',
		'refresh',
		'watch'
	)
});