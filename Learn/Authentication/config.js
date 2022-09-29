'use strict'

function configApplication($stateProvider) {
    $stateProvider
        .state('User', {
            url: "/User",
            templateUrl: "/User/views/User.html",
        })
}


userLogin.config(configApplication)


