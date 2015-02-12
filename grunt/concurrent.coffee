module.exports =
  options: limit: 4
  devFirst: [
    'jshint'
    'jade'
  ]
  devSecond: [
    'less:dev'
    'uglify'
  ]
  prodFirst: [
    'jshint'
    'jade'
  ]
  prodSecond: [
    'less:prod'
    'uglify'
  ]
  imgFirst: [ 'imagemin' ]
  server: [ 'watch', 'connect:server::keepalive' ]