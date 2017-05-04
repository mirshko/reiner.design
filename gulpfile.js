// VARS
// ********************

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var $ = gulpLoadPlugins({});
var browserSync = require('browser-sync'),
	reload      = browserSync.reload;

// GULP
// ********************

// DEFAULT
gulp.task('default', ['watch', 'js', 'sass', 'html']);

// BUILD
gulp.task('build', ['useref', 'images']);

// PREVIEW BUILD
gulp.task('build:preview', ['browser-sync:build']);
gulp.task('browser-sync:build', ['useref', 'images'], () => {
	browserSync.init({
		server: { baseDir: './build' }
	});
});

// TASKS
// ********************

// WATCH
gulp.task('watch', ['browser-sync'], () => {
	gulp.watch('sass/**/*.+(scss|sass)', ['sass']);
	gulp.watch('js/*.js', ['js']);
	gulp.watch('./*.html', ['html']);
});
gulp.task('browser-sync', () => {
	browserSync.init({
		server: { baseDir: './' }
	});
});

// JAVASCRIPT
gulp.task('js', ['xo'], () => {
	return gulp.src('js/*.js')
		.pipe($.babel())
		.pipe(gulp.dest('dist/js'))
		.pipe(reload({
			stream: true
		}));
});

// XO
gulp.task('xo', () => {
	return gulp.src('js/*.js')
		.pipe($.xo());
})

// SCSS
gulp.task('sass', () => {
	return gulp.src('sass/**/*.+(scss|sass)')
		.pipe($.sass().on('error', $.sass.logError))
		.pipe(gulp.dest('dist/css'))
		.pipe(reload({
			stream: true
		}));
});

// HTML
gulp.task('html', () => {
	gulp.src('./*.html')
		.pipe(reload({
			stream: true
		}));
});

// USEREF
gulp.task('useref', ['sass', 'js'], () => {
	return gulp.src('./*.html')
		.pipe($.useref())
		.pipe($.if('*.js', $.uglify({
			mangle: true
		})))
		.pipe($.if('*.css', $.cssnano({
			mergeLonghand: false
		})))
		.pipe(gulp.dest('build'));
});

// IMAGES
gulp.task('images', ['favicons'], () => {
	return gulp.src('img/*')
		.pipe($.imagemin())
		.pipe(gulp.dest('build/img'));
});

// FAVICONS
gulp.task('favicons', () => {
	return gulp.src('favicons/*')
		.pipe(gulp.dest('build'));
});
