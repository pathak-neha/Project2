// The code for populating the list of lost items at the bottom of the lost.html
$(document).ready(function () {

    // items to be added into the table
    var email = $('#exampleFormControlInput1').val();
    var phone = $('#exampleFormControlInput2').val();
    var category = $('#category').val();
    var subcategory = $('.subcategory').val();
    var size = $('.size').val();
    var color = $('.color').val();
    var location = $('.location').val();
    var description = $('.description').val();
    var claimed = false;
    var uid = localStorage.getItem('user_id')

    $(document).on('submit', '#itemsEntry', submitLostItem);

    function submitLostItem(event) {
        event.preventDefault();
        console.log('hi')
        if (error) {
            throw err
        };
        if (!category) {
            return;
        } else {
            // Calling the upsertAuthor function and passing in the value of the name input
            obj = {
                email: email,
                phone: phone,
                category: category,
                subcategory: subcategory,
                size: size,
                color: color,
                location: location,
                description: description,
                claimed: claimed,
                UserId: uid
            }
            console.log(obj)
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
        })
    }
})