module.exports = {

    // Development settings
    dev: {
        options: {
            outputStyle: 'nested',
            sourceMap: true
        },
        files: [{
            expand: true,
            cwd: 'src/jade',
            src: ['*.jade'],
            dest: 'public',
            ext: '.html'
        }]
    },

    // Production settings
    prod: {
        options: {
            outputStyle: 'compressed',
            sourceMap: false
        },
        files: [{
            expand: true,
            cwd: 'src/jade',
            src: ['*.jade'],
            dest: 'public',
            ext: '.html'
        }]
    }
};
