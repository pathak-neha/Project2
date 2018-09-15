// Connects to the Form for the lost item (Using categories table)
$(document).ready(function () {
    loadUserInfo();
});

function loadUserInfo() {
    if (localStorage.session_token) {
        $('#firstName').val(localStorage.getItem("user_firstName"));
        $('#lastName').val(localStorage.getItem("user_lastName"));
        $('#exampleFormControlInput1').val(localStorage.getItem("user_email"));

        //$('#firstName').disabled();
        //document.getElementById("firstName").disabled = true;
    }
}

var subcategory = {
    Electronics: ['Mobile(apple)', 'Mobile(android)', 'laptop', 'tablet', 'earbuds/ headphones', 'computer accessories'],
    Wallet: ['Wallet only', 'Wallet with IDs', 'IDs only'],
    Clothing: ['Shirt', 'Jacket', 'Pants', 'Skirt'],
    Accessories: ['Shoes', 'Hat', 'Scarf', 'Mittens/ Gloves', 'Jewellery/ Watches', 'Bag/ Purse/ Case'],
    Documents: ['Book', 'Notes'],
    Other: ["Must be clarified in item description section"]
};

function makeSubmenu(value) {
  if (value.length == 0) document.getElementById('categorySelect').innerHTML = '<option></option>';
    else {
        var categoryOptions = '';
        for (categoryId in subcategory[value]) {
            categoryOptions += '<option>' + subcategory[value][categoryId] + '</option>';
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
};

