var gulp    = require("gulp");
var connect = require("gulp-connect");

var source = {
    path: {
        html: "./wwwroot/**/*.html",
        js: {
            app: "./app/**/*.js"
        }
    },
    html: function()
    {
        return gulp.src(source.path.html);
    },
    js: {
        app: function()
        {
            return gulp.src(source.path.js.app);
        }
    }
}

var dest = {
    path: {
        html: "./wwwroot",
        js: {
            app: "./wwwroot/app",
            vendor: "./wwwroot/vendor"
        }
    },
    js: {
        app: function()
        {
            return gulp.dest(dest.path.js.app);
        },
        vendor: function()
        {
            return gulp.dest(dest.path.js.vendor);
        }
    }
}

// -----
// Build
// -----

gulp.task(
    "build",
    [
        "build-js-app"
    ]
);

gulp.task(
    "build-js-app",
    function()
    {
        source.js.app()
            .pipe(
                dest.js.app()
            );
    }
);

// -------------
// Serve / Watch
// -------------

gulp.task(
    "watch",
    ["connect"],
    function()
    {
        gulp.watch(
            source.path.html,
            [
                "watch-html"
            ]
        );
        gulp.watch(
            source.path.js.app,
            [
                "watch-js-app"
            ]
        );
    }
);

gulp.task(
    "connect",
    function() {
        connect.server(
            {
                root: "./wwwroot",
                port: 19428,
                livereload: true
            }
        );
    }
);

gulp.task(
    "watch-html",
    function()
    {
        source.html()
            .pipe(
                connect.reload()
            );
    }
);

gulp.task(
    "watch-js-app",
    [
        "build-js-app"
    ],
    function()
    {
        source.js.app()
            .pipe(
                connect.reload()
            );
    }
);

gulp.task(
    "default",
    [
        "watch"
    ]
);
