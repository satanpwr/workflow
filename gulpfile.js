var gulp = require("gulp"),
	connect =require("gulp-connect"),
	opn = require("opn");


//Запуск локального сервера
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 8888
  });
  opn('http:localhost:8888');
});
// Работа с HTML
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});
// Работа с CSS
gulp.task('css', function () {
  gulp.src('./app/css/*.css')
    .pipe(connect.reload());
});
// Слежка
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/css/*.css'], ['css']);
});
//задача по умолчанию
gulp.task('default', ['connect', 'watch']);