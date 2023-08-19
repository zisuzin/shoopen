// 서브 페이지 뷰엑스 스토어 셋팅 JS  - store.js
import womenData from "./gdsData/womenData.js";
import menData from "./gdsData/menData.js";
import kidsData from "./gdsData/kidsData.js";

const store = new Vuex.Store({
  // (1) 데이터 셋팅구역:
  state: {
    // gnb 데이터셋업
    gnb: {
      "women": {
        items: womenData,
        subtit: ["신상", "베스트", "여성신발", "여성가방", "여성잡화"],
        dpt1: ["플랫슈즈", "샌들"],
        dpt2: ["백팩", "미니백"],
        dpt3: ["양말", "모자"],
        // 상품 카테고리 박스
        shoes: {
          "플랫슈즈": {
            size: ["225", "230", "235", "240", "245", "250", "255"],
            color: ["#fff^WHITE", "#feffef^IVORY", "#ebdcc5^BEIGE", "#f9ef69^YELLOW", "#603417^BROWN", "#a9a9a9^GRAY", "#8ca9a0^MINT"],
          },
          "샌들": {
            size: ["225", "230", "235", "240", "245", "250"],
            color: ["#fff^WHITE", "#feffef^IVORY", "#ebdcc5^BEIGE", "#603417^BROWN", "#000^BLACK", "#d46e25^ORANGE"],
          },
        },
        bag: {
          "백팩": {
            size: ["FREE"],
            color: ["#fff^WHITE", "#feffef^IVORY", "#e3c2c7^PINK", "#7d847a^KHAKI", "#000^BLACK"],
          },
          "미니백": {
            size: ["S", "M"],
            color: ["#fff^WHITE", "#feffef^IVORY", "#f9ef69^YELLOW", "#e3c2c7^PINK", "#e4cce9^PURPLE", "#264d4e^GREEN", "#7d847a^KHAKI", "#603417^BROWN", "#000^BLACK"],
          }
        },
        ac: {
          "양말": {
            size: ["S", "M", "L"],
            color: ["#fff^WHITE", "#ebdcc5^BEIGE", "#a9a9a9^GRAY", "#000^BLACK"]
          },
          "모자": {
            size: ["FREE"],
            color: ["#fff^WHITE", "#ebdcc5^BEIGE", "#f9ef69^YELLOW"]
          }
        }
      },
      "men": {
        items: menData,
        subtit: ["신상", "베스트", "남성신발", "남성가방", "남성잡화"],
        dpt1: ["스니커즈", "슬리퍼"],
        dpt2: ["맨즈백", "크로스백"],
        dpt3: ["양말", "모자"],
        // 상품 카테고리 박스  
        shoes: {
          "스니커즈": {
            size: ["230", "235", "240", "245", "250", "255", "260", "265", "270", "275", "280"],
            color: ["#fff^WHITE", "#feffef^IVORY", "#ebdcc5^BEIGE", "#e3c2c7^PINK", "#d0283a^RED", "#264d4e^GREEN", "#487bff^BLUE", "#a9a9a9^GRAY", "#000^BLACK"]
          },
          "슬리퍼": {
            size: ["250", "260", "270", "280"],
            color: ["#fff^WHITE", "#feffef^IVORY", "#ebdcc5^BEIGE", "#f9ef69^YELLOW", "#7dbbff^AQUA", "#000^BLACK"]
          },
        },
        bag: {
          "맨즈백": {
            size: ["FREE"],
            color: ["#feffef^IVORY", "#a9a9a9^GRAY", "#000^BLACK"] 
          },
          "크로스백": {
            size: ["FREE"],
            color: ["#ebdcc5^BEIGE", "#f9ef69^YELLOW", "#d0283a^RED", "#a9a9a9^GRAY", "#000^BLACK"] 
          }
        },
        ac: {
          "양말": {
            size: ["S", "M"],
            color: ["#fff^WHITE", "#feffef^IVORY", "#ebdcc5^BEIGE", "#487bff^BLUE", "#a9a9a9^GRAY", "#000^BLACK"]
          },
          "모자": {
            size: ["FREE"],
            color: ["#fff^WHITE", "#feffef^IVORY", "#ebdcc5^BEIGE", "#d46e25^ORANGE", "#487bff^BLUE", "#a9a9a9^GRAY"]
          }
        }
      },
      "kids": {
        items: kidsData,
        subtit: ["신상", "베스트", "아동신발", "아동가방", "아동잡화"],
        dpt1: ["구두", "샌들"],
        dpt2: ["슬리퍼가방", "패션가방"],
        dpt3: ["양말", "모자"],
        // 상품 카테고리 박스
        shoes: {
          "구두": {
            size: ["130", "140", "150", "160", "170", "180", "190", "200", "210", "220", "230"],
            color: ["#fff^WHITE", "#feffef^IVORY", "#f9ef69^YELLOW", "#e3c2c7^PINK", "#d0283a^RED", "#000^BLACK"]
          },
          "샌들": {
            size: ["130", "140", "150", "160", "170", "180", "190", "200", "210", "220"],
            color: ["#fff^WHITE", "#feffef^IVORY", "#f9ef69^YELLOW", "#603417^BROWN", "#e3c2c7^PINK", "#d0283a^RED", "#7dbbff^AQUA", "#487bff^BLUE", "#000^BLACK"]
          }
        },
        bag: {
          "슬리퍼가방": {
            size: ["M"],
            color: ["#e3c2c7^PINK"]
          },
          "패션가방": {
            size: ["S", "M"],
            color: ["#fff^WHITE", "#e3c2c7^PINK", "#e4cce9^PURPLE", "#000^BLACK"]
          }
        },
        ac: {
          "양말": {
            size: ["S", "M", "L"],
            color: ["#fff^WHITE", "#ebdcc5^BEIGE", "#e3c2c7^PINK", "#f9ef69^YELLOW", "#e4cce9^PURPLE", "#000^BLACK"]
          },
          "모자": {
            size: ["FREE"],
            color: ["#fff^WHITE", "#ebdcc5^BEIGE", "#e3c2c7^PINK", "#f9ef69^YELLOW", "#264d4e^GREEN", "#000^BLACK"]
          }
        }
      },
    }, ////// gnb //////

    //////////////////////////////

    // 대분류/중분류 변수
    setsubtit: "",
    setdpt1: "",
    setdpt2: "",
    setdpt3: "",

    // 현재 url 변수
    curUrl: "",
    curUrl0: "",
    curUrl1: "",
    curUrl2: "",
    // 서브페이지 출력 변수
    imgpath: {},
    setcat: "",

    // lnb 사용 변수
    setlnb: "",
    catnum: "",

    // 카테고리 옵션 변수
    pdlength: "",

    // 상세페이지 기본
    dtname: "",
    dtimg: "",
    dtoprice: "",
    dtdprice: "",
    dtcolor: "",
    dtsize: "",
    pickcolor: "",
    picksize: "",
    dtsumimg2: "",
    dtsumimg3: "",

    // 디테일페이지 계산에 쓰는 수량 state
    result: 1,

    // wish state
    wish: [],
    wishNum: [], // 셋팅값

    // useState
    callout: 0,
    // 전체 배열 변수
    combineArr: "", // 사이즈
    combineArr2: "", // 색상

    // 메인페이지 배열데이터 접근용 변수
    setNumber: "",
  }, ////// state 구역 /////
  
  // (2) 데이터 변경 메서드구역:
  mutations: {
    getLink(st,pm) {
      // 1. Get방식으로 넘어온 값 받기!
      st.curUrl = location.href;

      // 2. index페이지에선 작동 안하게하기
      if(st.curUrl.indexOf("?") === -1) return;

      // split(자를기준문자열) -> 배열에 담긴다!
      st.curUrl = st.curUrl.split("=")[1];
      st.curUrl0 = st.curUrl.split("&")[0];
      st.curUrl1 = st.curUrl.split("&")[1];
      st.curUrl2 = st.curUrl.split("&")[2];
      
      // // encodeURIComponent로 변환해서 보냈으므로 
      // // decodeURIComponent로 재변환!
      st.curUrl = decodeURIComponent(st.curUrl);
      st.curUrl0 = decodeURIComponent(st.curUrl0);
      st.curUrl1 = decodeURIComponent(st.curUrl1);
      st.curUrl2 = decodeURIComponent(st.curUrl2);
      
      // 소분류 메뉴출력을 위한 변수
      st.imgpath = st.gnb[st.curUrl0].items[st.curUrl1]
    },
    // new/best 상품 출력 함수
    chgList(st,pm) {
      // pm은 all, women, men, kids!
      store.state.setcat = pm;
    },
  }, ////// mutastions 구역 /////
}); ///////////// 뷰엑스 인스턴스 /////////////

export default store;
