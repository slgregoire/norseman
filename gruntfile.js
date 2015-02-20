//grunt config file for personal website build with flask

module.exports = function(grunt) {

    //instead of writing out "grunt.loadNpmTasks('grunt-*');" for each package grunt uses
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        //compile scss files into css files
        sass: {
            folder: {
                //compile entire folder of scss files
                files: [{
                    expand: true,
                    cwd: 'app/static/css/scss',
                    src: ['*.scss'],
                    dest: 'app/static/css',
                    ext: '.css'
                }]
            },
            file: {
                //compile single scss file
                files: {
                    'app/static/css/custom.css': 'app/static/css/scss/custom.scss'
                }
            }
        },
        //concatenate files
        concat: {
            css: {
                src: ['app/static/css/*.css'],
                dest: 'app/static/css/single.css'
            },
            scss: {
                src: ['app/static/css/scss/*.scss'],
                dest: 'app/static/css/scss/master.scss'
            }

        },
        cssmin: {
            dev: {
                src: 'app/static/css/custom.css',
                dest: 'app/static/css/custom.css'
            }

        }

    });

    grunt.registerTask('buildcss', ['sass:file', 'cssmin:dev']);

}