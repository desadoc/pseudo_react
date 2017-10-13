
function _M_id() {
  let currId = 0;
  return {
    new: function() { return ++currId; }
  };
};

module.exports = _M_id();
