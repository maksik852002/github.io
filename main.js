$( document ).ready(function() {
    $(window).on('load scroll', function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= 120) {
            $('section.mm-menu').addClass('gradiented');

        } else {
            $('section.mm-menu').removeClass('gradiented');

        }
    })
});

// window.addEventListener("load", function(){
//     addEventListener("scroll", function() {
//         var element = document.querySelector('section.mm-menu');
//         var scroll = window.pageYOffset;
//         if (scroll >= 110) {
//             element.classList.add('gradiented');
//         } else {
//             element.classList.remove('gradiented');
//         }
//     })
// });