/* global angular */

angular.module('ng-jiff',[])
  .factory('jiff', [jiff]);


function jiff() {
  return require('jiff');
}
