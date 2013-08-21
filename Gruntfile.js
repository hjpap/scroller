/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
                         // Metadata.
                         pkg:grunt.file.readJSON('package.json'),
                         banner:'/*<%= grunt.template.today("yyyy-mm-dd") %>-<%= pkg.author%>*/',
                         // Task configuration.
                         concat:{
                             options:{
                                 banner:'<%= banner %>',
                                 stripBanners:true
                             },
                             scroller:{
                                 src:['build/<%= pkg.version%>/animate-min.js', 'build/<%= pkg.version%>/scroller-min.js'],
                                 dest:'build/<%= pkg.version%>/scroller.all.js'
                             }
                         },
                         uglify:{
                             options:{
                                 banner:'<%= banner %>'
                             },
                             scroller:{
                                 files:{
                                     'build/<%= pkg.version%>/animate-min.js':['src/Animate.js'],
                                     'build/<%= pkg.version%>/scroller-min.js':['src/Scroller.js']
                                 }
                             }
                         }
                     });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['uglify:scroller', 'concat:scroller']);

};