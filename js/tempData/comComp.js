const comData = {
    /* 1. new/best 아이템 */
    prdComp: `
        <div class="new_inner">
            <h2>{{$store.state.curUrl1.toUpperCase()}}</h2>
            <div class="new_items">
              <div class="prod_tab">
                <ul>
                  <li v-for="(v,i) in catTit" :key="i" @click="$store.commit('chgList', v)">
                    <a href="#">{{v.toUpperCase()}}</a>
                  </li>
                </ul>
              </div>
              <div class="prod_cont">
                <ul>
                  <template v-for="(v,i) in prdData[$store.state.curUrl1]">
                      <li v-for="(x,y) in v" :key="x.name" v-if="$store.state.setcat === i || $store.state.setcat === 'all'">
                        <div class="prodbx">
                            <a href="#">
                                <div class="prod_img">
                                    <img :src="'./images/goods/'+x.img+'.jpg'" alt="x.name">
                                </div>
                            </a>
                            <div title="찜하기" class="product_like" v-on:click="addWish(x,1)">
                                <button type="button" class="fa-solid fa-heart"></button>
                            </div>
                        </div>
                        <div class="prod-detail">
                            <div class="prod_txt">
                                <strong class="brand">슈펜</strong>
                                <p>{{x.name}}</p>
                            </div>
                            <div class="pricebx">
                                <span class="original-price">
                                    <em>{{setComma(x.oprice)}}</em>
                                    <span v-if="x.oprice">원</span>
                                </span>
                                <br>
                                <span class="discount-price">
                                    <em>{{setComma(x.dprice)}}</em>
                                    <span>원</span>
                                </span>
                                <span class="percent-price" v-if="x.oprice && x.dprice">
                                    <em>{{setDiscount(x.oprice,x.dprice)}}</em>
                                </span>
                            </div>
                        </div>
                      </li>
                  </template>
                </ul>
              </div>
            </div>
        </div>
    `,

    /* 2. 위시리스트 */
    wishComp: `
    <aside class="wish_comp">
        <div class="wish_wrap">
            <div class="wish_bx">
                <h2>
                    <em>위시리스트</em>
                    ＞ 나의 관심상품
                    <span>{{$store.state.callout}}</span>건
                </h2>
                <table class="wish_item">
                    <thead>
                        <tr>
                            <th>상품이미지</th>
                            <th>상품정보</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <!-- 상품 정보 (tr 출력될 곳)-->
                    <tbody>
                        <tr v-for="(v,i) in $store.state.wish" :key="i">
                            <td class="ws_img">
                                <img :src="'./images/goods/'+v[0]+'.jpg'" alt="찜한 이미지" />
                            </td>
                            <!-- 상세 정보 -->
                            <td class="ws_info">
                                <div class="ws_txt">
                                    <p>{{v[1]}}</p>
                                </div>
                                <span class="ws_price">
                                    <em>{{setComma(v[2])}}</em>
                                    <span>원</span>
                                </span>
                                <div class="opt_num">
                                    <a href="#" role="button" class="minus" v-on:click.prevent="minusBtn(i)">수량감소</a>
                                    <a href="#" role="button" class="plus" v-on:click.prevent="plusBtn(i)">수량증가</a>
                                    <label>
                                        <input type="number" class="num" title="수량" value="1">
                                    </label>
                                </div>
                            </td>
                            <!-- 구매/ 장바구니/ 닫기 버튼 -->
                            <td class="del_wish" v-on:click="delWish(i)">
                                <button type="button">X</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="btn_bx">
                <div class="buybtn">
                    <a href="#">장바구니</a>
                    <a href="#">구매</a>
                </div>
                <div class="buybtn clbtn" v-on:click="wishClose()">
                    <a href="#">
                        닫기
                        <i class="fa-solid fa-xmark"></i>
                    </a>
                </div>
            </div>
        </div>
    </aside>
    `,
    
    /* 3. 로그인 템플릿 */
    userComp: `
        <aside class="user_comp">
            <div class="login_wrap">
                <div class="login_bx">
                    <h2>Log In</h2>
                    <form action="index.html" method="post" id="login-form">
                        <label class="login-inputbx">
                            <input type="text" id="userid" required placeholder="아이디" />
                        </label>
                        <label class="login-inputbx">
                            <input type="text" id="userpw" required placeholder="비밀번호" />
                        </label>
                        <div class="login_addbx">
                            <span class="login_saveid">
                                <input type="checkbox" id="chkbx" name="chkbx"/>
                                <label for="chkbx" class="fa-regular fa-circle-check"></label>
                                <label for="chkbx">아이디저장</label>
                            </span>
                            <span class="login_findid">
                                <a href="#">ID/PW 찾기</a>
                            </span>
                        </div>
                        <input class="login_btn" id="login" name="login" type="submit" value="로그인"/>
                        <label for="login"></label>
                        <ul class="login_sns">
                            <li>
                                <a href="#">
                                    <img src="./images/icon/icon_sns_kakaotalk.svg" alt="카카오톡 로그인"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="./images/icon/icon_sns_naver.png" alt="네이버 로그인"/>
                                </a>
                            </li>
                        </ul>
                        <input class="login_btn signup_btn" id="signup" name="signup" type="button" value="회원가입" @click="signupFn()"/>
                        <label for="signup"></label>
                    </form>
                </div>
            </div>
            <signup-comp ref="signup"></signup-comp>
        </aside>
    `,

    /* 4. 회원가입 템플릿 */
    signupComp: `
    <div class="signup_wrap">
        <div class="signup_bx">
            <h2>Sign Up</h2>
            <form action="index.html" method="post" id="signup-form">
                <label class="signup-inputbx">
                    <input type="text" id="signid" name="signid" required placeholder="아이디"/>
                    <span class="msg"></span>
                </label>
                <label class="signup-inputbx">
                    <input type="password" id="signpw" name="signpw" required placeholder="비밀번호"/>
                    <span class="msg"></span>
                </label>
                <label class="signup-inputbx">
                    <input type="text" name="signname" id="signname" maxlength="20" placeholder="이름" />
                    <span class="msg"></span>
                </label>
                <div class="gen-inputbx">
                    <div class="gen">
                        <label for="gen1">남성</label>
                        <input type="radio" name="gen" id="gen1" />
                    </div>
                    <div class="gen">
                        <label for="gen2">여성</label>
                        <input type="radio" name="gen" id="gen2" checked />
                    </div>
                </div>
                <label class="signup-inputbx emlbx">
                    <div class="firsteml">
                        <input type="text" id="email1" name="email1" placeholder="이메일앞주소" />
                        <span class="gol">@</span>
                        <select name="seleml" id="seleml">
                            <option value="init">이메일 선택</option>
                            <option value="naver.com">naver.com</option>
                            <option value="daum.net">daum.net</option>
                            <option value="hotmail.com">hotmail.com</option>
                            <option value="hanmail.net">hanmail.net</option>
                            <option value="gmail.com">gmail.com</option>
                        </select>
                    </div>
                    <span class="msg"></span>
                </label>
                <label class="signup-inputbx agreebx">
                    <div class="check_circle">
                        <input type="checkbox" id="agree_all">
                        <label for="agree_all">
                            <em class="option point">[필수]</em>
                            <span class="text">인증 약관 전체동의</span>
                        </label>
                    </div>
                    <button type="button" class="btn_expand"></button>
                    <!-- !!!! 슈펜 이용약관 동의 !!!! -->
                    <div class="termsbx">
                        <ul class="terms_list">
                            <li class="terms">
                                <h2>SHOOPEN 이용약관 동의
                                    <span class="terms_necessary">(필수)</span>
                                </h2>
                                <div class="article_wrap">
                                    <div class="article">
                                        <p> SHOOPEN 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다.
                                            본 약관은 다양한 SHOOPEN 서비스의 이용과 관련하여 SHOOPEN 서비스를 제공하는 이랜드 주식회사(이하 ‘이랜드몰’)와
                                            이를 이용하는 SHOOPEN 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며,
                                            아울러 여러분의 SHOOPEN 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다. </p>
                                        <p> SHOOPEN 서비스를 이용하시거나 SHOOPEN 서비스 회원으로 가입하실 경우 여러분은 본 약관 및
                                            관련 운영 정책을 확인하거나 동의하게 되므로,
                                            잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.
                                        </p>
                                    </div>
                                    <div class="article">
                                        <h3 class="article__title">다양한 SHOOPEN 서비스를 즐겨보세요.</h3>
                                        <p> SHOOPEN는 <a href="https://www.naver.com/"
                                                target="_blank">www.naver.com</a>을 비롯한 SHOOPEN 도메인의 웹사이트 및 응용프로그램(어플리케이션,
                                            앱)을 통해 정보 검색,
                                            다른 이용자와의 커뮤니케이션, 콘텐츠 제공, 상품 쇼핑 등 여러분의 생활에 편리함을 더할 수 있는 다양한 서비스를 제공하고 있습니다.<br>
                                            여러분은 PC, 휴대폰 등 인터넷 이용이 가능한 각종 단말기를 통해 각양각색의 SHOOPEN 서비스를 자유롭게 이용하실 수 있으며,
                                            개별 서비스들의 구체적인 내용은 각 서비스 상의 안내, 공지사항, <a
                                                href="https://shoopen.elandmall.co.kr/m/custcenter" target="_blank">SHOOPEN
                                                웹고객센터(이하 ‘고객센터’)</a> 도움말 등에서 쉽게 확인하실 수 있습니다.</p>
                                        <p> SHOOPEN는 기본적으로 여러분 모두에게 동일한 내용의 서비스를 제공합니다.
                                            다만, '청소년보호법' 등 관련 법령이나 기타 개별 서비스 제공에서의 특별한 필요에 의해서 연령 또는 일정한 등급을 기준으로 이용자를 구분하여
                                            제공하는 서비스의 내용, 이용 시간, 이용 횟수 등을 다르게 하는 등 일부 이용을 제한하는 경우가 있습니다.
                                            자세한 내용은 역시 각 서비스 상의 안내, 공지사항, 고객센터 도움말 등에서 확인하실 수 있습니다. </p>
                                        <p> SHOOPEN 서비스에는 기본적으로 본 약관이 적용됩니다만 SHOOPEN가 다양한 서비스를 제공하는
                                            과정에서 부득이 본 약관 외 별도의 약관, 운영정책 등을 적용하는 경우(예, SHOOPEN페이, V LIVE 등)가 있습니다.
                                            그리고 SHOOPEN 계열사가 제공하는 특정 서비스의 경우에도(예, LINE, SNOW등) 해당 운영 회사가 정한 고유의 약관, 운영정책 등이
                                            적용될 수 있습니다.
                                            이러한 내용은 각각의 해당 서비스 초기 화면에서 확인해 주시기 바랍니다.
                                        </p>
                                    </div>
                                    <div class="article">
                                        <h3 class="article__title">여러분의 개인정보를 소중히 보호합니다.</h3>
                                        <p> SHOOPEN는 서비스의 원활한 제공을 위하여 회원이 동의한 목적과 범위 내에서만 개인정보를
                                            수집∙이용하며, 개인정보 보호 관련 법령에 따라 안전하게 관리합니다.
                                            SHOOPEN가 이용자 및 회원에 대해 관련 개인정보를 안전하게 처리하기 위하여 기울이는 노력이나
                                            기타 상세한 사항은 <a href="https://sample-file.elandrs.com/terms" target="_blank">개인정보 처리방침</a>에서 확인하실 수 있습니다. </p>
                                        <p> SHOOPEN는 여러분이 서비스를 이용하기 위해 일정 기간 동안 로그인 혹은 접속한 기록이 없는 경우,
                                            전자메일, 서비스 내 알림 또는 기타 적절한 전자적 수단을 통해 사전에 안내해 드린 후 여러분의 정보를 파기하거나 분리 보관할 수 있으며,
                                            만약 이로 인해 서비스 제공을 위해 필수적인 정보가 부족해질 경우 부득이 관련 서비스 이용계약을 해지할 수 있습니다.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="terms">
                                <h2>개인정보 수집 및 이용에 대한 안내
                                    <span class="terms_necessary">(필수)</span>
                                </h2>
                                <div class="article_wrap">
                                    <div class="article">
                                        <p class="policy_summary__text">정보통신망법 규정에 따라 SHOOPEN에 회원가입 신청하시는 분께 수집하는 개인정보의 항목,
                                            개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.
                                        </p>
                                    </div>
                                    <div class="article">
                                        <h3 class="article__title">1. 수집하는 개인정보</h3>
                                        <p>이용자는 회원가입을 하지 않아도 정보 검색, 뉴스 보기 등 대부분의 SHOOPEN 서비스를 회원과 동일하게
                                            이용할 수 있습니다. 이용자가 메일, 캘린더, 카페, 블로그 등과 같이 개인화 혹은 회원제 서비스를 이용하기 위해 회원가입을 할 경우, My
                                            Item는 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다.
                                            <div class="clause">
                                                <h4 class="clause__title">회원가입 시점에 SHOOPEN가 이용자로부터 수집하는 개인정보는 아래와 같습니다.</h4>
                                                <ul>
                                                    <li>
                                                        - 회원 가입 시에 ‘아이디, 비밀번호, 이름, 생년월일, 성별, 가입인증
                                                        휴대폰번호’를 필수항목으로 수집합니다. 만약 이용자가 입력하는 생년월일이 만14세 미만 아동일 경우에는 법정대리인
                                                        정보(법정대리인의 이름, 생년월일, 성별, 중복가입확인정보(DI), 휴대폰번호)를 추가로 수집합니다. 그리고 선택항목으로 이메일
                                                        주소를 수집합니다.
                                                    </li>
                                                    <li>
                                                        - 단체아이디로 회원가입 시 단체아이디, 비밀번호, 단체이름, 이메일주소, 가입인증
                                                        휴대폰번호를 필수항목으로 수집합니다. 그리고 단체 대표자명, 비밀번호 발급용 멤버 이름 및 이메일주소를 선택항목으로 수집합니다.
                                                    </li>
                                                </ul>
                                                <h4 class="clause__title">서비스 이용 과정에서 이용자로부터 수집하는 개인정보는 아래와 같습니다.</h4>
                                                <ul>
                                                    <li>
                                                        - NAVER 내의 개별 서비스 이용, 이벤트 응모 및 경품 신청 과정에서 해당 서비스의 이용자에 한해
                                                        추가 개인정보 수집이 발생할 수 있습니다. 추가로 개인정보를 수집할 경우에는 해당 개인정보 수집 시점에서 이용자에게 ‘수집하는 개인정보
                                                        항목, 개인정보의 수집 및 이용목적, 개인정보의 보관기간’에 대해 안내 드리고 동의를 받습니다.
                                                    </li>
                                                    <li>
                                                        - 단체아이디로 회원가입 시 단체아이디, 비밀번호, 단체이름, 이메일주소, 가입인증
                                                        휴대폰번호를 필수항목으로 수집합니다. 그리고 단체 대표자명, 비밀번호 발급용 멤버 이름 및 이메일주소를 선택항목으로 수집합니다.
                                                    </li>
                                                </ul>
                                                <h4 class="clause__title">서비스 이용 과정에서 IP 주소, 쿠키, 서비스 이용 기록, 기기정보, 위치정보가 생성되어 수집될 수 있습니다.</h4>
                                                <ul>
                                                    <li>
                                                        구체적으로 1) 서비스 이용 과정에서 이용자에 관한 정보를 정보통신서비스 제공자가 자동화된 방법으로
                                                        생성하여 이를 저장(수집)하거나, <br>
                                                        2) 이용자 기기의 고유한 정보를 원래의 값을 확인하지 못 하도록 안전하게 변환한 후에 수집하는 경우를 의미합니다.<br>
                                                        SHOOPEN 위치기반서비스 이용 시 수집·저장되는 위치정보의 이용 등에 대한 자세한 사항은 ‘SHOOPEN 위치정보 이용약관’에서
                                                        규정하고 있습니다.
                                                    </li>
                                                </ul>
                                            </div>
                                        </p>
                                    </div>
                                    <div class="article">
                                        <h3 class="article__title">2. 수집한 개인정보의 이용</h3>
                                        <p>SHOOPEN 및 SHOOPEN 관련 제반 서비스(모바일 웹/앱 포함)의 회원관리, 서비스 개발・제공 및 향상, 안전한 인터넷 이용환경 구축 등 아래의 목적으로만 개인정보를 이용합니다.</p>
                                        <ul>
                                            <li class="sections__section">- 회원 가입 의사의 확인, 연령 확인 및 법정대리인 동의 진행, 이용자 및 법정대리인의
                                                본인 확인, 이용자 식별, 회원탈퇴 의사의 확인 등 회원관리를 위하여 개인정보를 이용합니다.</li>
                                            <li class="sections__section">- 콘텐츠 등 기존 서비스 제공(광고 포함)에 더하여, 인구통계학적 분석, 서비스 방문 및
                                                이용기록의 분석, 개인정보 및 관심에 기반한 이용자간 관계의 형성, 지인 및 관심사 등에 기반한 맞춤형 서비스 제공 등 신규 서비스
                                                요소의 발굴 및 기존 서비스 개선 등을 위하여 개인정보를 이용합니다.</li>
                                            <li class="sections__section">- 법령 및 SHOOPEN 이용약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용
                                                행위를 포함하여 서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재, 계정도용 및 부정거래 방지, 약관 개정 등의 고지사항
                                                전달, 분쟁조정을 위한 기록 보존, 민원처리 등 이용자 보호 및 서비스 운영을 위하여 개인정보를 이용합니다.</li>
                                            <li class="sections__section">- 유료 서비스 제공에 따르는 본인인증, 구매 및 요금 결제, 상품 및 서비스의 배송을
                                                위하여 개인정보를 이용합니다.</li>
                                            <li class="sections__section">- 이벤트 정보 및 참여기회 제공, 광고성 정보 제공 등 마케팅 및 프로모션 목적으로
                                                개인정보를 이용합니다.</li>
                                            <li class="sections__section">- 서비스 이용기록과 접속 빈도 분석, 서비스 이용에 대한 통계, 서비스 분석 및 통계에
                                                따른 맞춤 서비스 제공 및 광고 게재 등에 개인정보를 이용합니다.</li>
                                            <li class="sections__section">- 보안, 프라이버시, 안전 측면에서 이용자가 안심하고 이용할 수 있는 서비스 이용환경
                                                구축을 위해 개인정보를 이용합니다.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- !!!! 슈펜 이용약관 동의 여기까지 !!!! -->
                </label>
                <div class="signup_btns">
                    <div class="signup_clbtn">
                        <a href="#">
                            닫기
                            <i class="fa-solid fa-xmark"></i>
                        </a>
                    </div>
                    <input class="signup_btn2" id="final_signup" name="final_signup" type="submit" value="가입하기"/>
                    <label for="final_signup"></label>
                </div>
            </form>
        </div>
    </div>
    `,
};

export default comData;