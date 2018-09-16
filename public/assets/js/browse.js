$(document).ready(function() {

$('#searchBtn').on('click', function() {
    event.preventDefault();
    setTimeout(displayResults, 1000);

    if ($('#searchTableID').val() == 'Lost Items') {
        queryLostItems();
    } else if ($('#searchTableID').val() == 'Found Items') {
        queryFoundItems();
    }
});

function displayResults() {
    window.location.href='http://localhost:7070/browse-lost-items-result';
}

function getSwitchExp(searchObj) {
    var switchExpression = '0';
    for (var property in searchObj) {
        if (searchObj[property] == 'Choose...') {
            switchExpression = switchExpression + property;
        }
    }
    console.log('Switch Expression: ' + switchExpression);
    getSearchValues(switchExpression);
};

    function getSearchValues(switchExpression) {
        switch (switchExpression) {
            case '0color':
                console.log('Missing: color only');
                var searchData = {
                    category: $('#searchCategoryID').val(),
                    subcategory: $('#categorySelect').val(),
                    size: $('#searchSizeID').val(),
                    claimed: 0
                };
                break;
            case '0size':
                console.log('Missing: size only');
                var searchData = {
                    category: $('#searchCategoryID').val(),
                    subcategory: $('#categorySelect').val(),
                    color: $('#searchColorID').val(),
                    claimed: 0
                };
                break;
            case '0colorsize':
                console.log('Missing: Color and Size');
                var searchData = {
                    category: $('#searchCategoryID').val(),
                    subcategory: $('#categorySelect').val(),
                    claimed: 0
                };
                break;
            case '0categorysubcategory':
                console.log('Missing: Category and Subcategory');
                var searchData = {
                    color: $('#searchColorID').val(),
                    size: $('#searchSizeID').val(),
                    claimed: 0
                };
                break;
            case '0categorycolor':
                console.log('Missing: Categories, subcategories, color');
                var searchData = {
                    size: $('#searchSizeID').val(),
                    claimed: 0
                };
                break;
            case '0categorysubcategorycolor':
                console.log('Missing: Categories, subcategories, color');
                var searchData = {
                    size: $('#searchSizeID').val(),
                    claimed: 0
                };
                break;
            case '0categorysize':
                console.log('Missing: Categories, subcategories, size');
                var searchData = {
                    color: $('#searchColorID').val(),
                    claimed: 0
                };
                break;
            case '0categorysubcategorysize':
                console.log('Missing: Categories, subcategories, size');
                var searchData = {
                    color: $('#searchColorID').val(),
                    claimed: 0
                };
                break;
            case '0categorysubcategorycolorsize':
                console.log('No user inputs. All data will appear.');
                var searchData = {
                    claimed: 0
                };
                break;
            case '0categorycolorsize':
                console.log('No user inputs. All data will appear');
                var searchData = {
                    claimed: 0
                };
                break;
            case '0':
                console.log('All inputs are valid');
                var searchData = {
                    category: $('#searchCategoryID').val(),
                    subcategory: $('#categorySelect').val(),
                    color: $('#searchColorID').val(),
                    size: $('#searchSizeID').val(),
                    claimed: 0
                };
                break;
        };
        sendAjaxCall(searchData);
    };

    function sendAjaxCall(searchData) {
        console.log("This is searchData: " + JSON.stringify(searchData));
        $.ajax("/browse-lost-items", {
            type: 'GET',
            data: searchData
        }).then(function(data) {
        });
    };

    function queryLostItems() {
        // Console.logged the values of the drop-downs to test
        console.log('Table type: ' + $('#searchTableID').val());
        console.log('Category: ' + $('#searchCategoryID').val());
        console.log('Color: ' + $('#searchColorID').val());
        console.log('Size: ' + $('#searchSizeID').val());
        console.log('Subcategory ' + $('#categorySelect').val());

        var searchObj = {
            category: $('#searchCategoryID').val(),
            subcategory: $('#categorySelect').val(),
            color: $('#searchColorID').val(),
            size: $('#searchSizeID').val()
        }
        console.log('The searchObj: ' + JSON.stringify(searchObj));
        getSwitchExp(searchObj);
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
        }).then(function () {

            // console.log("This is data: " + data);
            // $('#hbsContainer').append('browse-results', {lostItems: data});
            // console.log("Querying Lost Items...")
        });
    };




});