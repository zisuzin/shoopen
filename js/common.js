// 스토어 불러오기
import store from "./store.js";
// 페이지 데이터
import footData from "./tempData/footerComp.js";
import mainData from "./tempData/mainComp.js";
import dtData from "./tempData/DetailComp.js";
// 공통 데이터
import comData from "./tempData/comComp.js";
// 더미 데이터들
// 서브
import womenData from "./gdsData/womenData.js";
import menData from "./gdsData/menData.js";
import kidsData from "./gdsData/kidsData.js";
// 메인
import { mData, m_newData, m_bestData } from "./gdsData/mainData.js";
import prdData from "./gdsData/newbestData.js";

/************* 로컬스토리지 위시리스트 셋팅 *************/
// 위시리스트 배열 데이터
let wishData = [];
let opnum = [];

// 위시리스트 배열 새로고침 초기화 방지
const saveWish = localStorage.getItem("ws_item");
const saveNum = localStorage.getItem("ws_num");

if (saveWish) {
  // 카트에 상품이 있을 경우
  const parseWish = JSON.parse(saveWish);
  const parseNum = JSON.parse(saveNum);

  store.state.wish = parseWish;
  // console.log("로컬스 저장데이터",store.state.wish)
  wishData = parseWish;

  store.state.wishNum = parseNum;
  opnum = parseNum;
} else {
  // 없을 경우 최초 초기 셋팅
  localStorage.setItem("ws_item", JSON.stringify(wishData));
  localStorage.setItem("ws_num", JSON.stringify(opnum));
}
//////////////////////////////////////////////////

