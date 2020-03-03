module.exports = function (grunt) {
  grunt.initConfig({
<<<<<<< HEAD
    uglify: {
        'rectangle.min.js': 'rectangle.js'                
    }
              
  });

    grunt.loadNpmTasks('grunt-contrib-uglify');

      grunt.registerTask('default', ['uglify']);
};

=======
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'
      },
      src: ['*.html']
    }
  });

  grunt.loadNpmTasks('grunt-htmlhint');

  grunt.registerTask('default', ['htmlhint']);
};
>>>>>>> 924896de73159434b0b988daf4eef5e03a540d40
