(function () {
    'use strict';
    angular.module('app')
        .controller('HomeController', HomeController);

    function HomeController(DataService, toastr) {
        let vm = this;
        vm.images = [];
        ////////////
        /**
         * Get markers from the charge points API (chargepoints.json)
         */
        vm.getImages = function () {
            if (vm.images.length >= 10){
                toastr.error('No more then 10 slides are allowed');
                return;
            }
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
