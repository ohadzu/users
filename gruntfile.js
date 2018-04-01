module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {			
				separator: ';'
			},
		    js: { 
		        src: ['./users.js',
				     './users-controller.js',
		        	 './directives/*/*.js',
		        	 './services/*.js'],
		        dest: './dist/app.js'
		    }
		},

		uglify: {
		    js: { 
		        src: ['./dist/app.js'],
		        dest: './dist/app.js'
		    }
		},

		watch: {
		  scripts: {
		    files: ['./users.js',
				     './users-controller.js',
		        	 './directives/*/*.js',
		        	 './services/*.js'],
		    tasks: ['default'],
		    options: {
		      spawn: false,
		    },
		  },
		},
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify-es');
	grunt.loadNpmTasks('grunt-contrib-watch');	

    grunt.registerTask('default', ['concat', 'uglify']);        
};