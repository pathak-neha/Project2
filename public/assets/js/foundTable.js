// The code for populating the list of found items at the bottom of the found.html
$(document).ready(function () {

    $(document).on('submit', '#foundItemsEntry', submitFoundItem);

    function submitFoundItem(event) {
        // items to be added into the table
        var category = $('#category').val();
        var subcategory = $('#categorySelect').find(":selected").val();
        var size = $('#size').find(':selected').val();
        var color = $('#color').find(":selected").val();
        var location = $('textarea#location').val();
        var description = $('textarea#description').val();
        var claimed = false;
        var uid = localStorage.getItem('user_id')

        event.preventDefault();
        if (!category) {
            return;
        } else {
            obj = {
                category: category,
                subcategory: subcategory,
                size: size,
                color: color,
                location: location,
                description: description,
                claimed: claimed,
                UserId: uid
            }
            console.log(`Adding... ${JSON.stringify(obj)} to the Found Items table`)
            addNewItem(obj);
        }
    }

    function addNewItem(data) {
        $.ajax('/api/found', {
            type: 'POST',
            data: data
        }).then(function (res) {
            console.log('done')
            location.replace('/')
            location.replace('/browse-items')
        })
    }
})