'use strict';

angular.module('psJwtApp')
.controller('RegisterCtrl', function ($scope, alert, $auth) {
  $scope.submit = function () {
    $auth.signup({ 
      email:$scope.email, 
      password:$scope.password 
    })
      .then( function (res) {
        alert('success', 'Account Created!', ' Welcome, ' + res.data.user.email + '!');
        $auth.setToken(res.token);
      })
      .catch( function (err) {
        alert('warning', 'Something went wrong :( ', err.message);
      });
  }
});
