Home.controller('UserController', ['$scope', '$location', '$state', 'userservice', function ($scope, $location, $state, userservice) {

    var SearchEmployee = {
        firstName: '',
        lastName: '',
        id:''
    };

    $scope.SearchEmployee = [];

    $scope.UserDetails = userservice.getUsers();

    $scope.init = function init() {
        $scope.UserDetails = userservice.getUsers();
    }

    $scope.deleteUser = function (id) {
        $scope.UserDetails = [];

        userservice.deleteUser(id);
        $scope.init();
    };

    $scope.SearchUser = function (SearchEmployee) {
        userservice.searchUser(SearchEmployee);
        $scope.init();
    }

    $scope.AddUser = function (SearchEmployee) {
        SearchEmployee.id = Object.keys($scope.UserDetails).length
        userservice.addUser(SearchEmployee);
        $scope.init();
    }

    $scope.UpdateUser = function (model) {
        userservice.updateUser(model);
        $scope.SearchEmployee = [];
        $scope.init();
    }

    $scope.reset = function () {
        userservice.reset();
        $scope.SearchEmployee = [];
        $scope.init();
    }

    $scope.SelectUser = function (userModel) {

        $scope.SearchEmployee = [];
        $scope.SearchEmployee.firstName = userModel.firstName;
        $scope.SearchEmployee.lastName = userModel.lastName;
        $scope.SearchEmployee.id = userModel.id;
    }


}]);
