
function _M_App() {
  const PReact = require('PseudoReact');

  function App(props) {
    this.state = {
      counter: 1
    };
    //this.render = this.render.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
    //this.componentDidRender = this.componentDidRender.bind(this);
  }
  App.prototype = new PReact.Component();
  App.prototype.constructor = App;
  //App.prototype.super = PReact.Component;

  App.prototype.render = function() {
    return `
      <div id="${this.id}">
        <h1>Counter: ${this.state.counter}</h1>
        <button id="${this.id}_btn" type="button">
          Click me!
        </button>
      </div>`;
  };
  App.prototype.onBtnClick = function(evt) {
    this.setState.call(this, function(state) {
      return { counter: state.counter + 1 };
    });
  };
  App.prototype.componentDidRender = function() {
    $(`#${this.id}_btn`).on('click', this.onBtnClick);
  };

  return App;
};

module.exports = _M_App();
