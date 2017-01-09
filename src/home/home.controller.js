(function () {
    'use strict';
    angular.module('app')
        .controller('HomeController', HomeController);

    function HomeController(DataService) {
        let vm = this;
        vm.images = [];

        getImages();
        ////////////

        /**
         * Get markers from the charge points API (chargepoints.json)
         */
        function getImages(){
            let amount = 10;

            DataService.getRandomGif().then(img => {
                vm.images.push(img);
            });
            DataService.getRandomGif().then(img => {
                vm.images.push(img);
            });
            DataService.getRandomGif().then(img => {
                vm.images.push(img);
            });
        }
    }
})();
