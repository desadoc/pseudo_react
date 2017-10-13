
function _M_App() {
  const PReact = require('PseudoReact');
  const Button = require('demo/Button');

  function App(props) {
    this.super.call(this, props);
    this.state = {
      counter: 1
    };

    this.onBtnClick = this.onBtnClick.bind(this);

    this.button = new Button({
      onClick: this.onBtnClick
    });
  }
  PReact.extend(App);

  App.prototype.render = function() {
    return `
      <div id="${this.id}">
        <h1>Counter: ${this.state.counter}</h1>
        ${this.button.render()}
      </div>`;
  };
  App.prototype.onBtnClick = function(evt) {
    this.setState.call(this, function(state) {
      return { counter: state.counter + 1 };
    });
  };
  App.prototype.componentDidRender = function() {
    this.button.componentDidRender();
  };

  return App;
};

module.exports = _M_App();
