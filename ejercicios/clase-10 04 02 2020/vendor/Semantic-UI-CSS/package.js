var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-css',
  summary : 'Semantic UI - CSS Release of Semantic UI',
  version : '2.4.1',
  git     : 'git://github.com/Semantic-Org/Semantic-UI-CSS.git',
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');

  api.use('jquery', 'client');

  api.addFiles([
    // icons
    'themes/default/css/fonts/icons.eot',
    'themes/default/css/fonts/icons.svg',
    'themes/default/css/fonts/icons.ttf',
    'themes/default/css/fonts/icons.woff',
    'themes/default/css/fonts/icons.woff2',

    // flags
    'themes/default/css/images/flags.png',

    // release
    'semantic.css',
    'semantic.js'
  ], 'client');

});
