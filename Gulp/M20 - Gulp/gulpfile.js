const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')


function tarefasCSS(cb){

  return gulp.src([
          './node_modules/bootstrap/dist/css/bootstrap.css',
          './vendor/owl/css/owl.css',
          './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
          './src/css/style.css'
    ])
          .pipe(concat('styles.css'))
          .pipe(cssmin())
          .pipe(rename( { suffix: '.min' } ))
          .pipe(gulp.dest('./dist/css'))
}

function tarefasJS(cb){

  return gulp.src([
          './node_modules/jquery/dist/jquery.js',
          './node_modules/bootstrap/dist/js/bootstrap.js',
          './vendor/owl/js/owl.js',
          './src/js/custom.js'
  ])
          .pipe(concat('scripts.js'))
          .pipe(uglify())
          .pipe(rename( { suffix: '.min' } ))
          .pipe(gulp.dest('./dist/js'))
}

function tarefasImg(cb){

  return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImg