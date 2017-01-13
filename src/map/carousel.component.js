(function () {
    'use strict';
    angular.module('app')
        .component('carousel', {
            templateUrl: 'views/carousel.component.html',
            bindings: {
                slides: '<',
                onAdd: '&'
            },
            controllerAs: 'vm',
            controller: function () {
                let vm = this;
                vm.myInterval = 5000;
                vm.noWrapSlides = false;
                vm.active = 0;
            }
        });
})();