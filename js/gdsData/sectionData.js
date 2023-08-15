// main sc2 special data
const sData = {
    "trend": {
        image : "<img src='./images/main/special/ban1.jpg' alt='트렌드 샌들'/>",
        tit: "TREND SANDAL",
        desc: "더운 여름엔 시원한 아이템",
    },
    "picnic": {
        image : "<img src='./images/main/special/ban2.jpg' alt='피크닉'/>",
        tit : "SUMMER PICNIC",
        desc : "청량함 가득한 싱그러운 일상",
    },
    "rain": {
        image : "<img src='./images/main/special/ban3.jpg' alt='장마'/>",
        tit : "IT'S RAINY DAY",
        desc : "올 여름 가장 완벽한 장마 준비",
    },
    "ootd": {
        image : "<img src='./images/main/special/ban4.jpg' alt='OOTD'/>",
        tit : "SUPPORTERS 아임슈페너",
        desc : "아임슈페너들의 OOTD",
    },
};

// main sc3 media data
const mData = [
    {
        thumbImg: "ban1.jpg",
        depth1: ["ban1.jpg","페이퍼 블렌디드 선캡","15900"],
        depth2: ["ban1.jpg","라탄 숄더백","29900"],
    },
    {
        thumbImg: "ban2.jpg",
        depth1: ["ban2.jpg","스윗버튼 메리제인","26900"],
        depth2: ["ban2.jpg","스퀘어 미디엄 숄더백 HPABGDA904","27900"],
    },
    {
        thumbImg: "ban3.jpg",
        depth1: ["ban3.jpg","모노 메리제인","37900"],
        depth2: ["ban3.jpg","모노 메리제인 1.0","37900"],
    },
    {
        thumbImg: "ban4.jpg",
        depth1: ["ban4.jpg","토캡 버클 메리제인 1.0","37900"],
        depth2: ["ban4.jpg","🌟뉴컬러🌟 바게트 숄더백","29900"],
    },
    {
        thumbImg: "ban5.jpg",
        depth1: ["ban5.jpg","3단 스트라이프 썸머 크로쉐햇","27900"],
        depth2: ["ban5.jpg","패턴 커버 슬라이드 1.0","19900"],
    },
    {
        thumbImg: "ban6.jpg",
        depth1: ["ban6.jpg","썸머 베이직 크로셰햇","19900"],
        depth2: ["ban6.jpg","[경량EVA] 솔리드 볼드 슬라이드","18900"],
    },
    {
        thumbImg: "ban7.jpg",
        depth1: ["ban7.jpg","경량EVA 논슬립 베이직 리커버리 쪼리","15900"],
        depth2: ["ban7.jpg","경량EVA 논슬립 베이직 리커버리 쪼리","15900"],
    },
    {
        thumbImg: "ban8.jpg",
        depth1: ["ban8.jpg","[경량EVA] 플로우 리커버리 클로그","25900"],
        depth2: ["ban8.jpg","[경량EVA] 플로우 리커버리 클로그","25900"],
    },
    {
        thumbImg: "ban9.jpg",
        depth1: ["ban9.jpg","[버블 폼폼] 링클 미니 호보백","22900"],
        depth2: ["ban9.jpg","오버솔 6CM 리프트 스니커즈","44900"],
    },
    {
        thumbImg: "ban10.jpg",
        depth1: ["ban10.jpg","캔버스 버킷백","29900"],
        depth2: ["ban10.jpg","캔버스 쇼퍼백","25900"],
    },
];

