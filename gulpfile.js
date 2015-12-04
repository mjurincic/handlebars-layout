'use strict';

var gulp = require('gulp'),
	paths = {
		gulp: './gulpfile.js',
		src: './index.js',
		test: './test/*.{e2e,spec}.js'
	};

gulp.task('cover', function () {
	var istanbul = require('gulp-istanbul');

	return gulp
		.src(paths.src)
		.pipe(istanbul())
		.pipe(istanbul.hookRequire());
});

gulp.task('test', ['cover'], function () {
	var istanbul = require('gulp-istanbul'),
		mocha = require('gulp-mocha');

	return gulp
		.src(paths.test)
		.pipe(mocha({ reporter: 'spec' }))
		.pipe(istanbul.writeReports());
});
