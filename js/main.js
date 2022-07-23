// create slide

let slideindex = 1;

function setslide(input, index) {
    slideindex = index;
    let item = document.querySelector(`#${input}`)
    let slide = [...document.querySelector('.slide').children];
    slide.forEach((element) => {
        element.classList.remove('active');
    })
    item.classList.add('active');
}

// auto next slide

setInterval(() => {
    slideindex += 1;
    if (slideindex == 4) {
        slideindex = 1;
    }
    setslide(`slide${slideindex}`, slideindex)
}, 3000);

//code time

let time = 86400;

function settime() {
    if (time == 0) return;
    let h = Math.floor(time / 3600);
    let m = Math.floor((time % 3600) / 60);
    let s = (time % 3600) % 60;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
}

setInterval(() => {
    time -= 1;
    settime()
}, 1000);

// search butuon

const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('input');

btn.addEventListener('click', function() {
    search.classList.toggle('active');
    input.focus()
})

// start code scrol

let thumbnail = document.getElementById('thumbnail');
let slider = document.getElementById('sliderrr');
let leftButton = document.getElementById('leftt-slide');
let rightButton = document.getElementById('rightt-slide');

leftButton.addEventListener('click', function() {
    slider.scrollLeft -= 125;
})

rightButton.addEventListener('click', function() {
    slider.scrollLeft += 125;
})

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;


function autoPlay() {
    if (slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1
    }
}
let play = setInterval(autoPlay, 50)

for (let i = 0; i < thumbnail.length; i++) {
    thumbnail[i].addEventListener('mouseover', () => {
        clearInterval(play)
    })
    thumbnail[i].addEventListener('mouseout', () => {
        return play = setInterval(autoPlay, 50);
    })
}

// start code sabt nam

const open = document.querySelector('#open');
const modalContainer = document.querySelector('.modal_container');
const close = document.querySelector('#close');

open.addEventListener('click', function() {
    modalContainer.classList.add('show');
})

close.addEventListener('click', function() {
    modalContainer.classList.remove('show')
})

// start code menue sabt nam

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
})


function checkInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setError(username, '* این فیلد نمیتواند خالی باشد نامی برای خود انتخاب کنید.')
    } else {
        setSuccess(username)
    }

    if (emailValue === '') {
        setError(email, '* مقدار ایمیل نمیتواند خالی باشد.')
    } else if (!isEmail(emailValue)) {
        setError(email, '* ایمیل وارد شده صحیح نیست.');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, '* مقدار پسوورد خالی است پسووردی وارد کنید.')
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, '* مقدار پسوورد خالی است پسووردی وارد کنید.');
    } else if (passwordValue !== password2Value) {
        setError(password2, '* پسووردها با هم برابر نیستند.')
    } else {
        setSuccess(password2);
    }

}


function setError(input, message) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('span');


    span.innerHTML = message;

    console.log(span)
    formControl.className = "form-control error"
}

function setSuccess(input) {
    const formControll = input.parentElement;
    formControll.className = "form-control success"
}


const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isEmail(email) {
    return pattern.test(email);
}