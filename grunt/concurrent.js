module.exports = {

    // Task options
    options: {
        limit: 4
    },

    // Dev tasks
    devFirst: [
        'jshint',
        'jade'
    ],
    devSecond: [
        'less:dev',
        'uglify'
    ],

    // Production tasks
    prodFirst: [
        'jshint',
        'jade'
    ],
    prodSecond: [
        'less:prod',
        'uglify'
    ],

    // Image tasks
    imgFirst: [
        'imagemin'
    ]
};
