userLogin.controller('LoginController', ['$scope', '$location', function ($scope, $location) {

   // alert("LoginController")
    $scope.Credentials = {
        UserName: '',
        Password: ''
    };

    $scope.Credentials.UserName = '';
    $scope.Credentials.Password = '';

    $scope.Login = function () {

        if ($scope.Credentials)
            $location.path('/User')
        //else
        //    alert("LoginController")
    }

}]);