const gulp = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const { parallel, series } = require('gulp');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

function tarefasCSS(callback){
    
    gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './vendor/owl/css/owl.css',
        './src/css/style.css'
    ])
    .pipe(concat('styles.css'))
    .pipe(cssmin())
    .pipe(rename( { suffix: '.min' } ))
    .pipe(gulp.dest('./dist/css'))

    return callback()

}

function tarefasJS(callback){
    
    gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './vendor/owl/js/owl.js',
        './src/js/custom.js'
    ])
    .pipe(babel({
        comments: false,
        presets: ['@babel/env']
    }))
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(rename( { suffix: '.min' } ))
    .pipe(gulp.dest('./dist/js'))

    return callback()

}

function tarefasImg(callback){
    
    return gulp.src('./src/images/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(gulp.dest('./dist/images'));
}

function tarefasHTML(callback){
    
    gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))
    
    return callback()
    
}

gulp.task('serve', function(){

    browserSync.init({
        server: {
            baseDir: "./dist"
        }}
    )
    gulp.watch('./src/**/*').on('change', process)
    gulp.watch('./src/**/*').on('change', reload)
})

const process = series( tarefasHTML, tarefasCSS, tarefasJS)

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImg


exports.default = process