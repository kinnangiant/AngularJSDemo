userLogin.controller('LoginController', ['$scope', '$location', function ($scope, $location) {

    $scope.Credentials = {
        UserName: '',
        Password: ''
    };

    $scope.Credentials.UserName = '';
    $scope.Credentials.Password = '';

    $scope.Login = function () {

        //console.log($scope.Credentials.UserName);
        //console.log($location.path());

        if (!$scope.Credentials)
            $location.path('/views/User')
        else
            alert("hello")
    }

}]);