module.exports = function(grunt) {

	grunt.initConfig({

		dir: {
			src: 'src',
			src_qrcode: 'node_modules/qrcodejs',
			dest: 'dist',
			demo: 'demo',
			bower_components: 'bower_components'
		},

		copy: {

		},

		clean: {
			dist: '<%= dir.dest %>/**'
		},

		eslint: {
            options: {
                configFile: './.eslintrc'
            },

            demo: ['<%= dir.demo %>']
        },

		connect: {
			options: {
				port: 8080,
				hostname: '*'
			},
			src: {},
			dist: {}
		},

		openui5_connect: {
			options: {
				resources: [
					'<%= dir.bower_components %>/openui5-sap.ui.core/resources',
					'<%= dir.bower_components %>/openui5-sap.m/resources',
					'<%= dir.bower_components %>/openui5-sap.ui.layout/resources',
					'<%= dir.bower_components %>/openui5-themelib_sap_belize/resources'
				]
			},
			src: {
				options: {
					appresources: '<%= dir.demo %>'
				}
			},
			dist: {
				options: {
					appresources: '<%= dir.demo %>'
				}
			}
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
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-openui5');
	grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks("grunt-contrib-watch");

	// Server task
	grunt.registerTask('serve', function(target) {
		grunt.task.run('openui5_connect:' + (target || 'src') + ':keepalive');
	});

	// Linting task
	grunt.registerTask('lint', ['eslint']);

	// Build task
	grunt.registerTask('build', ['openui5_preload']);

	// Default task
	grunt.registerTask('default', [
		'lint',
		'clean',
		'build',
		'serve:demo'
	]);

};