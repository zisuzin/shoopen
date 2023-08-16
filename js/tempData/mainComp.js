const mainData = {
    // section2 컴포넌트
    bestarea: `
    <section class="main_best">
        <div class="mbtit_bx">
            <dl class="mbtit1">
                <dt class="main_tit">BEST PICK</dt>
                <dd class="morebtn">
                    <a href="#">전체보기</a>
                </dd>
            </dl>
            <dl class="mbtit2">
                <dd v-for="(v,i) in notelnb" :key="i">
                    <a href="#" @click.prevent="setNum(i)">{{v}}</a>
                </dd>
            </dl>
        </div>
        <div class="mbList">
            <ul>
                <li class="bestItem" v-for="(a,b) in m_bestData['bestItem'+$store.state.setNumber]" :key="b">
                    <!-- 이미지 -->
                    <a href="#">
                        <div class="best-img">
                            <img v-bind:src="a.img" alt="a.name"/>
                            <span class="ranking_flag">{{b+1}}</span>
                        </div>
                        <!-- 설명 -->
                        <div class="best-txt">
                            <div class="btxt1">
                                <strong class="brand">슈펜</strong>
                                <p>{{a.name}}</p>
                            </div>
                            <div class="btxt2">
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
                                    <em>{{((a.oprice - a.dprice) / a.oprice * 100).toFixed(0)}}%</em>
                                </span>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
  </section>
    `,
    newarea: `
    <section class="main_new">
        <div class="mntit_bx">
            <dl class="mbtit1">
                <dt class="main_tit">New Arrival</dt>
                <dd class="morebtn">
                    <a href="#">전체보기</a>
                </dd>
            </dl>
            <dl class="mntit2">
                <dd v-for="(n,i) in notelnb2" :key="i">
                    <a href="#" @click.prevent="setNum(i)">{{n}}</a>
                </dd>
            </dl>
        </div>
        <div class="mnList">
            <ul>
                <li class="newItem" v-for="(a,b) in m_newData['newItem'+$store.state.setNumber]" :key="b">
                    <!-- 이미지 -->
                    <a href="#">
                        <div class="new-img">
                            <img v-bind:src="a.img" alt="a.name"/>
                        </div>
                        <!-- 설명 -->
                        <div class="new-txt">
                            <div class="ntxt1">
                                <strong class="brand">슈펜</strong>
                                <p>{{a.name}}</p>
                            </div>
                            <div class="ntxt2">
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
                                    <em>{{((a.oprice - a.dprice) / a.oprice * 100).toFixed(0)}}%</em>
                                </span>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
  </section>
    `,
};


export default mainData;

