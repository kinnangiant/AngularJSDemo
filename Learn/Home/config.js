
'use strict';

// Why cant i use the Home.Authentication

function configApplication($stateProvider) {
    $stateProvider
        .state('Authentication', {
            url: "/Authentication",
            templateUrl: "/Authentication/views/Login.html",
        });
}


Home.config(configApplication)

