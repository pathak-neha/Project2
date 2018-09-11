// Connects to the Form for the found item (Using categories table)

var subcategory = {
    Mobile: ['Apple','Samsung','HTC'],
    Clothes: ['Shirt','Pant','T-shirt'],
    Case:['Wallet','Purse','Bagpack'],
    Laptop:['Dell','Acer','Mac','Asus'],
    Jewelery:['Earing','Bracelet','Watches']
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