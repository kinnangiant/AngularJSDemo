

Home.controller('HomeController', ['$scope', '$location', '$state', function ($scope, $location, $state) {
    alert('HomeController');

    $location.path("/Authentication");
    
}]);
