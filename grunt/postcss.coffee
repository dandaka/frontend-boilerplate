module.exports =
  dev:
    options:
      map: true
      processors: [
        require('autoprefixer-core')(browsers: 'last 2 version').postcss
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
        require('autoprefixer-core')(browsers: 'last 2 version').postcss
        require('csswring').postcss
      ]
    files: [ {
      expand: true
      cwd: 'public/css'
      src: [ '*.css' ]
      dest: 'public/css'
      ext: '.css'
    } ]