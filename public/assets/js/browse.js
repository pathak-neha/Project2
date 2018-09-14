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

    var searchData = {
        category: $('#searchCategoryID').val(),
        color: $('#searchColorID').val(),
        size: $('#searchSizeID').val()
    };

    $.ajax("/browse-lost-items", {
        type: 'GET',
        data: searchData
    }).then(function() {
        // console.log("Querying Lost Items...")
    });
};

function queryFoundItems() {
    console.log($('#searchTableID').val());
    console.log($('#searchCategoryID').val());
    console.log($('#searchColorID').val());
    console.log($('#searchSizeID').val());

    var searchData = {
        category: $('#searchCategoryID').val(),
        color: $('#searchColorID').val(),
        size: $('#searchSizeID').val()
    };

    $.ajax("/browse-found-items", {
        type: 'GET',
        data: searchData
    }).then(function() {
        // console.log("Querying Lost Items...")
    });
};




});