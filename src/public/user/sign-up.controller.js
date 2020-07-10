(function () {
    'use strict'
    angular.module('public').
    controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService'];

    function SignUpController(MenuService) {
        var $ctrl = this;
        $ctrl.firstName = '';
        $ctrl.lastName = '';
        $ctrl.email = '';
        $ctrl.phone = '';
        $ctrl.category = '';
        $ctrl.error = false;
        $ctrl.check = function () {
            var obj = {
                firstname: $ctrl.firstName,
                lastname: $ctrl.lastName,
                email: $ctrl.email,
                phone: $ctrl.phone,
                category: $ctrl.category
            };

            console.log(obj);
            

            MenuService.save(obj);
            var promise = MenuService.getShortName($ctrl.category);
            promise.then(function(res){
                window.alert('Registered')
                $ctrl.error=false;
            }).catch(function(err){
                $ctrl.error=true;
            });
        }

        // console.log($stateParams.category);
    }
})();