//This is just an image fallback (in order to avoid real image uploading)	
//I assumed that this is not in the scope of the assignment
angular.module("users").directive('checkImage', function() {
   return {
      link: function(scope, element, attrs) {
         element.bind('error', function() {
            element.attr('src', 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3');
         });
       }
   }
});