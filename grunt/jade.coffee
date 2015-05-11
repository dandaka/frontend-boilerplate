module.exports =
  dev:
    options:
      outputStyle: 'nested'
      sourceMap: true
      pretty: true
    files: [ {
      expand: true
      cwd: 'src/jade'
      src: [ '*.jade' ]
      dest: 'public'
      ext: '.html'
    } ]
  prod:
    options:
      outputStyle: 'compressed'
      sourceMap: false
    files: [ {
      expand: true
      cwd: 'src/jade'
      src: [ '*.jade' ]
      dest: 'public'
      ext: '.html'
    } ]