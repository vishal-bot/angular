(function () {
    'use strict';
    angular.module('common')
    .controller('RegistrationController', RegistrationController)
 

    RegistrationController.$inject=['SignUpService','MenuService']
    function RegistrationController(SignUpService,MenuService) {
      var reg = this;
      reg.completed = false;
    
      /*
      var firstName = "";
      var lastName = "";
      var email = "";
      var favItem = "&";
      var phoneNumber = "";
      SignUpService.data["firstName"]=firstName;
      SignUpService.data["lastName"]=lastName;
      SignUpService.data["email"]=email;
      SignUpService.data["phoneNumber"]=phoneNumber;
      SignUpService.data["favItem"]=favItem;

     */

     //this is where thing are passed on for another viewState
      reg.submit = function () {
      reg.completed = true;

    

//reg item is what we are using to define the length of the object. if it is 0 then it doesn't exist
      MenuService.getMenuItem(reg.user.favitem).then(function(response){
          reg.item = response;
          console.log(reg.item)
          SignUpService.data = {};

          if(reg.item != "does not exist"){
            SignUpService.data["firstName"]=reg.user.firstname
            SignUpService.data["lastName"]= reg.user.lastname
            SignUpService.data["email"]=reg.user.email
            SignUpService.data["phoneNumber"]=reg.user.phone;
            SignUpService.data["favItem"]=reg.user.favitem
            SignUpService.data["signedUp"] = true;
          }
        
        
        
        })
      
 /*
      SignUpService.data["firstName"]=firstName;
      SignUpService.data["lastName"]=lastName;
      SignUpService.data["email"]=email;
      SignUpService.data["phoneNumber"]=phoneNumber;
      SignUpService.data["favItem"]=favItem;
*/
      };
    }
    
    })();


