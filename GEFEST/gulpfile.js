var syntax        = 'scss'; // Syntax: sass or scss;


var gulp          = require('gulp'),
	sass          = require('gulp-sass'),
	browserSync   = require('browser-sync'),
	concat        = require('gulp-concat'),
	uglify        = require('gulp-uglify'),
	cleancss      = require('gulp-clean-css'),
	rename        = require('gulp-rename'),
	autoprefixer  = require('gulp-autoprefixer'),
	notify        = require('gulp-notify'),
	postCss        = require('gulp-postcss'),
	mqpacker        = require('css-mqpacker'),
	babel 		  = require('gulp-babel');

	gulp.task('browser-sync', function() {
		browserSync({
			// proxy: "cubitum",
			server: {
				baseDir: 'app'
			},
			notify: false,
			open: false,
			// online: true, // Work Offline Without Internet Connection
			// tunnel: true, tunnel: "cubitum", // Demonstration page: http://projectname.localtunnel.me
		})
	});
	
	gulp.task('styles', function() {
		return gulp.src('app/'+syntax+'/**/*.'+syntax+'')
		.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
		.pipe(rename({ suffix: '.min', prefix : '' }))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
		.pipe(postCss([mqpacker]))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream())
	});
	
	// gulp.task('scripts', function() {
	// 	return gulp.src([
	// 		'app/libs/jquery/dist/jquery.min.js',
	// 		'app/libs/jquery.maskedinput/dist/jquery.maskedinput.min.js',
	// 		'app/js/common.js', // Always at the end
	// 		])
	// 	.pipe(concat('scripts.min.js'))
	// 	.pipe(uglify()) // Mifify js (opt.)
	// 	.pipe(gulp.dest('app/js'))
	// 	.pipe(browserSync.reload({ stream: true }))
	// });
	
	gulp.task('scripts', function() {
		return gulp.src('app/js/common.js')
		.pipe(babel({
			plugins: ["@babel/plugin-proposal-class-properties"],
			presets: ['@babel/preset-env']
		}))
		.pipe(rename({ suffix: '.babel', prefix : '' }))
		// .pipe(uglify())
		.pipe(gulp.dest('app/js'))
		.pipe(browserSync.reload({ stream: true }))
	});
	
	
	gulp.task('php', function() {
		return gulp.src('app/*.php')
		.pipe(browserSync.reload({ stream: true }))
	});
	
	gulp.task('code', function() {
		return gulp.src('app/*.html')
		.pipe(browserSync.reload({ stream: true }))
	});
	
	gulp.task('watch', function() {
		gulp.watch('app/'+syntax+'/**/*.'+syntax+'', gulp.parallel('styles'));
		gulp.watch('app/js/common.js', gulp.parallel('scripts'));
		gulp.watch('app/*.html', gulp.parallel('code'));
		gulp.watch('app/*.php', gulp.parallel('php'));
	});
	gulp.task('default', gulp.parallel('styles', 'scripts', 'browser-sync', 'watch'));
	
	