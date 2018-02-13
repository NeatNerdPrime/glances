'use strict';

export default function GlancesHelpController($http) {
    var vm = this;

    $http.get('api/2/help').then(function (response) {
        vm.help = response.data;
    });
}
