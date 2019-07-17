module.exports = function(grunt) {

  grunt.initConfig({ pkg: grunt.file.readJSON('package.json'),
  less: {
    options: {
      livereload: true,
      paths: 'app/css/less',
      yuicompress: true
    },
    files: {
      'style.css': 'app/css/less/style.less'
    }
  },
  watch: {
    less: {
      files: 'app/css/less/*.less',
      tasks: 'less'
    },
    html: {
      files: 'app/*.html',
      tasks: 'nodemon'
    }
  },
  connect: {
    server: {
        options: {
            port: 9000,
            base: ".",
            hostname: "localhost",
            livereload: true,
            open: true
        }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-nodemon');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-serve');

// grunt.registerTask( "default", [ "connect", "watch" ]);

}
