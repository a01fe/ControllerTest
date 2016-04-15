//= wrapped

angular
    .module("controllertest.index")
    .factory("applicationDataFactory", applicationDataFactory);

function applicationDataFactory($http) {
    return {
        get: function() {
            return $http({method: "GET", url: "application/index"});
        }
    }
}

