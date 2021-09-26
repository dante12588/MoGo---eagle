'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const watch = require('gulp-watch');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();

gulp.task('css', function(){
    return gulp.src('src/scss/main.scss')
    .pipe( sass() )
    .pipe( gulp.dest('src/css') );
})

gulp.task('watch', function(){
    gulp.watch('src/scss/**/*.scss', gulp.series('css'));
    gulp.watch('src/**/*.html').on('change', browserSync.reload);
    gulp.watch('src/**/*.js').on('change', browserSync.reload);
    gulp.watch('src/**/*.scss').on('change', browserSync.reload);
})


gulp.task('js', () =>
    gulp.src('src/js/app.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(babel({
			plugins: ['@babel/transform-runtime']
		}))
        .pipe(gulp.dest('dist'))
);

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
});

gulp.task('default', gulp.parallel('css', 'server', 'watch'));