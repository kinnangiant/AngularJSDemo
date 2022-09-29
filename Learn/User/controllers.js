Home.controller('UserController', ['$scope', '$location', '$state', 'userservice', function ($scope, $location, $state, userservice) {

    $scope.UserDetail = [];
    $scope.UserDetail = userservice.getUsers();



    console.log(JSON.stringify($scope.UserDetail));

}]);
