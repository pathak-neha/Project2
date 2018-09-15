// The code for populating the list of found items at the bottom of the found.html
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
        // Don't do anything if the name fields hasn't been filled out
        if (!category) {
            return;
        }
        // Calling the upsertAuthor function and passing in the value of the name input
        addNewItem({
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
        });
    }

    function addNewItem(data) {
        $.post("/api/lost", lost).then(function (res) {
            console.log("token: " + res.token)
            location.replace('/')
        })
    }
})