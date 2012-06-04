if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(arr) {
      return(arr[0]+", "+arr[1]+arr[2]);
    },

    speak : function(fn, obj) {
      return(fn.call(obj));
    },

    functionFunction : function(v_in) {
      var v1 = v_in;
      return(function(v2){
        return(v1+", "+v2);
      });
    },

    partial : function(fn,greeting,name) {
      return(function(punc) {
        return(fn(greeting,name,punc));
      });

    },

    useArguments : function() {
      var sum = 0;
      for (var i = 0; i < arguments.length; i++) {
          sum += arguments[i];
      }
      return sum;      
    },

    callIt : function() {
      var new_args = [];
      for(var i = 1; i<arguments.length; i++) {
        new_args.push(arguments[i])
      }
      return(arguments[0].apply(null,new_args));
    },

    curryIt : function(fn) {
      if (arguments.length < fn.length) {
        return fn(fn,arguments,this);
      };
      return fn(arguments);
    },

    makeClosures : function(array,doSomeStuff) {
      var funcs = new Array(array.length);
      
      for(var i=0; i<array.length; i++) {
        var local_value = array[i];
        alert("local_value in loop => " + local_value);

        funcs[i] = function() {
          alert("local_value in func => " + local_value);
          alert("final value" + doSomeStuff(local_value));
          return(doSomeStuff(local_value));
        };
      }
      return funcs;
    }
  };
});
