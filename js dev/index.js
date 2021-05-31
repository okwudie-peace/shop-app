var shoppingItems = [
    // {
    //     item: "soap",
    //     quantity: 1,
    //     description: "for bathigng"
    // },
]



function addItem() { 
    var item = document.getElementById("value1").value;
    var quantity = document.getElementById("value2").value;
    var description = document.getElementById("value3").value;


    shoppingItems.push({item: item, quantity: quantity, description: description });

    displayshoppingItems();



    function displayshoppingItems() {
        var result = '';
          shoppingItems.forEach(function(shoppingItem) {
          result += '<div><h3>' + shoppingItem.item + '</h3><p class="text-right">' + shoppingItem.quantity + '</p></div>';
      });
      
      document.getElementById('container').innerHTML = result;
      
      }


    //   function removeItem(){

    //   }
      
    console.log(shoppingItem);
}