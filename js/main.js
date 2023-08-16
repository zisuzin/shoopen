// 웹&앱 PJ 메인페이지 JS -main.js
import {mapData} from "./gdsData/mainData.js";

// 메인 대문배너 함수
function bannerSwiper() {
  // 스와이퍼 커스텀
  let banSwiper = new Swiper(".mSwiper", {
    slidesPerView: 1,
    slidesPerGroup: 1, 
    loop: true, 
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination", 
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next", 
        prevEl: ".swiper-button-prev", 
    },
    autoplay: {
        delay: 5000, 
        disableOnInteraction: false,
    },
  }); 
} // bannerSwiper

// 메인 section3 배너 함수
// function mediaCont() {
//     const mediaP = document.querySelector(".media_wrap ul");
//     let hcode = "";
//     for(let item in mData) {
//         hcode+= `
//             <li class="swiper-slide">
//             <a href="#">
//                 <!-- 썸네일 출력 영역 -->
//                 <div class="media_thumb">
//                     <img src="./images/main/media/thumb/${mData[item].thumbImg}" alt="sns썸네일"/>
//                     <span class="mlogo">
//                         <img src="./images/logo/logo_y.jpg" alt="sns계정명"/>
//                         shoopen_official
//                     </span>
//                 </div>
//                 <div class="media_depth">
//                     <!-- 상품1 출력 영역 -->
//                     <div class="prod1bx">
//                         <div class="left_img">
//                             <img src="./images/main/media/depth1/${mData[item].depth1[0]}" alt="상품이미지1"/>
//                         </div>
//                         <div class="right_txt">
//                             <p>${mData[item].depth1[1]}</p>
//                             <em>${mData[item].depth1[2]}</em>
//                         </div>
//                     </div>
//                     <!-- 상품2 출력 영역 -->
//                     <div class="prod2bx">
//                         <div class="left_img">
//                             <img src="./images/main/media/depth2/${mData[item].depth2[0]}" alt="상품이미지1"/>
//                         </div>
//                         <div class="right_txt">
//                             <p>${mData[item].depth2[1]}</p>
//                             <em>${mData[item].depth2[2]}</em>
//                         </div>
//                     </div>
//                 </div>
//             </a>
//         </li>
//         `

//         // 스와이퍼 커스텀 
//         let banSwiper = new Swiper(".mSwiper3", {
//             slidesPerView: 4,
//             slidesPerGroup: 1, 
//         });
//     };
//     mediaP.innerHTML = hcode;
// };

// 메인 section5 매장 검색 함수
function mapSearch() {
    $(".tabbx li").click(function() {
        // '지역검색' 클릭시 나타날 지역데이터
        const localData = ["서울", "부산", "인천"];
        const local1 = ["뒤로가기", "강남구", "용산구", "금천구"];
        const local2 = ["뒤로가기", "부산진구", "금정구", "사하구", "해운대구"];
        const local3 = ["뒤로가기", "연수구", "남동구"];

        $(this).addClass("check").siblings().removeClass("check").css({backgroundColor: "#000", color: "#fff"});
        if ($(this).is(".check")) {
            $(this).css({backgroundColor: "#fdd000", color: "#000"})
        }
        // 지역검색 li 클릭시
        $(this).is($(".tabbx li").eq(1)) ?
        $("#map_contents").css({display: "block", width: "100%", height: "calc(100% - 53px)", position: "absolute", background: "#fff", zIndex: "1"}) && renderLocal(localData): $("#map_contents").css("display", "none");

        // 대분류 지역 데이터 출력 함수
        function renderLocal(val) {
            const locals = $("#map_contents > .locals");
            locals.empty();

            val.forEach(x=> {
                locals.append(`<h3 class="loc_thumb">${x}</h3>`);
            });
            $(".loc_thumb").on("click", function(e) {
                clkTumb(e);
            });
        } /////// renderLocal 함수 ////////

        // 중분류 서울 데이터 출력 함수
        function renderSeoul() {
            renderLocal(local1);
            // 뒤로가기 텍스트
            const backtxt = $(".loc_thumb").eq(0);
            backtxt.on("click", clkBack);
        };

        // 중분류 부산 데이터 출력 함수
        function renderBusan() {
            renderLocal(local2);
            // 뒤로가기 텍스트
            const backtxt = $(".loc_thumb").eq(0);
            backtxt.on("click", clkBack);
        };

        // 중분류 인천 데이터 출력 함수
        function renderIncheon() {
            renderLocal(local3);
            // 뒤로가기 텍스트
            const backtxt = $(".loc_thumb").eq(0);
            backtxt.on("click", clkBack);
        };

        // 뒤로가기 버튼 이벤트 핸들러
        function clkBack() {
            renderLocal(localData);
            $(".loc_thumb").off("click");
            $(".loc_thumb").on("click", function(e) {
                clkTumb(e);
            });
        }

        // 중분류 지역 데이터 출력 함수
        function clkTumb(e) {
            const locName = $(e.currentTarget).text();
            console.log(locName)
            switch(locName) {
                case "서울": 
                    renderSeoul();
                    break;
                case "부산":
                    renderBusan();
                    break;
                case "인천": 
                    renderIncheon();
                    break;
            }

        }

    }); //////// click /////////


    // 첫번째 li에 강제클릭
    $(".tabbx li:first").trigger("click");

    const mapList = document.querySelector(".cont_inner");
    let hcode = "<ul>";
    for(let x in mapData) {
        hcode+= `
            <li>
                <div class="cont_tit">
                    <b>${mapData[x].mtit}</b>
                </div>
                <div class="cont_info">
                    <p>${mapData[x].maddr}</p>
                </div>
            </li>
        `
    }
    hcode+= "</ul>";
    mapList.innerHTML = hcode;

    $(".cont_inner li").click(function() {
        $(this).addClass("on").siblings().removeClass("on");
        // 클릭한 지점명
        const clkTxt = $(this).find($(".cont_tit > b")).text();
        mapData.forEach(ele => {
            // 클릭한 지점명과 데이터명이 같은 경우 변경
            if (ele.mtit === clkTxt) {
                $(".map_inner > iframe").attr("src", ele.msrc);
                $(".info_tit_bx > h3").text(ele.mtit)
                $(".info_tit_bx > p").first().text(ele.maddr)
                $(".info_tit_bx > p").last().text(ele.mtel)
            }
        });
    }); ////// click ///////
}; ////// mapSearch 함수 ///////


export {bannerSwiper, mapSearch};


