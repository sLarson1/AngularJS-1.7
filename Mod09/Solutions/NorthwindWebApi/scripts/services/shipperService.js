(function () {
    "use strict";

    var app = angular.module('northwindApp');

    app.factory('shipperService', ['$http', '$resource',
        function ($http, $resource) {

        var shippers = $resource('/api/shippers/:id',
            {},
            {
                'update': { 'method': 'PUT' }
            });

        return {
            getShippers: function () {
                //return products;
                return shippers.query();
            },
            getShipper: function (shipperId) {
                return shippers.get({ id: shipperId });
            },
            addShipper: function (shipper) {
                return shippers.save({}, shipper);
            },
            updateShipper: function (shipperId, shipper) {
                return shippers.update({ id: shipperId }, shipper);
            },
            deleteShipper: function (shipperId) {
                return shippers.delete({ id: shipperId });
            }

        };
    }]);
})();
