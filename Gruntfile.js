module.exports = function(grunt) {

	grunt.initConfig({

		dir: {
			src: 'src',
			src_qrcode: 'node_modules/qrcodejs',
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
		            resources: [
		                { cwd: '<%= dir.src %>' },
		                { cwd: '<%= dir.src_qrcode %>', src: 'qrcode.js', prefix: 'it/designfuture/qrcode/3rdparty' }
		            ],
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