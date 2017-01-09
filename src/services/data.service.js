(function () {
    'use strict';
    angular.module('app')
        .service('DataService', DataService);

    function DataService($http, API) {
        let service = {
            getRandomGif: _getRandomGif,
        };
        return service;
        //////////////////

        /**
         * @name _getRandomGif
         * @desc Returnes a new lat-lng google maps object
         * @param {String} lat Latitude parameter
         * @param {String} lng Longitude parameter
         * @returns {Object} google maps lat-lng object
         */
        function _getRandomGif(){
            return $http({
                url: `${API.endpoint}${API.criteria_random}?api_key=${API.key}`,
                method: 'GET'
            }).then(res => {
                let images = res.data.data;
                return images.fixed_width_downsampled_url;
            });
        }
    }
})();