/************* 공통기능 함수 *************/
const crossMixin = {
  methods: {
    // 세자리 콤마찍기 함수
    setComma(val) {
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    // 배열 순번 셋업함수
    setNum(pm) {
      console.log(pm);
      return (store.state.setNumber = pm);
    },
    // 정가/할인가 비교해서 할인율 계산 함수
    setDiscount(oprice, dprice) {
      // 정가와 할인가 중 하나라도 빈값이면 빈값 반환
      if (!oprice || !dprice) {
        return "";
      }
      const discount = ((oprice - dprice) / oprice) * 100;
      return Math.floor(discount) + "%";
    },
    // url 읽어와서 카테고리마다 고유넘버 적용시키고 결과값으로 보내기
    dataNum() {
      let result = "";
      let cat = store.state.curUrl0;

      // 분기시키기
      switch (cat) {
        case (cat = "women"):
          result = "0";
          break;
        case (cat = "men"):
          result = "1";
          break;
        case (cat = "kids"):
          result = "2";
          break;
      }
      // 분기한 결과값 뱉어내기!
      return result;
    },
    // 카트 추가 메서드
    addWish(pm, cnt) {
      console.log("담긴 위시 아이템:", pm);
      let num = cnt; // 기본수량 - 1
      let imgData = pm["wsimg"] || pm["img"];
      let nameData = pm["name"];
      let priceData = pm["dprice"];

      let arr = [imgData, nameData, priceData];
      let arr2 = num;
      let getItem = localStorage.getItem("ws_item");
      // 중복데이터 선별 변수 (true/false)
      let isB = getItem.includes(arr[1]);
      console.log("중복여부검사:", isB);

      if (isB == true) {
        // console.log("중복");
        alert("이미 선택하신 상품입니다.");
        return;
      } else if (isB == false) {
        // console.log("추가")

        // 배열 추가
        wishData.push(arr);
        opnum.push(arr2);

        // 로컬스토리지 업데이트
        localStorage.setItem("ws_item", JSON.stringify(wishData));
        localStorage.setItem("ws_num", JSON.stringify(opnum));
        // state 업데이트
        store.state.wish = wishData;
        store.state.wishNum = opnum;
        store.state.callout = opnum.length;
      }

      // 값이 들어오면 콜아웃 나타남
      $(".callout").css({ display: "inline-block" });
    },
  },
};
//////////////////////////////////////////////////

/***************************************************** 
    뷰 컴포넌트로 데이터 셋업하기
*****************************************************/
// [1] 뷰컴포넌트 - 카테고리
Vue.component("category-comp", {
  template: `
    <ul class="catbx">
      <li>
        <a href="#" v-on:click.prevent="linkData('all', 'new')">NEW</a>
      </li>
      <li>
        <a href="#" v-on:click.prevent="linkData('all', 'best')">BEST</a>
      </li>
      <!-- sub-comp 출력되는 gnb -->
      <li class="tgGnb" v-for="(v,i) in $store.state.gnb" :key="i">
        <a href="#" v-on:click="chgData(i)">{{i.toUpperCase()}}</a>
      </li>
      <li>
        <a href="#" v-on:click.prevent="linkData('all', '기획전')">기획전</a>
      </li>
      <sub-comp></sub-comp>
    </ul>
  `,
  methods: {
    // v-on 클릭시 gnb sub-comp 데이터 변경 발생
    chgData(parm) {
      event.preventDefault();

      // gnb에서 파라미터 받아오기
      store.state.lnbsrc = parm;

      // [ 업데이트!! ]
      // dd박스
      store.state.setsubtit1 = store.state.gnb[parm].subtit[0];
      store.state.setsubtit2 = store.state.gnb[parm].subtit[1];
      store.state.setsubtit3 = store.state.gnb[parm].subtit[2];
      store.state.setsubtit4 = store.state.gnb[parm].subtit[3];
      store.state.setsubtit5 = store.state.gnb[parm].subtit[4];
      store.state.setdpt1 = store.state.gnb[parm].dpt1;
      store.state.setdpt2 = store.state.gnb[parm].dpt2;
      store.state.setdpt3 = store.state.gnb[parm].dpt3;
    },
    // new, best 클릭 전용 링크시스템
    linkData(pm1, pm2) {
      location.href = "prod.html?cat=" + pm1 + "&" + pm2;
    },
  },
}); //////////////////// Vue 컴포넌트 ///////////////////////

// [1-2] 뷰컴포넌트 - 카테고리 서브영역
Vue.component("sub-comp", {
  template: `
    <div class="subbx">
      <div class="all">
        <a href="#" v-text="$store.state.setsubtit1" v-on:click.prevent="linkData($store.state.lnbsrc, 'new')"></a>
        <a href="#" v-text="$store.state.setsubtit2" v-on:click.prevent="linkData($store.state.lnbsrc, 'best')"></a>
      </div>
      <dl class="sub">
        <dt class="all"><a href="#" v-text="$store.state.setsubtit3" v-on:click.prevent="linksys($store.state.lnbsrc, 'shoes', '전체')"></a></dt>
        <dd v-for="(v,n) in $store.state.setdpt1" :key="n" v-on:click.prevent="linksys($store.state.lnbsrc, 'shoes', v)"><a href="#">{{v}}</a></dd>
      </dl>
      <dl class="sub">
        <dt><a href="#" v-text="$store.state.setsubtit4" v-on:click.prevent="linksys($store.state.lnbsrc, 'bag', '전체')"></a></dt>
        <dd v-for="(v,n) in $store.state.setdpt2" :key="n" v-on:click.prevent="linksys($store.state.lnbsrc, 'bag', v)"><a href="#">{{v}}</a></dd>
      </dl>
      <dl class="sub">
        <dt><a href="#" v-text="$store.state.setsubtit5" v-on:click.prevent="linksys($store.state.lnbsrc, 'ac', '전체')"></a></dt>
        <dd v-for="(v,n) in $store.state.setdpt3" :key="n" v-on:click.prevent="linksys($store.state.lnbsrc, 'ac', v)"><a href="#">{{v}}</a></dd>
      </dl>
    </div>
  `,
  methods: {
    // gnb클릭시 링크시스템
    linksys(cat1, cat2, cat3) {
      location.href = "sub.html?cat=" + encodeURIComponent(cat1) + "&" + cat2 + "&" + encodeURIComponent(cat3);
    },
    // // new, best 클릭 전용 링크시스템!! (위랑 헷갈리지 말기!)
    linkData(pm1, pm2) {
      location.href = "prod.html?cat=" + pm1 + "&" + pm2;
    },
  },
}); //////////////////// Vue 컴포넌트 ///////////////////////

// [2] 뷰컴포넌트 서브페이지 상품
Vue.component("goods-comp", {
  template: `
      <div id="goodsComp">
        <div class="container">
          <div class="pagewrap" v-on="initSetSubSrc()">
            <!-- 상단영역 -->
              <div class="prd_top">
                <!-- 타이틀 -->
                <div class="cate_main_tit">
                  <h3 v-text="titSet().chgtit"></h3>
                  <span v-text="titSet().pm2"></span>
                  <!-- lnb 데이터 -->
                  <div class="catmenu">
                    <a href="#" v-on:click="setCatnum('전체')"><span>전체</span></a>
                    <a href="#" v-for="(v,n) in $store.state.setlnb" :key="n" v-on:click="setCatnum(v)"><span>{{v}}</span></a>
                  </div>
                </div>
              </div>
              <!-- 상품옵션 선택박스 -->
              <div class="prd-cat-option">
              <!-- 상품정렬 탭 -->
                  <ul class="option-left">
                      <li class="filter_option" v-on:click="sortList('catnum')">
                          <a href="#">신상품순</a>
                      </li>
                      <li class="filter_option" v-on:click="sortList('dprice')">
                          <a href="#">낮은가격순</a>
                      </li>
                      <li class="filter_option" v-on:click="sortList('dprice')">
                          <a href="#">높은가격순</a>
                      </li>
                      <li class="filter_option" v-on:click="sortList('review')">
                          <a href="#">상품평순</a>
                      </li>
                  </ul>
                  <div class="option-right">
                      <!-- 상품카운트 박스 -->
                      <div class="prd_count">
                          <p>
                          <strong>{{$store.state.pdlength}}</strong>
                          items
                          </p>
                      </div>
                  </div>
              </div>
              <!-- 상품리스트 박스 -->
              <div class="prdbx">
                <div class="prdwrap">
                    <!-- 상품리스트 -->
                      <ul class="ui-col4">
                        <template v-for="(v,i) in $store.state.imgpath">
                              <li v-for="(a,b) in v" v-if="$store.state.curUrl2 === i || $store.state.curUrl2 === '전체'" :key="a.name" v-on:mouseover="handleMouseOver" v-on:mouseleave="handleMouseLeave">
                                  <div class="ui-prod-bx">
                                      <a href="#">
                                          <div class="prod-detail-img">
                                              <img :src="'./images/goods/'+$store.state.curUrl0+'/'+a.img+'.jpg'" :alt="a.name">
                                          </div>
                                      </a>
                                      <div title="찜하기" class="product_like" v-on:click="addWish(a,1)">
                                          <button type="button" class="fa-solid fa-heart"></button>
                                      </div>
                                  </div>
                                  <div class="item-detail">
                                      <div class="prod_txt">
                                          <strong class="brand">슈펜</strong>
                                          <p>{{a.name}}</p>
                                      </div>
                                      <span class="original-price">
                                          <em>{{setComma(a.oprice)}}</em>
                                          <span v-if="a.oprice">원</span>
                                      </span>
                                      <br>
                                      <span class="discount-price">
                                          <em>{{setComma(a.dprice)}}</em>
                                          <span>원</span>
                                      </span>
                                      <span class="percent-price" v-if="a.oprice && a.dprice">
                                          <em>{{setDiscount(a.oprice,a.dprice)}}</em>
                                      </span>
                                      <div class="box_grade">
                                          <div class="star">
                                              <span v-if="a.review">{{'(' + a.review + ')'}}</span>
                                          </div>
                                      </div>
                                  </div>
                              </li>
                        </template>
                      </ul>
                  </div>
              </div>
          </div>
        </div>
        <!-- 여기부터 디테일페이지! -->
        <dt-comp></dt-comp>
      </div>
  `,
  data() {
    return {
      // 외부 더미 데이터들
      tgData: [womenData, menData, kidsData],
    };
  },
  created() {
    // 소분류 메뉴출력을 위한 변수
    store.state.imgpath = store.state.gnb[store.state.curUrl0].items[store.state.curUrl1];
  },
  mixins: [crossMixin],
  methods: {
    // 타이틀 셋팅
    titSet() {
      // left영역 상단타이틀 변경
      let mtit = $(".cate_main_tit > h3");
      let stit = $(".cate_main_tit > span");

      let pm = store.state.curUrl0;
      // 상단 메인타이틀 셋팅
      let chgtit = store.state.curUrl0.toUpperCase();
      // 상단 서브타이틀 셋팅
      let pm2 = store.state.curUrl1.toUpperCase();

      // 타이틀 출력!
      mtit.text(chgtit);
      stit.text(pm2);

      return { chgtit, pm2 };
    },
    getData(pm, idx) {
      // [ 스토어 전역변수에 업데이트! ]
      // 기본정보 데이터
      store.state.dtname = pm[store.state.curUrl2][idx]["name"];
      store.state.dtimg = pm[store.state.curUrl2][idx]["img"];
      store.state.dtoprice = pm[store.state.curUrl2][idx]["oprice"];
      store.state.dtdprice = pm[store.state.curUrl2][idx]["dprice"];
      store.state.dtcolor = pm[store.state.curUrl2][idx]["color"];
      store.state.dtsize = pm[store.state.curUrl2][idx]["size"];
      // 썸네일 데이터
      store.state.dtsumimg2 = pm[store.state.curUrl2][idx]["sumimg2"];
      store.state.dtsumimg3 = pm[store.state.curUrl2][idx]["sumimg3"];

      // 디테일박스 열기
      $(".dt-comp").css("display", "block");
    },
    // 정렬 기능 메서드
    sortList(pm) {
    },
    // 가격필터링 메서드
    moveSl() {
      const tgsl = document.querySelectorAll(".range_input > input");
      const priceInput = document.querySelectorAll("#filter_price_view > input");
      const progress = document.querySelector(".slider > .progress");

      let priceGap = 10;

      tgsl.forEach((ele) => {
        // 슬라이드 조작시 이벤트 발생
        ele.addEventListener("input", (e) => {
          let minVal = parseInt(tgsl[0].value);
          let maxVal = parseInt(tgsl[1].value);
          console.log(minVal, maxVal);

          if (maxVal - minVal < priceGap) {
            if (e.target.className === "input_min") {
              tgsl[0].value = maxVal - priceGap;
            } ////// if //////
            else {
              tgsl[1].value = minVal + priceGap;
            } ////// else //////
          } ////// if //////
          else {
            // 이동된 값 만큼 가격으로 출력!
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            // 프로그레스바 너비 변경
            progress.style.left = (minVal / tgsl[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / tgsl[1].max) * 100 + "%";
          } ////// else //////
        }); //////// input //////////
      }); ////// forEach ///////
    }, /////// moveSl ///////
    calcMoveSl() {
      $(event.currentTarget).keyup(function () {
        // 입력된 값
        let result = $(this).val();
        console.log(result);
      });
    },
    // 카테고리 '전체'인 경우 배열 합치기 메서드
    plusArr(pm) {
      store.state.catnum = pm;
      let newArr = [];
      let newArr2 = [];
      switch (pm) {
        case "전체":
          const val = store.state.gnb[store.state.curUrl0][store.state.curUrl1];
          // 객체 -> 배열로 변환하기
          const data = Object.values(val);
          // 1. 사이즈
          data.forEach((x) => {
            // 배열 합치기
            newArr = newArr.concat(x.size);
            // 오름차순 정렬
            const sortArr = newArr.sort((a, b) => a - b);
            // 중복값 제거
            const uniqueArr = [...new Set(sortArr)];
            // 스토어 보내기!
            store.state.combineArr = uniqueArr;
            // console.log(newArr)
            // uniqueArr.map((x,i)=>console.log(x,i))
          }); ////////// forEach /////////////

          // 2. 색상
          data.forEach((x) => {
            // 배열 합치기
            newArr2 = newArr2.concat(x.color);
            // 오름차순 정렬
            const sortArr2 = newArr2.sort((a, b) => a - b);
            // 중복값 제거
            const uniqueArr2 = [...new Set(sortArr2)];
            // 스토어 보내기!
            store.state.combineArr2 = uniqueArr2;
            // console.log(uniqueArr2)
            // uniqueArr2.map((x,i)=>console.log(x.split('^')[1]))
          }); ////////// forEach /////////////
          break;
      }
    },
    // lnb클릭시 v-if 조건값 설정하는 메서드
    setCatnum(num) {
      store.state.catnum = num;
      store.state.curUrl2 = num;

      this.plusArr(num);

      // 이벤트 버블링 막기
      $(".product_like").click(function (e) {
        e.stopPropagation();
      });

      // 상품 길이값 업데이트!
      this.pdLength();
    },
    // 서브페이지 최상위 경로 설정해주는 함수
    initSetSubSrc() {
      // 중분류 데이터값에 따라 lnb 데이터 변경!
      let catval = store.state.curUrl1;
      // 각 카테고리별 lnb 대분류 경로 설정
      switch (catval) {
        case "shoes":
          store.state.setlnb = store.state.gnb[store.state.curUrl0].dpt1;
          break;
        case "bag":
          store.state.setlnb = store.state.gnb[store.state.curUrl0].dpt2;
          break;
        case "ac":
          store.state.setlnb = store.state.gnb[store.state.curUrl0].dpt3;
          break;
      }
    },
    // 상품리스트 오버시 이미지src 변경
    handleMouseOver(event) {
      const tgImg = $(event.currentTarget).find("div > a > .prod-detail-img > img");
      const tgSrc = tgImg.attr("src");
      // 이미지src에 '_on' 없는 경우만 변경하기
      if (tgSrc.indexOf("_on") === -1) {
        const newSrc = tgSrc.split(".jpg")[0] + "_on.jpg";
        tgImg.attr("src", newSrc);
      }
    },
    // 상품리스트 리브시 기존 이미지로 변경
    handleMouseLeave(event) {
      const tgImg = $(event.currentTarget).find("div > a > .prod-detail-img > img");
      const tgSrc = tgImg.attr("src");
      const prevSrc = tgSrc.split("_on.jpg")[0] + ".jpg";
      tgImg.attr("src", prevSrc);
    },
    // 상품 갯수 카운트 함수
    pdLength() {
      this.$nextTick(() => {
        const length = $(".ui-col4 > li").length;
        store.state.pdlength = length;
      });
    },
  },
  mounted() {
    // 필터 버튼 클릭시 상품카테고리 선택박스 보이기
    $(".prd_filter_bx > button").click(function () {
      $(".filter_layer").css("display", "block");
    }); ///////// click ////////////

    // 상품카테고리 닫기버튼 클릭시 선택박스 닫힘
    $(".filter_layer > button").click(function () {
      $(this).parent().css("display", "none");
    }); ///////// click ////////////

    // 색상 선택 버튼 클릭시 클래스 on
    $(".filter_color > li").click(function () {
      $(this).toggleClass("on");
    }); ///////// click ////////////

    // 함수 호출!
    this.pdLength();
    this.moveSl();
  },
}); //////////////////// Vue 컴포넌트 ///////////////////////

// [5] 뷰컴포넌트 - new/best 상품리스트
Vue.component("prod-comp", {
  template: comData.prdComp,
  mixins: [crossMixin],
  data() {
    return {
      prdData: prdData,
      catTit: ["all", "women", "men", "kids"],
    };
  },
  mounted() {
    $(".prod_tab li").click(function () {
      // 클래스 on 일때 css 변경
      $(this).addClass("on").siblings().removeClass("on");
    });
  },
});

// [5] 뷰컴포넌트 - 상품디테일
Vue.component("dt-comp", {
  template: dtData.dtComp,
  mixins: [crossMixin],
  methods: {
    // 카테고리 보이기 메서드
    openCat() {
      const opt1 = $(".option_color");
      const opt2 = $(".option_size");
      // 클래스 유무로 컬러옵션 보이기/숨김
      opt1.toggleClass("on");
      opt1.is(".on") ? opt1.siblings().css("display", "block") : opt1.siblings().css("display", "none");

      opt1
        .siblings()
        .find("li")
        .click(function () {
          $(this).addClass("on").siblings().removeClass("on");
          const tgcolor = $(this).text();
          // li에 클래스 on 되면 부모박스 클래스 제거, 옵션창 닫음, 안내문구 텍스트 변경
          if ($(this).is(".on")) {
            $(".coloropt").css("display", "none") && opt1.removeClass("on") && $(".option_color > span").text(tgcolor);
          }

          // .coloropt li 클릭후 opt2 클릭시
          opt2.click(function () {
            opt2.toggleClass("on");
            opt2.is(".on") ? opt2.siblings().css("display", "block") : opt2.siblings().css("display", "none");
            opt2
              .siblings()
              .find("li")
              .click(function () {
                $(this).addClass("on").siblings().removeClass("on");
                const tgsize = $(this).text();

                if ($(this).is(".on")) {
                  $(".sizeopt").css("display", "none") &&
                    opt2.removeClass("on") &&
                    $(".option_color > span").text("색상 옵션을 선택해주세요.") &&
                    // 최종 결제 옵션/금액 박스 보이기
                    $(".dtfinal_bx").css("display", "block") &&
                    $(".dttot_bx").css("display", "block");
                  // 선택한 색상/사이즈값 스토어 보내기
                  store.state.picksize = tgsize;
                  store.state.pickcolor = tgcolor;
                }

                $(".opt_del").click(function () {
                  $(".dtfinal_bx").css("display", "none");
                  $(".dttot_bx").css("display", "none");
                });
              }); // opt2 옵션리스트 li click
          }); // op2t click
        }); // opt1 li click
    },
    // 더하기함수
    plusBtn() {
      let num = $(".opt_num input").val();
      num++;
      // 업데이트
      $(".opt_num input").val(num);
      store.state.result = num;
    },
    // 빼기함수
    minusBtn() {
      let num = $(".opt_num input").val();
      num--;
      if (num === 0) return;
      // 업데이트
      $(".opt_num input").val(num);
      store.state.result = num;
    },
    // 디테일페이지 닫기 메서드
    closeDetail() {
      // 상품 디테일박스 & 상품 옵션 박스 & 최종 결제가 박스 닫힘
      $(".dt-comp").css("display", "none");
      $(".dtfinal_bx").css("display", "none");
      $(".dttot_bx").css("display", "none");
      // 색상 선택후 바로 닫기버튼 클릭시 텍스트 초기화
      $(".option_color > span").text("색상 옵션을 선택해 주세요.");
    },
  }, ///////////// methods /////////////////
  mounted() {
    // 상품 상세페이지 스와이퍼 배너
    const swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });

    const swiper = new Swiper(".mySwiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper2,
      },
    });
  },
});

