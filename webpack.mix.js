// webpack.mix.js
let mix = require('laravel-mix');

mix.css('styles/main.css', 'dist/')
.options({
    processCssUrls: false,
    postCss: [ 
        require("tailwindcss")("./tailwind.config.js")
    ],
});