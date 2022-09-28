
'use strict';

function configApplication($stateProvider) {
    $stateProvider
        //.state('main', { // all the below state will inherit from this state
        //    abstract: true, //Now you could simply create two states for this situation, with the complete urls, however then you would be writing /home/ twice
        //    url: '/main',
        //    //templateUrl: "views/common/_layout.html",
        //})
        .state('home.login', {
            url: "/Authentication",
            templateUrl: "/Authentication/views/Login.html",
        });
}


Home.config(configApplication)