// [5] 뷰컴포넌트 - 사이드바
Vue.component("side-comp", {
  template: `
    <ul class="side">
        <!-- 3. 사이드영역 -->
        <li><a href="#" class="ico_mypage" @click="loginFn()"></a></li>
        <li><a href="#" class="ico_cart"></a></li>
        <li class="wishbtn" @click="wishFn()">
            <a href="#" class="ico_wish"></a>
            <div class="callout">{{$store.state.callout}}</div>
        </li>
    </ul>
    `,
  methods: {
    wishFn() {
      // 클릭시 창 열림
      $(".wish_comp").toggleClass("show").siblings().removeClass("show");
    },
    loginFn() {
      $(".user_comp").toggleClass("show").siblings().removeClass("show");
    },
  },
});

// [6] 뷰컴포넌트 - 위시리스트
Vue.component("wish-comp", {
  template: comData.wishComp,
  mixins: [crossMixin],
  methods: {
    delWish(tgNum) {
      console.log("삭제!!");

      // 로컬스 업데이트
      wishData.splice(tgNum, 1);
      opnum.splice(tgNum, 1);

      localStorage.setItem("ws_item", JSON.stringify(wishData));
      localStorage.setItem("ws_num", JSON.stringify(opnum));

      // state 업데이트
      store.state.wish = wishData;
      store.state.opnum = opnum;
      store.state.callout = opnum.length;

      if (store.state.callout === 0) $(".callout").css({ display: "none" });
    },
    wishClose() {
      $(".wish_comp").removeClass("show");
    },
    // 더하기 함수
    minusBtn(cnt) {
      let tg = event.currentTarget;
      let num = $(tg).siblings().eq(1).find("input").val();

      num--;

      // -값 방지
      if (num == 0) return;

      // 수량 업데이트
      $(tg).siblings().eq(1).find("input").val(num);
    },
    // 빼기 함수
    plusBtn(cnt) {
      let tg = event.currentTarget;
      let num = $(tg).siblings().eq(1).find("input").val();

      num++;

      // 수량 업데이트
      $(tg).siblings().eq(1).find("input").val(num);
      // store.state.cnt = cntUp.val();
    },
  },
}); //////////////////// Vue 컴포넌트 ///////////////////////

