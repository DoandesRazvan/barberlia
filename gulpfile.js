// const { watch } = require('browser-sync');

const gulp = require('gulp'),
      pug = require('gulp-pug'),
      sass = require('gulp-sass')(require('sass')),
      autoprefixer = require('gulp-autoprefixer'),
      browsersync = require('browser-sync').create();

function pugTask(){
    return gulp.src('./views/2-sections/*.pug')
               .pipe(pug())
               .pipe(gulp.dest('dist'));
}

function sassTask() {
    return gulp.src('./sass/2-sections/*.sass')
               .pipe(sass({
                   includePaths: ['css'],
                   onError: sass.logError
               }))
               .pipe(autoprefixer())
               .pipe(gulp.dest('dist'));
}

function browsersyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: 'dist',
            index: 'index.html'
        }
    });
    cb();
}

function browsersyncReload(cb) {
    browsersync.reload();
    cb();
}

// function watch() {
//     gulp.watch('./views/2-sections/*.pug', pugTask);
//     gulp.watch('./sass/2-sections/*.sass', sassTask);
// }

// exports.watch = watch;

function watchTask(){
    gulp.watch('./*.html', browsersyncReload);
    gulp.watch('./views/2-sections/*.pug', gulp.series(pugTask, browsersyncReload));
    gulp.watch('./sass/2-sections/*.sass', gulp.series(sassTask, browsersyncReload));
}

exports.default = gulp.series(
    pugTask,
    sassTask,
    browsersyncServe,
    watchTask
);
