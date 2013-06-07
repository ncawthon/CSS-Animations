module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    stylus: {
      compile: {
        options: {
          paths: ['styl'], // folder, where files to be imported are located
          urlfunc: 'url', // use embedurl('test.png') in our code to trigger Data URI embedding
          'include css': true
        },
        files: {
          'dist/index.css': 'styl/index.styl' // 1:1 compile
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/jquery.js', 'js/app.js'],
        dest: 'dist/app.js'
      }
    },

    watch: {
      src: {
        files: ['styl/*.styl', 'js/*.js'],
        tasks: ['build']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['stylus:compile', 'concat:dist']);

};