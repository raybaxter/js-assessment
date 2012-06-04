if (typeof define !== 'function') { var define = require('amdefine')(module); }
  
define(function() {
  var createMod = function(greeting, name) {
                    return {  greeting  : greeting,
                              name      : name,
                              sayIt     : function() { return(greeting + ", " + name); }
                            };
                  };
  return {
    createModule :  createMod
  };
});

