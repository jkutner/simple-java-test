(function () {
    'use strict';

    angular
        .module('simpleJavaTestApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
