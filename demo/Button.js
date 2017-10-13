
function _M_Button() {
  const PReact = require('PseudoReact');

  function Button(props) {
    this.super.call(this, props);
    this.state = {
      text: 'Click me!'
    };
    this.onClick = this.onClick.bind(this);
  }
  PReact.extend(Button);

  Button.prototype.render = function() {
    return `
      <button id="${this.id}" type="button">
        ${this.state.text}
      </button>`;
  };
  Button.prototype.onClick = function(evt) {
    this.setState.call(this, function(state) {
      return { text: 'Not again!' };
    });
    return this.props.onClick && this.props.onClick(evt);
  };
  Button.prototype.componentDidRender = function() {
    $(`#${this.id}`).on('click', this.onClick);
  };

  return Button;
}

module.exports = _M_Button();
