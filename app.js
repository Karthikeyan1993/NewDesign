(function () {
    console.log('hello World');
    'use strict';
    angular.module('mainApp', ['ngSanitize', 'ui.bootstrap']);
})();
(function () {
    function mainController() {
        var vm = this;
        vm.title = 'Hello World';
        vm.uiTabs = [];
        vm.uiTabs = [{ name: 'Policy',content:'tab1' }, { name: 'Proposer',content:'tab2' }, { name: 'Spouse',content:'tab3' }, { name: 'Children',content:'tab4' }, { name: 'Questionnaire',content:'tab5' }, { name: 'Premium',content:'tab6' }]

        activate();

        function activate() {
            eachTabs();
        }

        function eachTabs() {
            for (var i = 0; i < vm.uiTabs.length; i++) {
                console.log(vm.uiTabs[i].name);
            }
        };
    };
    angular.module('mainApp')
        .controller('mainCtrl', mainController);
})();