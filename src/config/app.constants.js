(function () {
    'use strict';
    angular.module('app')
        .constant('API', {
            "endpoint": "http://api.giphy.com",
            "key": "dc6zaTOxFJmzC",
            "criteria_random": "/v1/gifs/random"
        });
})();
