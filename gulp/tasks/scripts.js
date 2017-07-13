const gulp =require('gulp');
const webpack = require('webpack-stream');
// const path = require('path');
const notify = require('gulp-notify');


// const Path = {
//     src: path.join(__dirname,'./src/js/'),
//     dist: path.join(__dirname,'./dist/')
// }
const commonCfg = {
    entry: './src/js/app.js',
    output: {
        filename: 'app.js'
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            test:/\.js$/,
            exclude:/node_modules/
        }]
    }
}

gulp.task('scripts',()=> {
        return gulp.src('./src/js/app.js')
        .pipe(webpack(commonCfg))
        .on('error',(errorInfo)=>{
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./dist/'));
})