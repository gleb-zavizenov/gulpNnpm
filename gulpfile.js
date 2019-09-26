const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const nano = require("cssnano");
const prefixer = require("autoprefixer");
const imagemin = require("gulp-imagemin");

//define some tasks for GULP to run

//line to complete and modify SASS files
function compile(done) {
    gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(postcss([prefixer(),nano()]))
        .pipe(gulp.dest('./css'))
        done()
}

//minify every image
function minImages(done){
    gulp.src('./images/**')
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/images"))
        done()
}

exports.compile = compile;
exports.minImages = minImages;