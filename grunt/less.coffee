module.exports =
  dev:
    options:
      outputStyle: 'nested'
      sourceMap: false
    files: [ {
      expand: true
      cwd: 'src/less'
      src: [ '*.less' ]
      dest: 'public/css'
      ext: '.css'
    } ]
  prod:
    options:
      outputStyle: 'compressed'
      sourceMap: false
    files: [ {
      expand: true
      cwd: 'src/less'
      src: [ '*.less' ]
      dest: 'public/css'
      ext: '.css'
    } ]