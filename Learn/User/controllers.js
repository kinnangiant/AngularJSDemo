Home.controller('UserController', ['$scope', '$location', '$state', 'userservice', function ($scope, $location, $state, userservice) {

    var SearchEmployee = {
        firstname: '',
        lastname : ''
    };


    $scope.UserDetail = [];
    $scope.UserDetail = userservice.getUsers();

    console.log(JSON.stringify($scope.UserDetail));

    $scope.deleteuser = function (id) {
        alert(id);
        userservice.deleteUser(id);
        $scope.UserDetail = []
        $scope.UserDetail = userservice.getUsers();
    }

    $scope.SearchUser = function (model) {
        userservice.searchUser(model.firstname,model.lastname);
    }

    $scope.AddUser = function (model) {
        //userservice.searchUser(model.firstname, model.lastname);
    }

    $scope.UpdateUser = function (model) {
        //userservice.searchUser(model.firstname, model.lastname);
    }

}]);
