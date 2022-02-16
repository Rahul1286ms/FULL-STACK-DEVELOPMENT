//---------.fadeOut()---------------------
$('#fadeout').click(function () {
    $('div').fadeOut(600, function () {
        console.log("faded Out");
    });
})

//----------fadeToggle()-------------------
$('#fadetoggle').click(function () {
    $('div').fadeToggle(600, function () {
        console.log("fade toggle");
    });
})

//-------------fadeIn()---------------------
$('#fadein').click(function () {
    $('div').fadeIn(600, function () {
        console.log("faded In");
    });
})

//----------slideUp()-----------------
$('#slideup').click(function () {
    $('div').slideUp(600, function () {
        console.log("Faded Out");
    });
})

//---------slideDown()--------------
$('#slidedown').click(function () {
    $('div').slideDown(600, function () {
        console.log("Faded Out");
    });
})

//----------------slideToggle()-------------
$('#slidetoggle').click(function () {
    $('div').slideToggle(600, function () {
        console.log("Faded Out");
    });
})