// [7] 뷰컴포넌트 - 로그인
Vue.component("user-comp", {
  template: comData.userComp,
  methods: {
    // 회원가입창 보이기 메서드
    signupFn() {
      // 클릭시 창 열림
      $(".signup_wrap").addClass("show");

      $(".btn_expand").click(function () {
        // 약관조항 버튼 클릭시 조항 보이기
        $(this).toggleClass("on");
        $(this).is(".on") ? $(".termsbx").css("display", "block") : $(".termsbx").css("display", "none");
      });
      $(".termsbx").click(function (e) {
        // 기본기능 막기
        e.preventDefault();
      });
      $(".signup_clbtn").click(function () {
        // 닫기버튼 클릭시 닫힘
        $(".signup_wrap").removeClass("show");
      });

      // 회원가입 컴포넌트 메서드 호출!
      this.$refs.signup.searchForm();
    },
  },
}); //////////////////// Vue 컴포넌트 ///////////////////////

// [7] 뷰컴포넌트 - 회원가입
Vue.component("signup-comp", {
  template: comData.signupComp,
  methods: {
    // 입력폼 유효성 검사
    searchForm() {
      $(`input[type=text], input[type=password]`).on("blur", function () {
        // 공백제거함수
        const groSpace = (cv) => cv.replace(/\s/g, "");
        // 검사용변수
        let pass;

        // 블러 이벤트 발생 요소
        let cid = $(this).attr("id");

        // 블러 이벤트 발생 요소 입력값 공백제거
        let cv = (cid = "signname" ? $(this).val().trim() : groSpace($(this).val()));
        console.log("블러!", cid, cv);

        // 이메일 관련 대상선정
        const eml1 = $("#email1");
        // 이메일 선택박스
        const seleml = $("#seleml");

        // 빈값 여부 검사
        if (cv === "") {
          // 경고메시지 나타남
          $(this).siblings(".msg").text("필수 정보입니다.").removeClass("on") && $(this).parent().siblings(".msg").text("필수 정보입니다.").removeClass("on");

          // 불통과!
          pass = false;
        }
        // 아이디 유효성 검사
        else if (cid === "signid") {
          console.log("아이디 검사결과:", vReg(cv, cid));
          if (!vReg(cv, cid)) {
            // 불통과일때 메시지
            $(this).siblings(".msg").text("영문자로 시작하는 6~20글자 영문자/숫자만 가능합니다.").removeClass("on") && $(this).parent().siblings(".msg").text("영문자로 시작하는 6~20글자 영문자/숫자만 가능합니다.").removeClass("on");

            // 불통과!
            pass = false;
          } //// if //////
          else {
            // 통과시
            // 1. DB에 아이디가 있는지 조회후 결과로 처리해야함!(보류)
            // 만약 아이디가 이미 있으면 "이미 사용중이거나 탈퇴한 아이디입니다."
            // 만약 아이디가 없으면 "멋진 아이디네요!"

            // 2. 메시지 띄우기
            $(this).siblings(".msg").text("멋진 아이디네요!").addClass("on") && $(this).parent().siblings(".msg").text("멋진 아이디네요!").addClass("on");
          } /// else ////
        } ///////////// else if : 아이디 검사시 ///////////

        // 비밀번호 유효성 검사
        else if (cid === "signpw") {
          console.log("비밀번호 검사결과:", vReg(cv, cid));
          if (!vReg(cv, cid)) {
            // 불통과일때 메시지
            $(this).siblings(".msg").text("특수문자,문자,숫자포함 형태의 5~15자리");

            // 불통과!
            pass = false;
          } //// if //////
          else {
            // 통과시
            // 메시지 지우기
            $(this).siblings(".msg").empty() && $(this).parent().siblings(".msg").empty();
          } /// else ////
        } ///////////// else if : 비밀번호 검사시 ///////////
        else if (cid === "email1") {
          // 1. 이메일 주소 만들기 : 앞주소@뒷주소
          let usereml = eml1.val() + "@" + seleml.val();

          // 이메일 검사함수 호출
          this.resEml(usereml);
        } ///////////// else if : 이메일 검사시 ///////////

        // 모두 통과일 경우 메시지 지우기
        else {
          $(this).siblings(".msg").empty() && $(this).parent().siblings(".msg").empty();
        } ///////////// else : 통과시 ////////////
      }); ////////////// blur ////////////////////////
    }, //////////// searchForm ////////////
  },
}); //////////////////// Vue 컴포넌트 ///////////////////////

