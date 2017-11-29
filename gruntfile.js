module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		coffee:{
			compile:{
				files:{
					'app.js': 'coffee/app.coffee'
				}	
			}
		},
		less:{
			compile:{
				files:{
					'app.css': 'less/app.less'
				}
			}
		},
		watch:{
			options:{
				livereload:true
			},
			coffee:{
				files: 'coffee/*.coffee',
				tasks: 'coffee'				
			},
			less:{
				files: 'less/*.less',
				tasks: 'less'
			}
		},
		express:{
			all:{
				options:{
					port: 9000,
					hostname: 'localhost',
					bases: '.',
					livereload: true
				}
			}
		}
	});
		grunt.loadNpmTasks('grunt-contrib-less');
		grunt.loadNpmTasks('grunt-contrib-coffee');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-express');
		grunt.registerTask('default', ['coffee', 'less']);
		grunt.registerTask('server', ['express', 'watch'])

}
