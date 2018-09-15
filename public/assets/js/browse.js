$(document).ready(function() {



var searchData;

$('#searchBtn').on('click', function() {
    event.preventDefault();
    // window.location.href='http://localhost:8080/browse-lost-items-result';
    // setTimeout(displayResults, 1000);

    if ($('#searchTableID').val() == 'Lost Items') {
        queryLostItems();
    } else if ($('#searchTableID').val() == 'Found Items') {
        queryFoundItems();
    }
});

function displayResults() {
    window.location.href='http://localhost:8080/browse-lost-items-result';
}


function queryLostItems() {
    console.log('Table type: ' + $('#searchTableID').val());
    console.log('Category: ' + $('#searchCategoryID').val());
    console.log('Color: ' + $('#searchColorID').val());
    console.log('Size: ' + $('#searchSizeID').val());
    console.log('Subcategory ' + $('#categorySelect').val());

    // var categoryVar = $('#searchCategoryID').val()
    // var colorVar =  $('#searchColorID').val()
    // var sizeVar = $('#searchSizeID').val()
    // var subCategoryVar = $('#categorySelect').val()

    var searchObj = {
        category: $('#searchCategoryID').val(),
        subcategory: $('#categorySelect').val(),
        color: $('#searchColorID').val(),
        size: $('#searchSizeID').val()
    }
    console.log('searchObj: ' + JSON.stringify(searchObj));

    var switchExpression = '0';
    for (var property in searchObj) {
        if (searchObj[property] == 'Choose...') {
            switchExpression = switchExpression + property;
        }
    }
    console.log('Switch Expression: ' + switchExpression);

    switch(switchExpression) {
        case '0color': 
        console.log('Missing: color only');
        break;
        case '0size': 
        console.log('Missing: size only');
        break;
        case '0colorsize':
        console.log('Missing: Color and Size');
        break;
        case '0categorysubcategory':
        console.log('Missing: Category and Subcategory');
        break;
        case '0categorycolor':
        console.log('Missing: Categories, subcategories, color');
        break;
        case '0categorysubcategorycolor':
        console.log('Missing: Categories, subcategories, color');
        break;
        case '0categorysize':
        console.log('Missing: Categories, subcategories, color');
        break;
        case '0categorysubcategorysize':
        console.log('Missing: Categories, subcategories, size');
        break;
        case '0categorysubcategorycolorsize':
        console.log('All inputs are valid');
        break;
        case '0categorycolorsize':
        console.log('All inputs are valid');
        break;
    }


//     if (categoryVar == null && subCategoryVar == null && colorVar !== 'Choose...'  && sizeVar !== 'Choose...'){
//         console.log('Missing: Category and Subcategory only')
//         searchData = {
//             color: $('#searchColorID').val(),
//             size: $('#searchSizeID').val(),
//             // query: {
//                 // color: req.query.color, 
//                 // size: req.query.size
//             // } 
//         }
//     } else if (colorVar== 'Choose...' && categoryVar !== null  && sizeVar !== 'Choose...') {
//         console.log('Missing: Color only');
//         searchData = {
//             category: $('#searchCategoryID').val(),
//             size: $('#searchSizeID').val(),
//             // query: {
//             //     category: req.query.category, 
//             //     size: req.query.size
//             // } 
//         }
// } else if (sizeVar == 'Choose...' && categoryVar !== null  && colorVar !== 'Choose...') {
//     console.log('Missing: Size only');
//     searchData = {
//         category: $('#searchCategoryID').val(),
//         color: $('#searchColorID').val(),
//         // query: {
//         //     category: req.query.category, 
//         //     color: req.query.color
//         // } 
//     }
// } else if (categoryVar == null && colorVar == 'Choose...' && sizeVar !== 'Choose...') {
//     console.log('Missing: Category and Color');
//     searchData = {
//         size: $('#searchSizeID').val()
//         // query: {
//         //     sizeVar: req.query.size
//         // } 
//     }
// } else if (categoryVar == null && sizeVar == 'Choose...' && colorVar !== 'Choose...') {
//     console.log('Missing: Category and Size');
//     searchData = {
//         color: $('#searchColorID').val(),
//         // query: {
//         //     colorVar: req.query.color
//         // } 
//     }
// } else if (categoryVar !== null && sizeVar == 'Choose...' && colorVar == 'Choose...') {
//     console.log('Missing: Color and Size');
//     searchData = {
//         category: $('#searchCategoryID').val()
//         // query: {
//         //     category: req.query.category
//         // } 
//     }
// } else if (categoryVar !== null && sizeVar !== 'Choose...' && colorVar !== 'Choose...') {
//     console.log('All three inputs are valid');
//     searchData = {
//         category: $('#searchCategoryID').val(),
//         color: $('#searchColorID').val(),
//         size: $('#searchSizeID').val()
//         // query: {
//         //     category: req.query.category, 
//         //     color: req.query.color,
//         //     size: req.query.size
//         // } 
//     }
// }

    console.log("This is searchData: " + JSON.stringify(searchData));
    
    // $.ajax("/browse-lost-items", {
    //     type: 'GET',
    //     data: searchData
    // }).then(function(data) {
    // });
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
        
        // console.log("This is data: " + data);
        // $('#hbsContainer').append('browse-results', {lostItems: data});
        // console.log("Querying Lost Items...")
    });
};




});