// [9] 뷰컴포넌트 - 푸터
Vue.component("foot-comp", {
  template: footData.footarea,
}); //////////////////// Vue 컴포넌트 ///////////////////////

// [10] 뷰컴포넌트 - 메인 섹션2 베스트상품 컴포넌트
Vue.component("mb-comp", {
  template: mainData.bestarea,
  mixins: [crossMixin],
  data() {
    return {
      // 외부 더미 데이터
      m_bestData: m_bestData,
      notelnb: ["#1만원대 특가 신발", "#버킷햇", "#썸머 슈즈"],
    };
  },
  mounted() {
    // 첫번째 dd에 강제 클릭
    $(".mbtit2 > dd:first").addClass("on").siblings().removeClass("on").trigger("click");
    // 첫번째 dd 클릭시 데이터만 우선 보이기
    const index = $(".mbtit2 > dd:first").index();
    this.setNum(index);
    // 클릭한 dd에만 on 넣기
    $(".mbtit2 > dd").click(function () {
      $(this).addClass("on").siblings().removeClass("on");
    });
  },
}); //////////////////// Vue 컴포넌트 ///////////////////////

// [11] 뷰컴포넌트 - 메인 섹션3 미디어 컴포넌트
Vue.component("med-comp", {
  template: `
        <li class="swiper-slide">
            <a href="#">
                <!-- 썸네일 출력 영역 -->
                <div class="media_thumb">
                    <img v-bind:src="tumbimg" alt="대표썸네일"/>
                    <span class="mlogo">
                        <img src="./images/logo/logo_y.jpg" alt="sns계정명"/>
                        shoopen_official
                    </span>
                </div>
                <div class="media_depth">
                    <!-- 상품1 출력 영역 -->
                    <div class="prod1bx">
                        <div class="left_img">
                            <img v-bind:src="dpt1img" alt="상품이미지1"/>
                        </div>
                        <div class="right_txt">
                            <p>{{dpt1name}}</p>
                            <em>{{setComma(dpt1price)}}</em>
                        </div>
                    </div>
                    <!-- 상품2 출력 영역 -->
                    <div class="prod2bx">
                        <div class="left_img">
                            <img v-bind:src="dpt2img" alt="상품이미지2"/>
                        </div>
                        <div class="right_txt">
                            <p>{{dpt2name}}</p>
                            <em>{{setComma(dpt2price)}}</em>
                        </div>
                    </div>
                </div>
            </a>
        </li>
  `,
  mixins: [crossMixin],
  props: ["matchmedia", "dpt1val", "dpt2val"],
  data: function () {
    return {
      tumbimg: `./images/main/media/thumb/${this.matchmedia.thumbImg}`,
      dpt1img: `./images/main/media/depth1/${this.dpt1val[0]}`,
      dpt1name: this.dpt1val[1],
      dpt1price: this.dpt1val[2],
      dpt2img: `./images/main/media/depth2/${this.dpt2val[0]}`,
      dpt2name: this.dpt2val[1],
      dpt2price: this.dpt2val[2],
    };
  },
  mounted() {
    let banSwiper = new Swiper(".mSwiper3", {
      slidesPerView: 4,
      slidesPerGroup: 1,
    });
  },
});

