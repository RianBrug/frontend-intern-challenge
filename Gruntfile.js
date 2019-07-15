module.exports = function(grunt) {
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.initConfig({ pkg: grunt.file.readJSON('package.json'), less: {
options: {
paths: 'css/less',
yuicompress: true
},
files: {
'style.css': 'css/less/style.less'
}
},
watch: {
less: {
files: 'css/less/*.less',
tasks: 'less'
}
}
});
}
