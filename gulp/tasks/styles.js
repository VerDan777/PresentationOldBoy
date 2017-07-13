const gulp = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const sassModuleImporter = require('sass-module-importer');

gulp.task('styles',()=>{
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({importer:sassModuleImporter() }))
        .on('error', notify.onError({title:styles}))
        .pipe(gulp.dest('./dist/'));
 });