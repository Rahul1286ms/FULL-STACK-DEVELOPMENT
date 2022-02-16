
//to check the todo
$('ul').on('click', 'li', function () {

    $(this).toggleClass('completed');
})

//to remove the todo
$('ul').on('click', 'span', function (event) {

    $(this).parent().fadeOut(800, function () {
        $(this).remove();
    })

    //to stop event bubbling
    event.stopPropagation();
})

//To add the todo
$('input[type="text"]').keypress(function (event) {
    if (event.which === 13) {
        const todoText = $(this).val();

        const todo = `<li><span><i class="fas fa-trash-alt"></i></span>${todoText}</li>`;

        $('ul').append(todo);
        $(this).val("");
    }
})

$('#plus').click(function () {
    $('input[type="text"]').fadeToggle();
})