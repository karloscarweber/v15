var gulp = require('gulp');

// gulp plugins and utils
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');
var sourcemaps = require('gulp-sourcemaps');
var zip = require('gulp-zip');
var gulp_concat = require('gulp-concat');
var gulp_sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
const webpack = require('webpack-stream');


// postcss & plugins
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var custom_media = require('postcss-custom-media');

var swallowError = function swallowError(error) {
    gutil.log(error.toString());
    gutil.beep();
    this.emit('end');
};

var nodemonServerInit = function () {
    livereload.listen(1234);
};

gulp.task('build', ['sass', 'css'], function (/* cb */) {
    return nodemonServerInit();
});

gulp.task('sass', function () {
    var processors = [
      custom_media(),
      autoprefixer()
    ];
    // return gulp.src('assets/sass/**/*.scss')
    return gulp.src('assets/sass/*.scss')
      .pipe(postcss(processors))
      .pipe(gulp_sass().on('error', gulp_sass.logError))
      .pipe(gulp_concat('styles.css'))
      .pipe(gulp.dest('assets/css/'));
});

gulp.task('css', function () {
    return gulp.src('assets/css/*.css')
        // .on('error', swallowError) // We really don't need this right now.
        .pipe(gulp.dest('assets/built/'))
        // .pipe(gulp_concat('everything.css'))
        // .pipe(gulp.dest('assets/built/'))
        .pipe(livereload());
});

gulp.task('javamascript', function() {
  return gulp.src(['./assets/js/vendor/*.js', './assets/js/lib/*.js', './assets/js/scripts.js'])
    // .pipe(sourcemaps.init())
    .pipe(babel({
      "plugins": ["@babel/plugin-proposal-class-properties"],
      "presets": ["@babel/preset-env"]
    }))
    .pipe(webpack())
    .pipe(concat('all.js'))
    // .pipe(sourcemaps.write("./assets/built/"))
    .pipe(rename('application.js'))
    .pipe(gulp.dest('./assets/built/'));
});

gulp.task('watch', function () {
    gulp.watch('assets/css/**', ['css']);
    gulp.watch('assets/sass/**', ['sass']);
    gulp.watch('assets/js/**', ['javamascript']);
});

// Grabs everything but the node_modules and dist directory and zips it up
gulp.task('zip', ['sass', 'css', 'javamascript'], function() {
    var targetDir = 'dist/';
    var themeName = require('./package.json').name;
    var filename = themeName + '.zip';

    return gulp.src([
        '**',
        '!node_modules', '!node_modules/**',
        '!dist', '!dist/**'
    ])
        .pipe(zip(filename))
        .pipe(gulp.dest(targetDir));
});

gulp.task('default', ['build'], function () {
    gulp.start('watch');
});
