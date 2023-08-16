const dtData = {
    dtComp: `
    <div class="dt-comp">
        <div class="detailbx">
            <div class="dtsec1">
            <!-- 이미지 배너 박스 -->
                <div class="detail_img">
                    <!-- 슬라이드 이미지 -->
                    <div class="swiper mySwiper">
                        <ul class="swiper-wrapper">
                            <li class="swiper-slide">
                            <img :src="'./images/goods/' + $store.state.curUrl0 + '/' + $store.state.curUrl1 + '/' + $store.state.dtimg + '.jpg'" alt="썸네일 대표이미지"/>
                            </li>
                            <li class="swiper-slide">
                                <img :src="'./images/goods/' + $store.state.curUrl0 + '/' + $store.state.curUrl1 + '/' + $store.state.dtsumimg2 + '.jpg'" alt="썸네일 상세이미지"/>
                            </li>
                            <li class="swiper-slide">
                                <img :src="'./images/goods/' + $store.state.curUrl0 + '/' + $store.state.curUrl1 + '/' + $store.state.dtsumimg3 + '.jpg'" alt="썸네일 상세이미지"/>
                            </li>
                        </ul>
                        <div class="swiper-button-next swbtn"></div>
                        <div class="swiper-button-prev swbtn"></div>
                    </div>
                    <!-- 썸네일 리스트 -->
                    <div class="swiper mySwiper2">
                        <ul class="swiper-wrapper">
                            <li class="swiper-slide">
                                <img :src="'./images/goods/' + $store.state.curUrl0 + '/' + $store.state.curUrl1 + '/' + $store.state.dtimg + '.jpg'" alt="썸네일 상세이미지"/>
                            </li>
                            <li class="swiper-slide">
                                <img :src="'./images/goods/' + $store.state.curUrl0 + '/' + $store.state.curUrl1 + '/' + $store.state.dtsumimg2 + '.jpg'" alt="썸네일 상세이미지"/>
                            </li>
                            <li class="swiper-slide">
                                <img :src="'./images/goods/' + $store.state.curUrl0 + '/' + $store.state.curUrl1 + '/' + $store.state.dtsumimg3 + '.jpg'" alt="썸네일 상세이미지"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 구매 인터페이스 영역 -->
                <div class="detail_buy">
                    <div class="buyarea">
                        <dl>
                            <dt>{{$store.state.dtname}}</dt>
                            <dd class="price_wrap">
                                <div class="price">
                                    <div class="txt-def">
                                        <em>
                                            {{setComma($store.state.dtoprice)}}
                                            <span v-if="$store.state.dtoprice">원</span>
                                        </em>
                                    </div>
                                    <div class="txt-dsc">
                                        <em>{{setComma($store.state.dtdprice)}}</em>
                                        <span>원</span>
                                        <span class="txt-percent">
                                            <em>{{setDiscount($store.state.dtoprice, $store.state.dtdprice)}}</em>
                                        </span>
                                    </div>
                                </div>
                            </dd>
                            <dd class="box_grade">
                                <div class="star">
                                    <span>(29)</span>
                                </div>
                            </dd>
                            <dd class="buy_option">
                                <ul>
                                    <li class="color">
                                        <em>색상</em>
                                        <div class="copt">
                                            <div class="option_inner option_color" @click="openCat()">
                                                <span>색상 옵션을 선택해주세요.</span>
                                            </div>
                                            <div class="option_list coloropt">
                                                <ul>
                                                    <li v-for="(a,b) in $store.state.dtcolor" :key="b">
                                                        <span>{{a}}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="size">
                                        <em>사이즈</em>
                                        <div class="copt">
                                            <div class="option_inner option_size">
                                                <span>사이즈 옵션을 선택해 주세요.</span>
                                            </div>
                                            <div class="option_list sizeopt">
                                            <ul>
                                                <li v-for="(a,b) in $store.state.dtsize" :key="b">
                                                    <span>{{a}}</span>
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </dd>
                            <!-- 최종 결제 상품박스 영역 -->
                            <div class="dtfinal_bx">
                                <ul>
                                    <li>
                                        <div class="opt_name">{{'[택배배송] ' + $store.state.pickcolor + '/' + $store.state.picksize}}</div>
                                        <div class="opt_num">
                                            <a href="#" role="button" class="minus" v-on:click.prevent="minusBtn()">수량감소</a>
                                            <a href="#" role="button" class="plus" v-on:click.prevent="plusBtn()">수량증가</a>
                                            <label>
                                                <input type="number" class="num" title="수량" value="1">
                                            </label>
                                        </div>
                                        <div class="opt_price">
                                            <strong>{{setComma($store.state.dtdprice)}}</strong>원
                                        </div>
                                        <span class="opt_del">
                                            <i class="fa-solid fa-xmark"></i>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div class="dttot_bx">
                                <span class="tot_txt">총 합계</span>
                                <span class="tot_price">
                                    <strong>{{setComma(Number($store.state.dtdprice)*($store.state.result))}}</strong>
                                    원
                                </span>
                            </div> 
                            <div class="dtbtn">
                                <a href="#">CART</a>
                                <a href="#">BUY</a>
                            </div>
                            <div class="dtbtn clbtn" @click="closeDetail">
                                <a href="#">
                                    CLOSE
                                    <i class="fa-solid fa-xmark"></i>
                                </a>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
};

export default dtData;