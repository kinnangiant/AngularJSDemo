Home.controller('UserController', ['$scope', '$location', '$state', 'userservice', function ($scope, $location, $state, userservice) {

    var SearchEmployee = {
        firstName: '',
        lastName: '',
        id:''
    };


    $scope.UserDetails = userservice.getUsers();

    //$scope.UserDetail = [];
    //init();

    $scope.init = function init() {
        $scope.UserDetails = userservice.getUsers();
    }

    
    //$scope.UserDetail = userservice.getUsers();

    //console.log(JSON.stringify($scope.UserDetail));

    //$scope.deleteuser = function (id) {
    //    alert(id);
    //    userservice.deleteUser(id);
    //    $scope.UserDetail = []
    //    $scope.UserDetail = userservice.getUsers();
    //}

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

        userservice.UpdateUser(model);
        $scope.init();
    }

    $scope.reset = function () {
        userservice.reset();
        $scope.init();
    }


    //$scope.init();

}]);
