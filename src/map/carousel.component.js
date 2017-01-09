(function () {
    'use strict';
    angular.module('app')
        .component('carousel', {
            templateUrl: 'views/carousel.component.html',
            bindings: {
                gifs: '<'
            },
            controllerAs: 'vm',
            controller: function () {
                let vm = this;
            }
        });
})();