
const Header  = require('demo/Header');

$(window).on('load', function() {
  let h = new Header();
  h.insert('#root');
  h.update();

  setInterval(() => h.update(), 1000);
});
