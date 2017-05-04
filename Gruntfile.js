module.exports = function(grunt) {

	grunt.initConfig({

		dir: {
			src: 'src',
			dest: 'dist',
		},

		copy: {

		},

		clean: {
			dist: '<%= dir.dest %>/**'
		},

		openui5_preload: {
			library: {
				options: {
					resources: '<%= dir.src %>',
					dest: '<%= dir.dest %>',
					compatVersion: '1.44',
					compress: false
				},
				libraries: 'it/designfuture/qrcode'
			}
		}
	});

	// These publins provide necessary tasks
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-openui5');

	// Build task
	grunt.registerTask('build', ['openui5_preload']);

	// Default task
	grunt.registerTask('default', ['clean', 'build']);

};