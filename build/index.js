/**
 * Build
 * =====
 *
 *
 */

var path = require('path');
var gulp = require('gulp');
var run  = require('run-sequence');
var $    = require('gulp-load-plugins')({
  'rename': {
    'gulp-minify-css': 'minifyCSS'
  }
});

var src  = path.resolve(__dirname, '../src/style.styl');
var dist = path.resolve(__dirname, '../dist/');

// compile styles
gulp.task('default', function(){
  gulp.src(src)
        .pipe($.plumber(console.error.bind(console)))
        .pipe($.sourcemaps.init())
          .pipe($.stylus({
            errors: true
          }))
          .pipe($.autoprefixer({
            cascade: false,
            browsers: ['last 2 versions']
          }))
          .pipe($.minifyCSS())
        .pipe($.sourcemaps.write())
        .pipe($.rename('material-ui.css'))
        .pipe(gulp.dest(dist));
});

run('default', function(){
  console.log('BUILD');
});
