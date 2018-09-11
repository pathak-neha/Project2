var subcategory = {
    Electronics: ['Mobile(apple)','Mobile(android)','laptop','tablet','earbuds/ headphones','watch','computer accessories'],
    Wallet: ['Wallet only','WallerPant','T-shirt'],
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
     // function displaySelected() {
        
    // var category = document.getElementById('category').value;
    // var item = document.getElementById('subCategory').value;
    // alert(category+'\n'+item);
    // }
    function resetSelection() {
    document.getElementById('category').selectedIndex = 0;
    document.getElementById('categorySelect').selectedIndex = 0;
    }