const mapData = [
    // 서울
    {
        msrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.2874780708453!2d127.0242945754061!3d37.50113732787629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca158f5f796c1%3A0x9f057c75dd5ba9!2z7IqI7Y6cIOygkO2UhOuwgOudvOuFuOygkA!5e0!3m2!1sko!2skr!4v1692079929612!5m2!1sko!2skr",
        mtit: "점프밀라노점",
        maddr: "서울특별시 강남구 강남대로 432 점프밀라노 강남점 지하1층",
        mtel: "02-6203-6881",
        mtime: "",
        mspot: "37.5012, 127.0266",
    },
    {
        msrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25312.605424353504!2d126.92973387910159!3d37.52971329999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca20314ab54b3%3A0xb0afd3680cac7939!2zU0tZIHBsdXN6b25lIOyaqeyCsOygkA!5e0!3m2!1sko!2skr!4v1692090951529!5m2!1sko!2skr",
        mtit: "아이파크몰 용산점",
        maddr: "서울시 용산구 한강대로23길 55 아이파크백화점 패션관 2층",
        mtel: "02-2012-3780",
        mtime: "(월~금)10:30~22:00 (토~일)10:30~22:00",
        mspot: "",
    },
    {
        msrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.25332473138!2d126.88364172540511!3d37.47834797918082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b61e04bd20333%3A0xb0f574aa2b9fb409!2z66eI66as7Jik7JWE7Jq466CbIDHqtIA!5e0!3m2!1sko!2skr!4v1692091021186!5m2!1sko!2skr",
        mtit: "마리오 아울렛 가산점",
        maddr: "서울특별시 금천구 벚꽃로 266 (가산동) 3관 2층",
        mtel: "02-2067-3846",
        mtime: "평일 10:30~21:00 -주말 10:30~21:30",
        mspot: "",
    },
    // 부산
    {
        msrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9352.262931555935!2d127.11473559940492!3d37.47633488289602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5f7c598d7e3%3A0x1e79bfacdf6a18e4!2z7IqI7Y6cIOyGoe2MjE5D7KCQ!5e0!3m2!1sko!2skr!4v1692091068249!5m2!1sko!2skr",
        mtit: "NC백화점 서면점",
        maddr: "부산광역시 부산진구 동천로 92 (전포동) NC백화점 서면점 1층",
        mtel: "051-794-7052",
        mtime: "(일~목)10:30~21:00 (금~토)10:30~22:00",
        mspot: "",
    },
    {
        msrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.9650174629005!2d129.0813860753015!3d35.232240854508554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356893588da4b20d%3A0x3b269d8293934617!2z7IqI7Y6cIOu2gOyCsOuMgOygkA!5e0!3m2!1sko!2skr!4v1692091121042!5m2!1sko!2skr",
        mtit: "NC백화점 부산대점",
        maddr: "부산광역시 금정구 장전동 40 NC백화점 부산대점 1층",
        mtel: "051-509-7035",
        mtime: "(일~목)10:30~21:00 (금~토)10:30~22:00",
        mspot: "",
    },
    {
        msrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.004306089158!2d128.9637580752959!3d35.10660336132659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568c3fccc23c6d1%3A0xeabd922658afb60d!2zQUJD66eI7Yq4IE1TIO2VmOuLqOyVhO2KuOuqsOungeygkA!5e0!3m2!1sko!2skr!4v1692091145728!5m2!1sko!2skr",
        mtit: "부산 아트몰링점",
        maddr: "부산광역시 사하구 낙동남로 1413 (하단동) 6층",
        mtel: "051-999-7399",
        mtime: "매일 10:00 - 22:00",
        mspot: "",
    },
    {
        msrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1645937.7153458237!2d126.83164338267865!3d36.31904536850033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35688dc2b2579861%3A0x73d569c2ffcc0489!2zTkPrsLHtmZTsoJAg7ZW07Jq064yA7KCQ!5e0!3m2!1sko!2skr!4v1692092422714!5m2!1sko!2skr",
        mtit: "NC백화점 해운대점",
        maddr: "부산광역시 해운대구 좌동 1467-4 NC백화점 해운대점 1층",
        mtel: "051-709-5572",
        mtime: "(일~목)10:30~21:00 (금~토)10:30~22:00",
        mspot: "",
    },
    // 인천
    {
        msrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.319966611286!2d126.68102927540167!3d37.40591143332308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b79e2c0292173%3A0x3b84e3d87726faf7!2z7IqI7Y6c7Jew7IiY7Iqk7YCY7Ja07KCQ!5e0!3m2!1sko!2skr!4v1692091188762!5m2!1sko!2skr",
        mtit: "스퀘어원 연수점",
        maddr: "인천광역시 연수구 청능대로 210 스퀘어원몰 2층",
        mtel: "032-456-4271",
        mtime: "(월~금)10:30~22:00 (토~일)10:30~22:00",
        mspot: "",
    },
    {
        msrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25341.574308777344!2d126.66573467910153!3d37.44426710000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7bd749068943%3A0xabf3dae33dba6002!2z64m07L2U7JWE7JWE7Jq466CbIOyduOyynOygkA!5e0!3m2!1sko!2skr!4v1692091214256!5m2!1sko!2skr",
        mtit: "비아니키즈 뉴코아아울렛 논현점",
        maddr: "인천광역시 남동구 청능대로 596 (논현동) 뉴코아아울렛 논현점 2층 ",
        mtel: "032-454-8315",
        mtime: "(일~목)10:30~21:00 (금~토)10:30~22:00",
        mspot: "",
    },
]

export {sData, mData, mapData};