var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('compile', function() {
  return browserify('./index.js')
    .bundle()
    .on('error', function(err) {
      console.log(err.message);
      this.emit('end');
    })
    .pipe(source('ng-jiff.js'))
    .pipe(gulp.dest('./release'));
});


gulp.task('build', function() {
  gulp.watch(['./gulpfile.js', './*.js', './src/**/*.js', './lib/**/*.js'],['compile']);
});
