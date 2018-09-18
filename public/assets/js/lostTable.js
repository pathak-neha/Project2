// The code for populating the list of lost items at the bottom of the lost.html
$(document).ready(function () {

    $(document).on('submit', '#itemsEntry', submitLostItem);

    function submitLostItem(event) {
        // items to be added into the table
        var category = $('#category').val();
        var subcategory = $('#categorySelect').find(":selected").val();
        var size = $('#size').find(':selected').val();
        var color = $('#color').find(":selected").val();
        var location = $('#location').val();
        var description = $('#description').val();
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
            console.log(`Adding... ${JSON.stringify(obj)} to the Lost Items table`)
            addNewItem(obj);
        }
    }

    function addNewItem(data) {
        $.ajax('/api/lost', {
            type: 'POST',
            data: data
        }).then(function (res) {
            console.log('done')
            location.replace('/browse-items')
        })
    }
})