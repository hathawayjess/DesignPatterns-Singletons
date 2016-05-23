var mySingleton = ( function() {
  
  var instance = null;
  
  function initializeNewModule() {
    var cart = [];
    
    function addItem(item, cartNum) {
      cart.push({
        item: item,
        cartNum: cartNum
        
      });
    }
    
    function showItems() {
      return cart;
    }
    
    return {
      addItem: addItem,
      showItems: showItems
    };
    
  }
  
  function getInstance() {
    if( ! instance ) {
      instance = new initializeNewModule();
    }
    return instance;
  }
  
  return {
    getInstance : getInstance
  };
  
} )();


var cart1 = mySingleton.getInstance(); 
var cart2 = mySingleton.getInstance();

console.log(cart1 === cart2);
cart1.addItem('cheese');

cart2.showItems(); // ['cheese']
cart2.addItem('broccoli', 'cart2');
cart1.showItems();
cart1.addItem('milk', 'cart1');
cart2.showItems();