/**
 * Override at the last minute with global.filterSystemConfig (as plunkers do)
 */
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

  var _angularPackages = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic'
  ];

  // add package entries for angular packages in the form
  // '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  _angularPackages.forEach(function(pkgName) {
    _packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    // _packages[pkgName] = { main: 'index' };
  });

  var config = {
    map: _map,
    packages: _packages
  };

  System.config(config);

})(this);
