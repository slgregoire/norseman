//grunt config file for personal website build with flask

module.exports = function(grunt) {

    //instead of writing out "grunt.loadNpmTasks('grunt-*');" for each package grunt uses
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        //compile scss files into css files
        sass: {
            dev: {
                src: 'app/static/css/scss/combined.scss',
                dest: 'app/static/css/combined.css'
            }
        },

        //concatenate files
        concat: {
            dev: {
                src: ['app/static/css/scss/materialize.scss','app/static/css/scss/*.scss', '!app/static/css/scss/combined.scss'],
                dest: 'app/static/css/scss/combined.scss'
            }
        },

        //minifies css files
        cssmin: {
            dev: {
                src: 'app/static/css/combined.css',
                dest: 'app/static/css/combined.min.css'
            }

        },

        watch: {
            dev: {
                files: ['app/static/css/scss/*.scss'],
                tasks:['concat:dev', 'sass:dev', 'cssmin:dev']
            }
        },

        jshint: {
            dev: ['gruntfile.js', 'app/static/js/*.js']
        }
    });

    grunt.registerTask('default', ['watch:dev']);
};