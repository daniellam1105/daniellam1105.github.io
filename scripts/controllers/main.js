'use strict';

/**
 * @ngdoc function
 * @name test3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test3App
 */
angular.module('test3App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });



  function showDiv(idInfo) {
    var sel = document.getElementById('divLinks').getElementsByTagName('div');
    for (var i=0; i<sel.length; i++) {
      sel[i].style.display = 'none';
    }
    document.getElementById('container'+idInfo).style.display = 'block';
  }

  // $('#person').on('click', 'div.toggler', function(){
  //     $(this).next().toggle(350);
  // });
  //
  $('.linktorest').click(function(){
      $('#og_contain').hide();
  });
