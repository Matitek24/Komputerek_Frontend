AOS.init({
    once: true,
});

/* JQUERY */
function gora() {
    if ($(window).scrollTop() > 80) {
        $('#menu2').addClass('active');
        $('#menu').addClass('hide');
        $('nav ul').addClass('hide2');
        $('#resbar').removeClass('active');
        burger.src = "photo/burger-bar.png";
    } else {
        $('#menu2').removeClass('active');
        $('#menu').removeClass('hide');
        $('nav ul').removeClass('hide2');
        $('#resbar2').removeClass('active');
        burger2.src = "photo/burger-bar.png";
    }
}
setInterval(gora, 400);

function kolor() {
    if ($(window).scrollTop() > 850) {
        $('#menu2').addClass('active2');
    } else {
        $('#menu2').removeClass('active2');
    }
}
setInterval(kolor, 100);

function chowanie() {
    if ($(window).width() > 865) {
        $('#resbar2').removeClass('active');
        $('#resbar').removeClass('active');

    } else {
    }
}
setInterval(chowanie, 100);


$('#burger').click(function () {
    $('#resbar').toggleClass('active');
})

$('#burger2').click(function () {
    $('#resbar2').toggleClass('active');
})

/* JAVSCRIPT */
/* BURGER X */
let burger = document.querySelector("#burger")
let burger2 = document.querySelector("#burger2")

let zmien = 2
burger.addEventListener('click', () => {
    zmien++
    if (zmien % 2 == 0) {
        burger.src = "photo/burger-bar.png"
    }
    else {
        burger.src = "photo/burger-bar-x.png"
    }
})

let zmien2 = 2
burger2.addEventListener('click', () => {
    zmien2++
    if (zmien2 % 2 == 0) {
        burger2.src = "photo/burger-bar.png"
    }
    else {
        burger2.src = "photo/burger-bar-x.png"
    }
})
