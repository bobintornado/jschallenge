'use strict';

/**
 * @ngdoc function
 * @name jschallengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jschallengeApp
 */
angular.module('jschallengeApp')

.controller('MainCtrl', function($scope, $http) {

  // Query for a booking in 1 day from now, for 2 hours.
  var start = Date.now() + 24 * 3600 * 1000;
  var end = start + 2 * 3600 * 1000;
  var url = 'http://jschallenge.smove.sg/provider/1/availability?book_start=' + start + '&book_end=' + end;

  

  $http.get(url).success(function(result) {
    console.log('Result from the API call:', result);
    console.log(result[0]);
  }).error(function(err) {
    // Hum, this is odd ... contact us...
    console.error(err);
  });


});