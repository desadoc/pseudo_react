
const PReact = require('PseudoReact');
const App    = require('demo/App');

$(window).on('load', function() {
  PReact.render(App, $('#root'));
});
