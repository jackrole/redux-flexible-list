# precompile sass

**react-scripts not support for sass-loader now, we can do precompile by following scripts.**

        "scripts": {
            "dev-server": "node ./scripts/start.js && kill $WATCH_SASS_PID",
            "background-sass-watcher": "./node_modules/.bin/node-sass --watch --recursive src -o src & WATCH_SASS_PID=$!",
            "compile-sass": "./node_modules/.bin/node-sass --recursive src -o src",
            "start": "npm run compile-sass && npm run background-sass-watcher && npm run dev-server",
            "build": "npm run compile-sass && node ./scripts/build.js"
        },

The discussion about the sass-loader and the solution above are from [here](https://github.com/facebookincubator/create-react-app/issues/78)