(function(){
    'use strict'

    angular.module('public').
    controller('RegController',RegController);

    RegController.$inject=['MenuService','ApiPath'];
    function RegController(MenuService,ApiPath){
        var $ctrl = this;
        $ctrl.item = MenuService.get();
        $ctrl.show = false;
        $ctrl.path = ApiPath;
        console.log($ctrl.item);
        
        if ($ctrl.item===undefined){
            $ctrl.show=true;
            return;
        }
       var promise = MenuService.getShortName($ctrl.item.category);
       promise.then(function(res){
           $ctrl.details = res;
           console.log( $ctrl.details.category_short_name);
           
       }).catch(function(err){
           throw new Error('Error');
       })
       
       
        
    }
})();