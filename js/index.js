//poster swiper
let posterswiper = new Swiper('.visual-poster-swiper1', {
    slidesPerView: 'auto',
    // loop: true,
    freeMode: true,
    loopedSlides: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    mousewheel: true,
});

//main swiper
const mainswiper = new Swiper('.main-visual-swiper', {
    // loop: true,
    loopedSlides: 5,
    effect: 'fade',
    // autoplay: {
    //     delay: 1000,
    //     disableOnInteraction: false,
    // },
    // thumbs: {
    //     swiper: posterswiper,
    // },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//edu swiper
const EduSwiper = new Swiper('.edu-swiper', {
    slidesPerView: 'auto',
    freeMode: true,
    mousewheel: true,
    observer: true,
    observeParents: true,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


// int swiper 영역
const interMain = new Swiper('.interview-min-swiper', {
    slidesPerView: 'auto',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const interSub = new Swiper('.interview-big-swiper', {
    effect: 'fade',
    thumbs: {
        swiper: interMain,
    }
});

//footer 영역
const footer = new Swiper('.distributor-swiper', {
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

//quick 영역

    //top 버튼 터치 시 페이지 상단
    function btnTop() {
    window.scrollTo({top:0, left:0 , behavior: 'smooth'})
}

    //+ 버튼 터치 영역
    function btnPlus() {
        let click = document.getElementById("hw");
        let plusimg = document.getElementById("plusimg");   

        if(click.style.display != "block") {
            click.style.display ="block";
            plusimg.setAttribute("src", "images/icon-delete.png");
        } else {
            click.style.display = "none";
            plusimg.setAttribute("src", "images/icon-plus-white.png");
        }

    }