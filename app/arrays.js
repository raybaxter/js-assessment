if (typeof define !== 'function') { var define = require('amdefine')(module); }

function findAllOccurrences(array,test_item) {
  return(array.filter(function(array_item,index,arr) {
    return(array_item === test_item);        
  }));
};

define(function() {
  return {
    indexOf : function(array, item) {
      return(array.indexOf(item));
    },

    sum : function(array) {
      var total = 0;
      for(var i = 0; i< array.length; i++) {
        total += array[i];
      }
      return(total);
    },

    remove : function(array, item) {
      var index = array.indexOf(item);
      
      if(index === -1 ){
        return(array);
      }
      return(array.slice(0,index).concat(array.slice(index+1)));
    },

    append : function(array, item) {
      array.push(item);
      return(array);
    },

    truncate : function(array) {
      array.pop();
      return(array);
    },

    concat : function(array1, array2) {
      return(array1.concat(array2));
    },

    insert : function(array, item, index) {
      return(array.slice(0,index).concat([item]).concat(array.slice(index)));
    },

    count : function(array, test_item) {
      return(findAllOccurrences(array,test_item).length);
    },

    duplicates : function(array) {
      var new_array = [];
      
      for(var i=0; i< array.length; i++ ) {
        if(findAllOccurrences(array,array[i]).length > 1 && findAllOccurrences(new_array,array[i]).length === 0) {
          new_array.push(array[i]);
        }
      }
      return(new_array);
    },

    square : function(array) {
      for(var i=0; i<array.length;i++) {
        array[i] *= array[i];
      }
      return(array);
    },

    findAllOccurrences : function(array, target) {
      var found_indices = [];
      
      for(var i=0; i<array.length; i++) {
        if(array[i] === target) {
          found_indices.push(i);
        }
      }
      return(found_indices);
    }
  };
});
