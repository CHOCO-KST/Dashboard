$('.show-sidebar-btn').click(function(){
    $('.side-bar').toggleClass('sidebar-toggle')
    $('.sidebar-menu').toggleClass('animate__slideInLeft')
})

$('.sidebar-bg').click(function(){
    $('.side-bar').toggleClass('sidebar-toggle')
    $('.sidebar-menu').toggleClass('animate__slideInLeft')
})

$('.close-sidebar-btn').click(function(){
    $('.side-bar').toggleClass('sidebar-toggle')
    $('.sidebar-menu').toggleClass('animate__slideInLeft')  
})

function go(url){
    location.href = `${url}`;
}

const ma_mi_btn = document.getElementById('ma-mi-btn');

ma_mi_btn.addEventListener('click', function(){
    $('#card').toggleClass('max-display');
    $('#ma-mi-icon').toggleClass('feather-minimize-2').toggleClass('feather-maximize-2')
}) 

let screenHeight = $(window).height();
let currentMenuHeight = $('.nav .active').offset().top
if (currentMenuHeight > screenHeight * 0.8) {
    $(".sidebar-menu").animate({
        scrollTop:currentMenuHeight
    }, 1500)
}