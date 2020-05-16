(function () {
    angular.module('common')
    .controller('InfoController', InfoController)
    
    InfoController.$inject=['SignUpService','ApiPath','$http']
    function InfoController(SignUpService ,ApiPath,$http) {
      var $ctrl = this;
      $ctrl.data = SignUpService.data
      
      console.log($ctrl.data)

      function getItemData(item){
        return $http.get(ApiPath + '/menu_items/'+item+'.json/').then(function (response) {
          $ctrl.menuItem= response.data;
        });
      }

    
      if($ctrl.data != undefined){
      $ctrl.menuItem = getItemData($ctrl.data["favItem"])
      }
  

   

  
    
     
    }
    
    })();