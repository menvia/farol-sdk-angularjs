let gulp = require('gulp');
let babel = require('gulp-babel');
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
let pump = require('pump');

let job = function(cb, debug) {
  let pumpSteps = [
    gulp.src([
      'src/index.js',
    ]),
    babel({
      presets: ['env'],
    }),
    concat('angular-farol-sdk.js'),
  ];
  // If it is not in debug it will also uglify
  if (!debug) {
    pumpSteps.push(uglify());
  }
  pumpSteps.push(gulp.dest('dist'));
  pump(pumpSteps, cb);
};

let debug = function(cb) {
  job(cb, true);
};

let production = function(cb) {
  job(cb, false);
};

gulp.task('default', production);
gulp.task('debug', debug);
