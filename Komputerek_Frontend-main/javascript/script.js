AOS.init({
    once: true,
    delay: 50
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
let punkt1 = document.querySelector("#punkt1")
let infouslug1 = document.querySelector("#infouslug1")

punkt1.addEventListener('mouseover', () => {
    infouslug1.style = "clip-path: circle(70% at 50% 50%);"
})
punkt1.addEventListener('mouseout', () => {
    infouslug1.style = "clip-path: circle(0% at 50% 50%);"
})

/* -------------------------------------------- */
let punkt2 = document.querySelector("#punkt2")
let infouslug2 = document.querySelector("#infouslug2")

punkt2.addEventListener('mouseover', () => {
    infouslug2.style = "clip-path: circle(70% at 50% 50%);"
})
punkt2.addEventListener('mouseout', () => {
    infouslug2.style = "clip-path: circle(0% at 50% 50%);"
})

/* -------------------------------------------- */
let punkt3 = document.querySelector("#punkt3")
let infouslug3 = document.querySelector("#infouslug3")

punkt3.addEventListener('mouseover', () => {
    infouslug3.style = "clip-path: circle(70% at 50% 50%);"
})
punkt3.addEventListener('mouseout', () => {
    infouslug3.style = "clip-path: circle(0% at 50% 50%);"
})

/* -------------------------------------------- */
let punkt4 = document.querySelector("#punkt4")
let infouslug4 = document.querySelector("#infouslug4")

punkt4.addEventListener('mouseover', () => {
    infouslug4.style = "clip-path: circle(70% at 50% 50%);"
})
punkt4.addEventListener('mouseout', () => {
    infouslug4.style = "clip-path: circle(0% at 50% 50%);"
})

/* OPIS TRESCI -------------------------*/

let zajecia = document.querySelectorAll(".zajecia")
let zdjecie = document.querySelector("#zdjecie3")
let opistresci = document.querySelector("#opis-tresci")
let zdjecie4 = document.querySelector("#zdjecie4")

zajecia[0].addEventListener('click', () => {
    naglowek.innerHTML = "SERWIS"
    zdjecie.src = "photo/repair.png"
    opis.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in lectus sed quam finibus suscipit sit amet id orci. Integer sit amet ultricies enim. In ut massa non nisi vehicula interdum eu ac elit. Mauris commodo quis odio nec placerat. Morbi efficitur risus aliquet lorem suscipit, eu eleifend metus eleifend. Nulla id ipsum aliquam, cursus lorem condimentum, placerat lorem. Nunc suscipit dolor tortor, id porta purus sollicitudin eget. Nullam vel lorem purus. Curabitur elit risus, tristique et magna nec"
    setTimeout(() => {
        opistresci.style = "opacity: 1;"
    }, 100)
    opistresci.classList.add("active")
})
zajecia[1].addEventListener('click', () => {
    naglowek.innerHTML = "STRONY"
    zdjecie.src = "photo/webpage.png"
    opis.innerHTML = "Maecenas vitae felis id elit aliquet rutrum nec in libero. Aliquam tempus nulla quis velit condimentum mattis. Nam tincidunt ligula et leo imperdiet luctus a vitae urna. Etiam nec magna efficitur odio porta mattis. In rutrum rutrum velit, at sodales lorem rhoncus quis. Aliquam iaculis faucibus nunc, at venenatis enim dictum nec. Vestibulum vulputate vehicula justo, et vestibulum nisl aliquet nec. Fusce et condimentum justo, id posuere orci. Phasellus sed enim id nibh sollicitudin ultricies. Praesent eu diam risus."
    setTimeout(() => {
        opistresci.style = "opacity: 1;"
    }, 100)
    opistresci.classList.add("active")
})
zajecia[2].addEventListener('click', () => {
    naglowek.innerHTML = "KASY FISKALNE"
    zdjecie.src = "photo/cash.png"
    opis.innerHTML = "Aliquam consequat dui tellus, id luctus eros laoreet quis. Sed ac gravida orci. Nam et pellentesque odio. Aenean tempus lectus mauris, et vehicula metus placerat eget. Phasellus scelerisque enim risus, non tempus est cursus ut. Praesent nec fermentum quam. Aenean sodales eu massa sit amet imperdiet. Sed metus orci, euismod ac neque ut, auctor sodales quam. Curabitur id iaculis ipsum. "
    setTimeout(() => {
        opistresci.style = "opacity: 1;"
    }, 100)
    opistresci.classList.add("active")
})
zajecia[3].addEventListener('click', () => {
    naglowek.innerHTML = "BAZY DANYCH"
    zdjecie.src = "photo/data.png"
    opis.innerHTML = "Duis pretium lacus sed dolor eleifend aliquet. Nullam id fringilla tellus, varius tempor velit. Pellentesque scelerisque tortor vel dolor aliquet, ac laoreet mi luctus. In volutpat odio eu nibh scelerisque volutpat. Sed tristique purus non sem auctor suscipit et id augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi nec diam ante. In lorem lorem, accumsan tincidunt commodo vitae, molestie vel diam. Fusce consequat venenatis massa, vel tristique orci"
    setTimeout(() => {
        opistresci.style = "opacity: 1;"
    }, 100)
    opistresci.classList.add("active")
})
zdjecie4.addEventListener("click", () => {
    opistresci.style = "opacity: 0"
    setTimeout(() => {
        opistresci.classList.toggle("active")
    }, 600)
})

/* Oferty -------------------------*/

let guzik1 = document.querySelector("#guzik1")
let guzik2 = document.querySelector("#guzik2")
let guzik3 = document.querySelector("#guzik3")
let oferta1 = document.querySelector("#oferta1")
let oferta2 = document.querySelector("#oferta2")
let oferta3 = document.querySelector("#oferta3")
guzik1.addEventListener("click", () => {
    oferta1.classList.add("oferta2");
    guzik1.src = "photo/check-mark-white.png"

    if (oferta2.classList.contains("oferta2") == true) {
        oferta2.classList.remove("oferta2")
        oferta2.classList.add("oferta1")
        guzik2.src = "photo/check-mark.png"
    }
    else if (oferta3.classList.contains("oferta2") == true) {
        oferta3.classList.remove("oferta2")
        oferta3.classList.add("oferta1")
        guzik3.src = "photo/check-mark.png"
    }
})

guzik2.addEventListener("click", () => {
    oferta2.classList.add("oferta2");
    guzik2.src = "photo/check-mark-white.png"
    if (oferta1.classList.contains("oferta2") == true) {
        oferta1.classList.remove("oferta2")
        oferta1.classList.add("oferta1")
        guzik1.src = "photo/check-mark.png"
    }
    else if (oferta3.classList.contains("oferta2") == true) {
        oferta3.classList.remove("oferta2")
        oferta3.classList.add("oferta1")
        guzik3.src = "photo/check-mark.png"
    }
})

guzik3.addEventListener("click", () => {
    oferta3.classList.add("oferta2");
    guzik3.src = "photo/check-mark-white.png"
    if (oferta2.classList.contains("oferta2") == true) {
        oferta2.classList.remove("oferta2")
        oferta2.classList.add("oferta1")
        guzik2.src = "photo/check-mark.png"
    }
    else if (oferta1.classList.contains("oferta2") == true) {
        oferta1.classList.remove("oferta2")
        oferta1.classList.add("oferta1")
        guzik1.src = "photo/check-mark.png"
    }
})

function lap() {
    let wysokosc = window.scrollY > 4000
    console.log(wysokosc)
}

let licznikk = setInterval(function () {
    let wys = document.querySelector("#content").scrollHeight +
        document.querySelector("#tekst").scrollHeight +
        document.querySelector("#tresc").scrollHeight +
        document.querySelector("#flex-opis-tresci").scrollHeight +
        document.querySelector("#div2").scrollHeight +
        document.querySelector("#div3").scrollHeight +
        document.querySelector("#div4").scrollHeight +
        document.querySelector("#oferty").scrollHeight
    if (window.scrollY + ((window.innerHeight - 100) / 2) > wys) {
        let wartosc = document.querySelectorAll(".wartosc");
        wartosc.forEach((wartosc) => {
            let poczatek = 0;
            let koniec = parseInt(wartosc.getAttribute("value"));
            let czasinterwalu = Math.floor(4000 / koniec);
            let licznik = setInterval(function () {
                poczatek += 1;
                wartosc.textContent = poczatek;
                if (poczatek == koniec) {
                    clearInterval(licznik);
                }
            }, czasinterwalu);
        })
        clearInterval(licznikk)
    }
}, 1000)


