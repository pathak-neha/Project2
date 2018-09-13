// Connects to the Form for the found item (Using categories table)
$(document).ready(function(){
    $("#userNames").show();
    $("#itemsEntry").hide();
    $("#submitItems").hide();

$("#enterFoundItems").click(function(){
    event.preventDefault();
    $("#userNames").hide();
    $("#itemsEntry").show();
    $("#submitItems").show();
    
});
var subcategory = {
    Electronics: ['Mobile(apple)','Mobile(android)','laptop','tablet','earbuds/ headphones','computer accessories'],
    Wallet: ['Wallet only','Wallet with IDs','IDs only'],
    Clothing:['Shirt','Jacket','Pants','Skirt'],
    Accessories:['Shoes','Hat','Scarf','Mittens/ Gloves','Jewellery/ Watches','Bag/ Purse/ Case'],
    Documents:['Book','Notes'],
    Other:["Must be clarified in item description section"]
    };

    function makeSubmenu(value) {
    if(value.length==0) document.getElementById('categorySelect').innerHTML = '<option></option>';
    else {
    var categoryOptions = '';
    for(categoryId in subcategory[value]) {
        categoryOptions+='<option>'+subcategory[value][categoryId]+'</option>';
    }
    document.getElementById('categorySelect').innerHTML = categoryOptions;
    }
    }
   
    function resetSelection() {
    document.getElementById('category').selectedIndex = 0;
    document.getElementById('categorySelect').selectedIndex = 0;
    }



});