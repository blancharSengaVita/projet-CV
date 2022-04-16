const mix = require('laravel-mix');

mix.ts('src/ts/Main.ts', 'js').sourceMaps()
    .sass('src/scss/main.scss', 'css').sourceMaps()
    .setPublicPath('dist').setResourceRoot('../')
    .browserSync({
        proxy: 'https://cv-projet.lndo.site/',
        open: false
    });