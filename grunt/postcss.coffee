module.exports =
  dev:
    options:
      map: true
      processors: [
        require('autoprefixer')(browsers: 'last 2 version')
      ]
    files: [ {
      expand: true
      cwd: 'public/css'
      src: [ '*.css' ]
      dest: 'public/css'
      ext: '.css'
    } ]
  prod:
    options:
      map: false
      processors: [
        require('autoprefixer')(browsers: 'last 2 version')
        require('csswring')
      ]
    files: [ {
      expand: true
      cwd: 'public/css'
      src: [ '*.css' ]
      dest: 'public/css'
      ext: '.css'
    } ]