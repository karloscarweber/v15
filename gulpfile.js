"use strict";

// Plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const gulp = require('gulp');
// gulp plugins and utils
const livereload = require('gulp-livereload');
// var sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const plumber = require("gulp-plumber");
const concat = require('gulp-concat');
const webpack = require("webpack");
const webpackconfig = require("./webpack.config.js");
const webpackstream = require("webpack-stream");
const postcss = require('gulp-postcss');
const custom_media = require('postcss-custom-media');

function css() {
  return gulp
    .src('assets/sass/*.scss')
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    // .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(postcss([custom_media(),autoprefixer()]))
    .pipe(gulp.dest('assets/built/'))
    // .pipe(browsersync.stream())
}

function scripts() {
  return (
    gulp
    .src(['./assets/js/vendor/*.js', './assets/js/lib/*.js', './assets/js/scripts.js'])
      // .pipe(sourcemaps.init())
      .pipe(plumber())
      // .pipe(babel({
      //   "plugins": ["@babel/plugin-proposal-class-properties"],
      //   "presets": ["@babel/preset-env"]
      // }))
      .pipe(webpackstream(webpackconfig, webpack))
      .pipe(concat('all.js'))
      // .pipe(sourcemaps.write("./assets/built/"))
      .pipe(rename('application.js'))
      .pipe(gulp.dest('./assets/built/'))
      // .pipe(browsersync.stream())
  )

}

// Watch files
function watchFiles() {
  gulp.watch("./assets/sass/**/*", css);
  gulp.watch("./assets/js/**/*", scripts);
}

const js = gulp.series(scripts);
const build = gulp.series(gulp.parallel(css, js));
// const watch = gulp.parallel(watchFiles, browserSync);
const watch = gulp.parallel(watchFiles);

exports.css = css;
exports.js = js;
exports.build = build;
exports.watch = watch;
exports.default = watch;
