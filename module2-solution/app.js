(function () {
'use strict';
var itemlist = [{ name: "Milk",quantity: "2"},{name: "Donuts",quantity: "200" },{name: "Cookies",quantity: "300"},{name: "Chocolate",quantity: "5"}, {name: "cake",quantity: "2"}];

angular.module('ShoppingListcheckoff', [])
.controller('Tobuy', Tobuy)
.controller('Alreadybought', Alreadybought)
.provider('ShoppingList', ShoppingListProvider)
.config(Config);

Config.$inject = ['ShoppingListProvider'];
function Config(ShoppingListProvider) {
  ShoppingListProvider.defaults.items = itemlist;
}
// controller1
Tobuy.$inject = ['ShoppingList'];
function Tobuy(ShoppingList)
{
   
    var list = this;

     try {
       list.items = ShoppingList.getItems();

        
    } catch (error) {
      list.errorMessage = error.message;  
    }

  list.addItem = function (itemIndex,it) {    
       try {
        ShoppingList.addItem(it.name, it.quantity, itemIndex);   
        } catch (error) {
          list.errorMessage = error.message;    
        }
  };
}
// controller2
Alreadybought.$inject = ['ShoppingList'];
function Alreadybought(ShoppingList)
{
     var list = this;
     list.items = ShoppingList.getItems2();
}
// If not specified, maxItems assumed unlimited
function ShoppingListService(Items) {
  var service = this;

  // List of shopping items
  var item = Items;
  var len = Object.keys(item).length;
  var item2 = [];

     service.addItem = function (itemName, quantity, itemIndex) {    
      var itemz = item[itemIndex];
      item2.push(itemz);
      item.splice(itemIndex, 1);

      if ( Object.keys(item2).length === len) {
     
        throw new Error("Everything is bought!");
      }
  };

  service.getItems = function () {
  {

  if ((item || []).length !== 0 ) 
  {
      return item;
  }
     
    };

  };

  service.getItems2 = function () {

        return item2;

    };
  }

function ShoppingListProvider() {
  var provider = this;

  provider.defaults = {
   
  };

  provider.$get = function () {
    var shoppingList = new ShoppingListService(provider.defaults.items);

    return shoppingList;
  };
}
})();
