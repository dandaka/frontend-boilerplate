module.exports = {

    // Task options
    options: {
        limit: 4
    },

    // Dev tasks
    devFirst: [
        'jshint'
    ],
    devSecond: [
        'less:dev',
        'uglify'
    ],

    // Production tasks
    prodFirst: [
        'jshint'
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
