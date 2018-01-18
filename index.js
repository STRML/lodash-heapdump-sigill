function baseLodash() {}

var baseCreate = (function() {
  function object() {}
  return function(prototype) {
    var result = new object;
    object.prototype = undefined;
  };
}());

function createCtorWrapper(Ctor) {
  return function() {
    return baseCreate(Ctor.prototype);
  };
}

baseCreate(baseLodash.prototype);

setInterval(() => {}, 1000);

var heapdump = require('heapdump');
heapdump.writeSnapshot('./' + Date.now() + '.heapsnapshot');