// [11] 뷰컴포넌트 - 메인 섹션4 신제품 컴포넌트
Vue.component("mn-comp", {
  template: mainData.newarea,
  mixins: [crossMixin],
  data() {
    return {
      // 외부 더미데이터
      m_newData: m_newData,
      notelnb2: ["WOMEN", "MEN", "KIDS"],
    };
  },
  mounted() {
    // 첫번째 dd에 강제 클릭
    $(".mntit2 > dd:first").addClass("on").siblings().removeClass("on").trigger("click");
    // 첫번째 dd 클릭시 데이터만 우선 보이기
    const index = $(".mntit2 > dd:first").index();
    this.setNum(index);
    // 클릭한 dd에만 on 넣기
    $(".mntit2 > dd").click(function () {
      $(this).addClass("on").siblings().removeClass("on");
    });
  },
});

/********************************************* 
    뷰인스턴스 생성영역
*********************************************/

// [1] 뷰인스턴스 - 헤더
new Vue({
  el: "#top",
  store,
  created() {
    store.commit("getLink");
  },
  mounted() {
    // 클릭시 li에 클래스 on
    $(".catbx > .tgGnb").click(function (e) {
      // 기본기능막기
      e.preventDefault();
      $(this).addClass("on").siblings().removeClass("on");
      $(".top").addClass("on");
    }); ///////// click ////////////

    // 마우스아웃시 전체 클래스 빼기
    $("nav").mouseleave(function () {
      $(".top").removeClass("on");
      $(".catbx > .tgGnb").removeClass("on");
    }); ///////// mouseleave //////////

    // 위시 데이터 새로고침시 최초셋팅
    function initWishNum() {
      let getItem = JSON.parse(localStorage.getItem("ws_num"));

      // callout 최초 셋팅
      store.state.callout = getItem.length;
      if (store.state.callout == 0) {
        console.log("위시리스트 비었음");
        $(".callout").css({ display: "none" });
      }
    }
    // 위시데이터 셋팅 함수
    initWishNum();
  }, ////////// mounted ///////////
}); ////////////////// Vue 인스턴스 //////////////////////

