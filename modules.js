
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
