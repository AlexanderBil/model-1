$(document).ready(function () { // инициализация jquary
    $('.sliderbig').slick({ // включаем слайдер
        arrows: true, // стрелки
        fade: true, // заменяется исчезанием/перелистыванием
        dots: true, // точки
        adaptiveHeight: true, // подстраивает высоту слайда под картинку (slick-track - нужн одобавить свойство align-items:flex-start)
        speed: 500, // скорость пролистывания слайдов
        easing: 'easeOutBack', // тип анимации прокрутки
        infinite: true, // определение бесконечной прокрутки
        autoplay: false, // автоматическая прокрутка слайдов
        autoplaySpeed: 2000, // скорость автоматического пролистывания
        pauseOnFocus: false, // остановить слайдер при нажатии мыши
        pauseOnHover: false, // остановить слайдер при наведении мыши
        draggable: true, // запрещает слайдить мышкой
        swipe: true, // запрещает свайпать на тач скрине
        touchTreshold: 5, // расстояния просвайпивания пальцем для переключения
        touchMove: false, // позволяет/запрещает плавно перелистывать при зажатой картинке 
        waitForAnimate: true, // перелистываем слайдер не дожидаясь окончания анимации
    });
})

//===========================Slider №2================================

$(document).ready (function(){ // инициализация jquary
    $('.block-7-content-slider2').slick({          // включаем слайдер
        arrows:true,              // стрелки
        dots:false,                // точки
        adaptiveHeight:true,      // подстраивает высоту слайда под картинку (slick-track - нужн одобавить свойство align-items:flex-start)
        slidesToShow: 3,          // количество показуемых слайдов
        slidesToScroll: 1,        // количество прокручиваемых слайдов
        speed: 600,               // скорость пролистывания слайдов
        easing: 'easeOutBack',    // тип анимации прокрутки
        infinite:true,            // определение бесконечной прокрутки
        initialSlide: 0,          // номер стартового слайда
        autoplay: false,           // автоматическая прокрутка слайдов
        autoplaySpeed:3000,       // скорость автоматического пролистывания
        pauseOnFocus:false,       // остановить слайдер при нажатии мыши
        pauseOnHover:false,       // остановить слайдер при наведении мыши
        pauseOnDotsHover:false,   // остановить слайдер при наведении на точки
        draggable:true,          // запрещает слайдить мышкой
        swipe:true,               // запрещает свайпать на тач скрине
        touchTreshold:5,          // расстояния просвайпивания пальцем для переключения
        touchMove:true,           // позволяет/запрещает плавно перелистывать при зажатой картинке 
        waitForAnimate:true,      // перелистываем слайдер не дожидаясь окончания анимации
        centerMode:true,          // центральный слайд становиться по центру екрана
        variableWidth: true,      // позволяет определять ширину слайда
        responsive:[
               {
                breakpoint: 1000,
                settings:{
                    slidesToShow:2,
                    centerMode:false,          // центральный слайд становиться по центру екрана
                    variableWidth: false,      // позволяет определять ширину слайда
                }
            },{
                breakpoint: 767,
                settings:{
                    slidesToShow:2,
                    arrows:false,
                    centerMode:false,          // центральный слайд становиться по центру екрана
                    variableWidth: false,
                    dots:true,       
                  }
            },{
                breakpoint: 500,
                settings:{
                    slidesToShow:1,
                    arrows:false,
                    centerMode:false,          // центральный слайд становиться по центру екрана
                    variableWidth: false,
                    dots:true,       
                  }
            }
        ]
    });
})









//---------------Форма--------------------

// document.querySelector('.button-a').onclick = valid;

// function valid(form){
//     form = document.getElementById('formstart');
// let fail = false;
// let name = form.name.value;
// let email = form.email.value
// let regMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// if(name == '' || name == ' ')
// fail = 'Вы не ввели имя';

// else if (regMail.test(email) == false)
// fail = 'Вы ввели Email неправильно';

// if(fail){
//     alert(fail)
// }
// else
//     window.location = "http://google.com"; 

// }

//---------------Меню бургер------------------

document.querySelector('.burger-wrapper').onclick = togle;

function togle() {
    document.querySelector('.polosa').classList.toggle('polosa-active'); // анимация крестика
    document.querySelector('.mob-menu').classList.toggle('active'); // выдвижение меню
}

document.querySelector('.mob-menu').onclick = togle2; // для задвижения меню по клику на него и анимация крестика

function togle2() {
    let menu = document.querySelector('.mob-menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active')
    }
    document.querySelector('.polosa').classList.toggle('polosa-active');
}

//================Переключение 3-х картинок в блоке 3=======================

let mas = document.querySelectorAll('.block-3-img');

for (let i = 0; i < mas.length; i++) {

    mas[i].onclick = function () {
        if (i == 0) {
            mas[i].style.zIndex = 3;
            mas[1].style.zIndex = 2;
            mas[2].style.zIndex = 1;
        }
        if (i == 1) {
            mas[i].style.zIndex = 3;
            mas[0].style.zIndex = 2;
            mas[2].style.zIndex = 1;
        }
        if (i == 2) {
            mas[i].style.zIndex = 3;
            mas[1].style.zIndex = 2;
            mas[0].style.zIndex = 1;
        }
    }
}

//========================Select в блоке 4==============================

let im = document.querySelectorAll('.filter');

for (let i = 0; i < im.length; i++) {

    im[i].onclick = function () {
        let i = this.getAttribute('data-filter');

        //Переключаем класс active
        for (let j = 0; j < im.length; j++) {
            if (im[j].classList.contains('active')) {
                im[j].classList.remove('active')
            }
            this.classList.add('active')
        }

        //Переключение блоков        
        let img = document.querySelectorAll('.block-4-content-foto-box');
        for (let k = 0; k < img.length; k++) {

            if (i == 1) {
                img[k].style.display = 'block';
            } else {
                img[k].style.display = 'none';
                if (img[k].classList.contains(`f-${i}`)) {
                    img[k].style.display = 'block'
                }
            }
        }
    }
}

//============================Media Player==================================
$(document).ready(function() {
  $('video').mediaelementplayer({
    alwaysShowControls: true,
    videoVolume: 'horizontal',
    features: ['playpause','progress','volume','fullscreen']
    
  });
  
});
