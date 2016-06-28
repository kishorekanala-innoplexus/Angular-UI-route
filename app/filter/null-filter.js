angular.module('fil').filter('checknull',function() {
    return function(input) {
      return (input==="") ? 'Not Applicable' : input ;
    };
  });

