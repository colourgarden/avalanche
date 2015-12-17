var gulp = require('gulp'),
$ = require('gulp-load-plugins')({pattern: ['gulp-*']}),
paths = {src: 'src/', dist: 'dist/', dev: 'dev/', entry: 'entry.scss'};

var onError = function (err) {
	$.notify.onError({
		title: "Gulp",
		subtitle: "Failure!",
		message: "Error: <%= error.message %>",
		sound: "Beep"
	})(err);
	this.emit('end');
};

// Build development css
gulp.task('default', function() {
	return gulp.src(paths.src+paths.entry)
	.pipe($.plumber({errorHandler: onError}))
	.pipe($.sourcemaps.init())
	.pipe($.sass({compress: false, outputStyle: 'expanded'}).on('error', $.util.log))
	.pipe($.autoprefixer({
		browsers: ['last 3 versions'],
		cascade: false
	}))
	.pipe($.rename({
		basename: 'avalanche'
	}))
	.pipe($.sourcemaps.write())
	.pipe(gulp.dest(paths.dev))
	.pipe($.size({title: 'Development', showFiles: true}));
});

// Build production ready css
gulp.task('build', function() {
	return gulp.src(paths.src+paths.entry)
	.pipe($.plumber({errorHandler: onError}))
	.pipe($.sass({compress: true, outputStyle: 'compressed'}).on('error', $.util.log))
	.pipe($.autoprefixer({
		browsers: ['last 3 versions'],
		cascade: false
	}))
	.pipe($.combineMq({beautify: false}))
	.pipe($.csso())
	.pipe($.csscomb())
	.pipe($.minifyCss({keepSpecialComments: false, mediaMerging: true, roundingPrecision: 4, advanced: true, aggressiveMerging: true}))
	.pipe($.rename({
		basename: 'avalanche',
		suffix: '.min'
	}))
	.pipe(gulp.dest(paths.dist))
	.pipe($.size({title: 'Production', showFiles: true}));
});
