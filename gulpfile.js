
// LIBS
var express = require('express');
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

// VARS
var paths = {
    build: {
        base:   './build/',
        css:    './build/css/',
        fonts:  './build/fonts/'
    },
    core: {
        base:   './',
        css:    './css/*.scss',
        fonts:  './fonts/*.ttf'
    }
};

gulp.task('server', function () {
    var app = express();
    app.use('/', express.static(__dirname));
    app.listen(5555);
});

gulp.task('styles', function () {
    gulp.src(paths.core.css)
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(paths.build.css));
});

gulp.task('fonts', function () {
    gulp.src(paths.core.fonts)
        .pipe(gulp.dest(paths.build.fonts));
});

gulp.task('default', ['server', 'styles'], function() {
    console.log('[SERVER RUNNING] Go to http://localhost:5555');
});
