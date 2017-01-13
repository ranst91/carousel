(function () {
    'use strict';
    angular.module('app')
        .controller('HomeController', HomeController);

    function HomeController(DataService) {
        let vm = this;
        vm.images = [];
        ////////////
        /**
         * Get markers from the charge points API (chargepoints.json)
         */
        vm.getImages = function () {
            if (vm.images > 10)
                return;
            DataService.getRandomGif().then(img => {
                vm.images.push(img);
            });
        };
        function initController() {
            vm.getImages();
        }
        initController();
    }
})();
