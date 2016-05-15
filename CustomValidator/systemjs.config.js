(function(global) {

    // map tells the System loader where to look for things
    var _map = {
        'app': 'app', // 'dist',
        'rxjs': 'node_modules/rxjs',
        '@angular': 'node_modules/@angular'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var _packages = {
        'app': { main: 'main.js',  defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' }
    };

    var _defaultPackages = [
        '@angular/core',
        '@angular/common',
        '@angular/compiler',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        'rxjs'
    ];

    _defaultPackages.forEach(function (item) {
        // Angular's Default Packages are always using `index` as an entry point.
        _packages[item] = { main: 'index' };
    });

    var config = {
        map: _map,
        packages: _packages
    };

    System.config(config);

})(this);
