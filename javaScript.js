// scroll header navbar
window.addEventListener("scroll", function(){
    var header = document.querySelector(".header-navbar");
    header.classList.toggle("scroll-js", window.scrollY > 250);

    var header = document.querySelector(".close");
    header.classList.toggle("open", window.scrollY > 250);
})

// hover information (information=thông tin)
// const images = document.querySelectorAll(".box-item");
// images.forEach((item) => item.addEventListener("mouseover", showhtml));
// function showhtml(event) {
//     console.log(event.target);
//     var boxElement = document.querySelector('.item-js');
    
//     boxElement.innerHTML = '<div class="information"><div class="item-information"><ul class="item-btn"><li><button class="btn"><i class="fa-solid fa-bookmark"></i></button></li><li><button class="btn"><i class="fa-solid fa-heart"></i></button></li></ul></div><a href="#" class="item-download"><i class="fa-solid fa-download"></i></a><a href="#" class="item-avt"><img src="https://images.pexels.com/users/avatars/1370585/faruk-tokluoglu-689.jpeg?auto=compress&fit=crop&h=40&w=40&dpr=1" alt="" class="avt-img"><p class="avt-name">Trương Quang Huy</p></a></div>'
// }

$(document).ready(function(){
    $('.slick-slider').slick({
        slidesToShow: 1,
        isFinite: true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 1500,
        draggable: false,
        dots: true,
    });
});
 