$(document).ready(function() {

var category;
var color;
var size;


$('#searchBtn').on('click', function() {
    event.preventDefault();

    if ($('#searchTableID').val() == 'Lost Items') {
        queryLostItems();
    } else if ($('#searchTableID').val() == 'Found Items') {
        queryFoundItems();
    }
});

function queryLostItems() {
    console.log($('#searchTableID').val());
    console.log($('#searchCategoryID').val());
    console.log($('#searchColorID').val());
    console.log($('#searchSizeID').val());

   
    category = $('#searchCategoryID').val(),
    color = $('#searchColorID').val(),
    size = $('#searchSizeID').val()
    

    // var searchData = {
    //     category = $('#searchCategoryID').val(),
    //     color = $('#searchColorID').val(),
    //     size = $('#searchSizeID').val()
    // };

    // $.ajax("/api/find-lost-items", {
    //     type: 'GET',
    //     data: searchData
    // }).then(function() {
    //     console.log("Querying Lost Items...")
    // });
    
    $.get('/browse-lost-items', function(data) { 
        category.val(data.category);
        color.val(data.color);
        size.val(data.size);
        console.log("Hi");

        if (err) throw err;
    });
};

function queryFoundItems() {
    console.log($('#searchTableID').val());
    console.log($('#searchCategoryID').val());
    console.log($('#searchColorID').val());
    console.log($('#searchSizeID').val());
    console.log("Bye");
};




});