// [2] 뷰인스턴스 - 서브메인
new Vue({
  el: "#cont",
  store,
  data: {
    // 메인 미디어섹션 데이터
    mData: mData,
  },
  mounted() {
    // lnb 메뉴 클릭시 클래스 on 추가/제거
    $(".catmenu > a").click(function (e) {
      e.preventDefault();
      $(this).addClass("on").siblings().removeClass("on");
      let menuTxt = $(this).text();

      // !!! URL 강제 변경하기
      // 변경이유 : SPA 변경시 전달변수 내용일치 -> 새로고침시 현재변경로딩!
      history.pushState(null, null, "sub.html?cat=" + store.state.curUrl0 + "&" + store.state.curUrl1 + "&" + menuTxt);
    }); ////////// click ///////////

    // 기본기능 막기함수
    $(".option-left > li > a").click(function (e) {
      e.preventDefault();
    });
    $(".ui-prod-bx > a").click(function (e) {
      e.preventDefault();
    });

    // 좋아요 버튼 클릭시 버튼 디자인 변경!
    this.$nextTick(() => {
      $(".product_like").click(function (e) {
        // 이벤트 버블링 막기
        e.stopPropagation();
        $(this).toggleClass("on");
      });
    });

    // 서브페이지 초기데이터 셋팅
    function initCatnum() {
      // lnb 텍스트 저장 변수
      const ary = $(".catmenu > a > span");
      const ary2 = $(".prod_tab li > a");

      // 각 변수에 셋팅하기
      ary.each(function (idx, ele) {
        // url 경로 일치할 경우 클릭이벤트 강제발생 / 클래스 on넣기/빼기
        if ($(ele).text() === store.state.curUrl2) {
          // 트리거 셋팅
          $(this).parent().trigger("click").addClass("on").siblings().removeClass("on");
        }
      });

      // 아래는 new/best 페이지 전용!
      ary2.each(function (idx, ele) {
        if ($(ele).text() === store.state.curUrl0.toUpperCase()) {
          // 트리거 셋팅
          $(this).parent().trigger("click").addClass("on").siblings().removeClass("on");
        }
      })
    } ////////////// initCatnum 함수 ////////////////

    // 최초호출!
    // lnb 클래스 on 함수
    initCatnum();
  }, ////////////// mounted ////////////////////
}); ////////////////// Vue 인스턴스 //////////////////////

// [3] 뷰인스턴스 - 푸터
new Vue({
  el: "#info",
  store,
  data: {},
}); ////////////////// Vue 인스턴스 //////////////////////
