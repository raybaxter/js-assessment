if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'use!underscore' ], function(_) {
  return {
    or : function(a, b) {
      return(a||b);
    },

    and : function(a, b) {
      return(a&&b);
    }
  };
});
