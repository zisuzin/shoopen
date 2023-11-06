// 서브 - 디테일페이지
// 스와이퍼 함수
function dtSwiper() {
    const swiper2 = new Swiper('.mySwiper2', {
        spaceBetween: 10,
        slidesPerView: 3,
        resistanceRatio: 0, // 드래그시 저항 막기
    });

    new Swiper('.mySwiper1', {
        navigation: {
            nextEl: '.toRbtn',
            prevEl: '.toLbtn',
        },
        thumbs: {
            swiper: swiper2,
        },
        resistanceRatio: 0, // 드래그시 저항 막기
    });
} ////// swiperFn 함수 ///////

// 메인 - Best Pick, New Arrival 섹션
// 스와이퍼 함수
function PrdSwiper() {
    new Swiper('.btSwiper, .nwSwiper', {
        spaceBetween: 20,
        slidesPerView: 4,
        resistanceRatio: 0, // 드래그시 저항 막기
        breakpoints: {
            // when window width is >= 900px
            900: {
                slidesPerView: 4,
            },
            // when window width is >= 700px
            700: {
                slidesPerView: 3,
            },
            // when window width is >= 600px
            600: {
                slidesPerView: 2,
            },
            // when window width is >= 300px
            100: {
                slidesPerView: 1.5,
            }
        }
    });
}

export {dtSwiper, PrdSwiper};