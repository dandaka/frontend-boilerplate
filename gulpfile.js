var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var favicons = require('gulp-favicons');
var ga = require('gulp-ga');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var responsive = require('gulp-responsive');
var print = require('gulp-print');

var config = {
  bowerDir: './bower_components' ,
  gaId: 'UA-71710979-1',
  url: 'dandaka.com',
  appName: 'Fontend Boilerplate',
  appDescription: 'Fontend Boilerplate',
  developerName: 'Vlad Rafeev'
}

gulp.task('default', ['jade', 'sass', 'connect', 'watch']);

gulp.task('jade', function() {
  gulp.src('./src/jade/*.jade')
    .pipe(jade())
    .pipe(ga({url: config.url, uid: config.gaId, tag: 'body'}))
    .pipe(gulp.dest('./public/'))
});

gulp.task('sass', function () {
  gulp.src('./src/sass/style.scss')
    .pipe(sass({
      includePaths: [
        config.bowerDir + '/bootstrap/scss',
        config.bowerDir + '/font-awesome/scss'
      ],
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch(['./src/jade/*.jade'], ['jade']);
  gulp.watch(['./src/sass/**/*.scss'], ['sass']);
  watch(['./public/**/*.html', './public/**/*.css']).pipe(connect.reload());
});

gulp.task('icons', function() { 
  return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*') 
    .pipe(gulp.dest('./public/fonts')); 
});
 
gulp.task("favicons", function () {
  gulp.src("./src/favicon.png").pipe(favicons({
      appName: config.appName,
      appDescription: config.appDescription,
      developerName: config.developerName,
      developerURL: config.url,
      background: "#FFFFFF",
      path: "favicons/",
      url: config.url,
      display: "standalone",
      orientation: "portrait",
      version: 1.0,
      logging: true,
      online: false,
      html: "./public/favicons/favicons.html",
      replace: true
  })).pipe(gulp.dest("./public/favicons"));
});

gulp.task('responsive', function () {
  gulp.src('./src/img/**/*.png')
    .pipe(print())
    .pipe(responsive([{
      name: 'OC_*.png',
      width: 600
      }],
      {
        errorOnUnusedImage: false
      }
    ))
    .pipe(gulp.dest('./public/img/'));
});

gulp.task('responsive2', function () {
  gulp.src('./src/img/**/*.jpg')
    .pipe(print())
    .pipe(responsive([{
      name: 'banner.jpg',
      width: 600
      }],
      {
        errorOnUnusedImage: false
      }
    ))
    .pipe(gulp.dest('./public/img/'));
});