$(document).ready(function () {
    $("#menuBar").click(function () {
        $("#introBanner img").toggleClass("img");
        $("#responsiveNavLinks").fadeToggle(200);
        $("#responsiveNavLinks").css("width", "100%")

        /*
            #The following line of code, deals with the MenuBar staying with the menu items.
        */
        if ($(this).attr('data-click-state') == 0) {
            $(this).attr('data-click-state', 1)
            $(this).css('position', 'absolute')
        } else {
            $(this).attr('data-click-state', 0)
            $(this).css('position', 'fixed')
        }

    })
})

/*The following code deals with the smooth scrolling up of the page when a link is clicked.*/
$("#d-aboutMeLink, #d-portfolioLink, #d-contactMeLink").click(function (e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({
        scrollTop: $(aid).offset().top
    }, 'slow');
});
$("#m-aboutMeLink, #m-portfolioLink, #m-contactMeLink").click(function (e) {
    e.preventDefault();
    //close mobile navbar when an option is clicked. 
    var aid = $(this).attr("href");
    $('html,body').animate({
        scrollTop: $(aid).offset().top
    }, 'slow');
    $(".nav ul").hide(); //fix 
});
