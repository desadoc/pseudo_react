
const id = require('id');

function _M_Header() {

  function Header() {
    this.id = 'header_' + id.new();
    this.message = "Hello, I'm an instance of Header.";
  };

  Header.prototype = {
    children: function() {
      return this.message;
    },
    render: function() {
      return '<h1 id="' + this.id + '">' + this.children() + '</h1>';
    },
    insert: function(parentSel) {
      $(parentSel).append(this.render());
    },
    update: function() {
      $('#' + this.id).html(this.children());
    }
  };

  return Header;
};

module.exports = _M_Header();
