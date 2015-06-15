// LIBS
var browserify = require('browserify');
var express = require('express');
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

// VARS
var paths = {
    build: {
        base:   './',
        css:    './css/',
        js:     './lib/',
        images: './img/',
        fonts:  './fonts/'
    },
    core: {
        base:   './app/',
        js:     './app/lib/scripts.js',
        react:  './app/lib/app.js',
        css:    './app/styles/**/*.scss',
        images: './app/images/**/*.*',
        fonts:  './app/fonts/**/*.ttf'
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

gulp.task('js', function () {
    gulp.src(paths.core.js)
        .pipe(gulp.dest(paths.build.js));
});

gulp.task('images', function () {
    gulp.src(paths.core.images)
        .pipe(gulp.dest(paths.build.images));
});

gulp.task('fonts', function () {
    gulp.src(paths.core.fonts)
        .pipe(gulp.dest(paths.build.fonts));
});

gulp.task('compile', function() {
    return browserify(paths.core.react)
        .transform(reactify)
        .bundle()
        .on('error', handleErrors)
        .pipe(source('app.js'))
        .pipe(gulp.dest(paths.build.js));
})

gulp.task('watch', function () {
    gulp.watch(paths.core.css, ['styles']);
    gulp.watch(paths.core.js, ['js']);
    gulp.watch(paths.core.react, ['compile']);
    gulp.watch(paths.core.images, ['images']);
});

gulp.task('default', ['styles', 'js', 'compile', 'images', 'fonts', 'server', 'watch'], function() {
    console.log('[SERVER RUNNING] Go to http://localhost:5555');
});

// ERROR HANDLER
var handleErrors = function (err) {
    console.log(err.message);
};
