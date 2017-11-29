### Create Project Structure

```sh
mkdir grunt-app
cd grunt-app
npm init  -- this is for creating package.json
```

#### Install grunt dependecy using npm

```shell
npm install grunt-cli -g
npm install grunt --save-dev
npm install grunt-contrib-less --save-dev
npm install grunt-contrib-coffee --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-express --save-dev
```

after installing all dependecies of above, this all will be added in package.json  and also node_modules file wil be added into your directory

```json
 "devDependencies": {
    "grunt": "^1.0.1",
    "grunt-contrib-coffee": "^2.0.0",
    "grunt-contrib-less": "^1.4.1",
    "grunt-contrib-watch": "^1.0.0",
    "grunt-express": "^1.4.1"
}
```

##### By Using grunt plugins

```shell
touch index.html
```

```html
<html>
	<head>
		<link rel="stylesheet" href="app.css">
	</head>
	<body>
		<h2>This is our first app using Grunt</h2>
		<p>Grunt is a task runner tool for front end development</p>
		<button id="bttn">button</button>
		<script src="app.js"></script>
	</body>
</html>
```

```shell
touch gruntfile.js
```

```js
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

```

```shell
mkdir coffee && cd coffee
touch app.coffee
```

```coffeescript
document.getElementById('bttn').onclick = ->
	alert('hi!!!')
```

```shell
mkdir less && cd less
touch app.less
```

```less
@green: #006400;
@blue: #1E90FF;
@violet: #9400D3;
@red: #FF0000;
@lavender: #E6E6FA;

h2{
 	color: @red
}

p{
	color: @blue
}

button{
	background-color: @blue;
	color: @lavender
}
```

The main part of gruntfile.js 3

1. compile: .coffee and .less file compiled to .js and .css
2. watch:  if there is any changes are done in anyfiles (coffee , less)
3. livereload:  for every changes browser will reload automatically