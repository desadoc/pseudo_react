
const module = {
  set exports(moduleValue) {
    const scriptTag  = document.currentScript;
    const srcPattern =
      /^https?:\/{2}(?:[\w\d]+\.?)+(?::\d+)?\/([\/\w\d_]+)\.js/;
    const matches = scriptTag.src.match(srcPattern);

    if (matches.length != 2) {
      console.log('Invalid script src name "' + scriptTag.src + '".');
      return;
    }

    this.values[matches[1]] = moduleValue;
  },
  values: {}
};

const require = function(name) {
  return module.values[name];
};

function _M_PseudoReact() {

  function IdSequencer() {
    this.currId = 0;
  }
  IdSequencer.prototype = {
    next: function() { return ++this.currId; }
  };
  const id = new IdSequencer();

  function Component(props) {
    this.id = id.next();
    this.props = props;
  }
  Component.prototype = {
    setState: function(cb) {
      const self = this;
      this.state = cb(this.state);
      setTimeout(function() { self.update.call(self); }, 0);
    },
    update: function() {
      $(this.render()).replaceAll(`#${this.id}`);
      return this.componentDidRender && this.componentDidRender();
    },

  };

  function extend(SomeClass) {
    SomeClass.prototype = new Component();
    SomeClass.prototype.constructor = SomeClass;
    SomeClass.prototype.super = Component;
  }

  function render(SomeClass, parentEl) {
    const el = new SomeClass();
    parentEl.html(el.render());
    return el.componentDidRender && el.componentDidRender();
  }

  return {
    Component, render, extend
  };
};

// Pre-register core module.
module.values['PseudoReact'] = _M_PseudoReact();
