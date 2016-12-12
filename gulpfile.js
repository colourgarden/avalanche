var gulp = require('gulp'),
    stylelint = require('gulp-stylelint');

gulp.task('lint', function () {
    return gulp
        .src('**/*.scss')
        .pipe(stylelint({
            reporters: [
                { formatter: 'string', console: true }
            ]
        }));
});
