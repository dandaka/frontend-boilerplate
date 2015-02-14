module.exports =
  options:
    spawn: false
    livereload: true
  scripts:
    files: [ 'src/coffee/*.coffee' ]
    tasks: [
      'coffee'
      'jshint'
      'uglify'
    ]
  styles:
    files: [ 'src/less/*.less' ]
    tasks: [ 'less:dev' ]
  jade:
    files: [ 'src/jade/*.jade' ]
    tasks: [ 'jade:dev' ]