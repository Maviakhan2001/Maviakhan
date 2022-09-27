let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle("open-menu"); 
    menu.classList.toggle("move");
};

window.onscroll = () => {
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
};


// Skill Sction js

const skillContent = document.getElementsByClassName('skill-content');
const skillHeader = document.querySelectorAll('.skill-header');

function toggleSkill () {
    let itemClass = this.parentNode.className;

    for(i = 0; i < skillContent.length; i++) {
        skillContent[i].className = 'skill-content skill-close';
    }

    if (itemClass === 'skill-content skill-close') {
        this.parentNode.className = 'skill-content skill-open'
    }
}

skillHeader.forEach((el) => {
    el.addEventListener('click', toggleSkill)
});

// Service section js

let modelViews = document.querySelectorAll('.services-model');
let modelBtns = document.querySelectorAll('.services-button');
let modelCloses = document.querySelectorAll('.services-model-close');

let model = function (modelClick){
    modelViews[modelClick].classList.add('active-model');
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => {
        model(i)
    })
})

modelCloses.forEach((modelClose) => {
    modelClose.addEventListener('click', () => {
        modelViews.forEach((modelView) => {
            modelView.classList.remove('active-model')
        })
    })
})

// carousel

var Swiper = new Swiper ('.project_container', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
});

// Email JS

function validate( ){
    let name = document.querySelector(".name");
    let email = document.querySelector(".email")
    let msg = document.querySelector(".message")
    let sendBtn = document.querySelector(".send-btn")

    sendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value)
            success();
        }
    });
}

validate();

function sendmail(name, email, msg) {
    emailjs.send("service_bkxh648","template_2wwfhu5",{
        from_name: email,
        to_name: name,
        message: msg,
    });
}

function emptyerror() {
    swal({
        title: "Oh No....",
        text: "Field cannot be empty!",
        icon: "error",
    });
}

function success() {
    swal({
        title: "Email sent successsfully",
        text: "We try to reply in 24 hours",
        icon: "success",
    });
}

// header background change on scroll

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});

// Scroll Top

let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});


// Javascript Animation

