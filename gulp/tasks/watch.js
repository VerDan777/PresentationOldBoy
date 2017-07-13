const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();



gulp.task('watch',()=>{
    browserSync.init({
        server: {
            baseDir:'dist'
        }
    });
    watch('./src/*.pug',() => {
        gulp.start('pugChanged');
    });
    watch('./src/sass/**/*.scss',() => {
        gulp.start('CssInject');
    });
    watch('./src/js/*.js',() => {
        gulp.start('jsChanged');
    });
});

    gulp.task('jsChanged',['scripts'],() => {
        browserSync.reload();
    });
    gulp.task('pugChanged',['pugRender'],() => {
        browserSync.reload();
    });
    gulp.task('CssInject',['styles'], () => {
        gulp.src('./dist/styles.css')
        .pipe(browserSync.stream());
    })
    gulp.task('default',['pug','styles','watch','scripts']);

