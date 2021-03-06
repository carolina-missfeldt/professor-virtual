'use strict';

const gulp = require('gulp')
,imagemin = require('gulp-imagemin')
,clean = require('gulp-clean')
,sass = require('gulp-sass')
// ,concat = require('gulp-concat')
// ,htmlReplace = require('gulp-html-replace')
// ,uglify = require('gulp-uglify')
// ,usemin = require('gulp-usemin')
// ,cssmin = require('gulp-cssmin')
,browserSync = require('browser-sync');
 // ,jshint = require('gulp-jshint')
 // ,jshintStylish = require('jshint-stylish')
 //,reporters = require('reporters')
 // ,csslint = require('gulp-csslint');
 // ,autoprefixer = require('gulp-autoprefixer')
 


// gulp.task('default', ['copy'] () => {
// 	gulp.start('build-img', 'build-html', 'build-js');
// 	console.log('Gulp default task');
// });

gulp.task('default', ['copy'], function() {
    
});

gulp.task('copy', ['clear'], function() {
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('clear', function() {
    return gulp.src('dist')
        .pipe(clean());
});


gulp.task('build-img', function() {

  gulp.src('dist/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

// gulp.task('build-js', function() {
//     gulp.src(['dist/js/jquery.js', 
//       'dist/js/home.js', 
//       'dist/js/ativa-filtro.js'])
//         .pipe(concat('all.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });

// gulp.task('build-css', function() {
//     gulp.src(['dist/css/reset.css', 
//       'dist/css/estilos.css', 
//       'dist/css/mobile.css'])
//         .pipe(concat('all.css'))
//         .pipe(gulp.dest('dist/css'));
// });

// //teste

// gulp.task('build-html', function() {

//     return gulp.src('dist/**/*.html')
//         .pipe(htmlReplace({
//             'js': 'js/all.js',
//             'css': 'css/all.css'
//         }))
//         .pipe(gulp.dest('dist/'));
// });

// gulp.task('usemin', function() {
//   return gulp.src('dist/**/*.html')
//     .pipe(usemin({
//       js: [uglify],
//       css: [autoprefixer,cssmin]
//     }))
//     .pipe(gulp.dest('dist'));
// });


gulp.task('sass', function () {
  return gulp.src('src/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

// gulp.task('csslint', function () {
// return gulp.src(['./**/*.scss'])
//   .pipe(sass({
//     onError: reporters('gulp-sass')
//   }))
//  }); 

gulp.task('server', ['sass'], function() {

    browserSync.init({
        server: "src"
    });

    gulp.watch("src/css/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});




