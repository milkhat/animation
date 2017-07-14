var gulp = require('gulp');
var browserSync =require('browser-sync');

gulp.task('default', ['browser-sync']);


gulp.task('browser-sync', function() {
    browserSync({
        server: {
             baseDir: "./htdocs/"       //対象ディレクトリ
            ,index  : "index.html"      //インデックスファイル
        }
    });
});

//
//ブラウザリロード
//
gulp.task('bs-reload', function () {
    browserSync.reload();
});

//
//監視ファイル
//
gulp.task('default', ['browser-sync'], function () {
    gulp.watch("./htdocs/*.html",            ['bs-reload']);
    gulp.watch("./htdocs/commons/css/*.css", ['bs-reload']);
    gulp.watch("./htdocs/commons/js/*.js",   ['bs-reload']);
});
