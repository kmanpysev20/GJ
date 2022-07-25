//main swiper
const MainSwiper = new Swiper('.visual-poster-swiper', {
    slidesPerView: 'auto',
    // loop: true,
    freeMode: true,
    loopedSlides: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    mousewheel: true,
});

//sub swiper
const SubSwiper = new Swiper('.main-visual-swiper', {
    // loop: true,
    loopedSlides: 5,
    effect: 'fade',
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    thumbs: {
        swiper: MainSwiper,
    },
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

