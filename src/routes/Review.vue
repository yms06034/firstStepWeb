<template>
  <form @:submit.prevent>
    <article>
      <div class="cntbody"> 
        <!-- title -->
        <h1 class="top_title">TRAVEL REVIEW</h1>
        <!-- 상단 버튼 -->
        <div class='top_btn'>
          <button type="button" class="p_btn"># All</button>
          <button type="button" class="p_btn"># 제주도</button>
          <button type="button" class="p_btn"># 국내여행</button>
          <button type="button" class="p_btn"># 해외여행</button>
          <button type="button" class="p_btn"># 일본</button>
          <button type="button" class="p_btn"># 데이트코스</button>
          <button type="button" class="p_btn"># 애견패션</button>
          <button type="button" class="p_btn"># 카페</button>
          <button type="button" class="p_btn"># 맛집탐방</button>
        </div>
        <!-- Search -->
        <div class="searchWrapper">
          <div class="p_search">
            <input class="searchBar" type="text" placeholder="검색하세요"/>
            <button class="reviewSearch_btn" type="button">
              <img src="https://i.ibb.co/8zBPjtr/ant-design-search-outlined.png" alt="Search_btn" />
            </button>
          </div>
        </div>
        <!-- Weekly Ranking -->
        <h4>주간 Weekly Ranking</h4>
        <div class='bodyt'>
          <swiper
          :slides-per-view="6"
          :space-between="30"
          :navigation='true'
          @swiper="onSwiper"
          @slideChange="onSlideChange">
            <swiper-slide>
              <div class="contant">
                <p class="user_name">@yxxhzzi</p>
                <img class="user_img" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="user_img_1" />
                <img class="weekly_img" src="https://i.pinimg.com/236x/95/d0/07/95d00790cd0a347d9a63fd62c278a982.jpg" alt="Weekly_1" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="contant">
                <p class="user_name">@kkh1120</p>
                <img class="user_img" src="https://i.pinimg.com/236x/fd/52/ff/fd52ff75e986955465c02b080bdd817d.jpg" alt="user_img_2" />
                <img class="weekly_img" src="https://i.pinimg.com/236x/a4/fe/e4/a4fee42124348f87eb2bc7be23088315.jpg" alt="Weekly_2" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="contant">
                <p class="user_name">@bee__ss</p>
                <img class="user_img" src="https://i.pinimg.com/236x/ce/d4/23/ced423acb6d1c1e3751b7739e7baa441.jpg" alt="user_img_3" />
                <img class="weekly_img" src="https://i.pinimg.com/236x/0e/db/0e/0edb0eb326bb2228313f6694f532f3d6.jpg" alt="Weekly_3" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="contant">
                <p class="user_name">@o_ob_jun</p>
                <img class="user_img" src="https://i.pinimg.com/236x/e4/10/7e/e4107e8131adae5c338d07bcab047a09.jpg" alt="user_img_4" />
                <img class="weekly_img" src="https://i.pinimg.com/236x/6a/1f/7b/6a1f7b9b5d44e5dc6f1a627885e78214.jpg" alt="Weekly_4" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="contant">
                <p class="user_name">@5dong2</p>
                <img class="user_img" src="https://i.pinimg.com/236x/9c/fe/c1/9cfec1f98ff271a6fb6b63d7b29e58c6.jpg" alt="user_img_5" />
                <img class="weekly_img" src="https://i.pinimg.com/236x/85/67/be/8567beb5e679c6482121d506ee421119.jpg" alt="Weekly_5" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="contant">
                <p class="user_name">@suuu.ssuu</p>
                <img class="user_img" src="https://i.pinimg.com/236x/20/1f/96/201f96f5bbf9c84347fa7101bd0ae885.jpg" alt="user_img_6" />
                <img class="weekly_img" src="https://i.pinimg.com/236x/60/65/99/606599c718bc91ef7ea526e3cb6a0a19.jpg" alt="Weekly_6" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="contant">
                <p class="user_name">@lilgaean</p>
                <img class="user_img" src="https://i.pinimg.com/236x/90/a0/a2/90a0a2021fd9dcb4ecd72ebf0418a577.jpg" alt="user_img_7" />
                <img class="weekly_img" src="https://i.pinimg.com/564x/7c/71/d3/7c71d3bcbc24d5ae5817328b3899ef1d.jpg" alt="Weekly_7" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="contant">
                <p class="user_name">@frogdok</p>
                <img class="user_img" src="https://i.pinimg.com/236x/fa/15/3f/fa153f88fc6476a33bcb4858d32d72da.jpg" alt="user_img_8" />
                <img class="weekly_img" src="https://i.pinimg.com/236x/61/70/41/61704181409d0d430b6f8361ca269daa.jpg" alt="Weekly_8" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="contant">
                <p class="user_name">@_hj1114</p>
                <img class="user_img" src="https://i.pinimg.com/236x/32/3c/b6/323cb68bc3e34415f2b65e2dc39a4e1f.jpg" alt="user_img_9" />
                <img class="weekly_img" src="https://i.pinimg.com/236x/92/a1/b3/92a1b360c92d9dac1bda23a7d6413569.jpg" alt="Weekly_9" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="contant">
                <p class="user_name">@moldpak_</p>
                <img class="user_img" src="https://i.pinimg.com/236x/9e/2a/e1/9e2ae1d23f5cfa361b30001c76d0314f.jpg" alt="user_img_10" />
                <img class="weekly_img" src="https://i.pinimg.com/236x/18/87/dc/1887dc83db3e1682fb16682c287204fa.jpg" alt="Weekly_10" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="contant">
                <p class="user_name">@moldpak_</p>
                <img class="user_img" src="https://i.pinimg.com/236x/d2/50/5f/d2505f6fc4bdf5227d3c079f52e6cf81.jpg" alt="user_img_11" />
                <img class="weekly_img" src="https://i.pinimg.com/236x/76/ba/51/76ba51737c96e511cebc40710c42c371.jpg" alt="Weekly_11" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="contant">
                <p class="user_name">@miing.9</p>
                <img class="user_img" src="https://i.pinimg.com/236x/f9/72/34/f9723413b2ca2d7a4752ca3b7621328f.jpg" alt="user_img_12" />
                <img class="weekly_img" src="https://i.pinimg.com/236x/b1/b5/8e/b1b58e1c382772c89bed0bb5c67bdb45.jpg" alt="Weekly_12" />
              </div>
            </swiper-slide>
        </swiper>
        </div>
        <!-- Content -->
        <div 
          v-for="con in contents" 
          :key="con"
          class="reviewitems">
          <!-- 첫번째 Columns -->
          <ul class="reviewcol">
            <!-- 1 -->
            <li class="reviewitem">
              <!-- Content Area -->
              <div class="reviewcontent">
                <!-- Image area -->
                <div class="reviewimg">
                  <a href="javascript:void(0)"></a>
                  <img class="reimg" src="https://i.pinimg.com/236x/b4/93/92/b493926bfcdb3f2c312d5f37d627a904.jpg" alt="test" />
                </div>
                <!-- Icon area -->
                <div class="icon">
                  <ul class="i_area">
                    <li class="i_heart">
                      <img class="i_img" src="https://i.ibb.co/3YWXDSp/heart.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.heart_count }}</font>
                    </li>
                    <li class="i_chat">
                      <img class="i_img" src="https://i.ibb.co/StXq4pQ/chat.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.chat_count }}</font>
                    </li>
                  </ul>
                </div>
                <!-- Username area -->
                <div class="username">
                  <ul class="userarea">
                    <li class="userimg">
                      <a href="javascript:void(0)">
                        <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile" />
                      </a>
                    </li>
                    <li class="profilename">{{ con.name }}</li>
                  </ul>
                </div>
                <!-- Content title -->
                <!-- 폰트는 수정 예정 -->
                <div class="contenttitle">{{ con.title }}</div>
              </div>
            </li>
            <!-- 2 -->
            <li class="reviewitem">
              <!-- Content Area -->
              <div class="reviewcontent">
                <!-- Image area -->
                <div class="reviewimg">
                  <a href="javascript:void(0)"></a>
                  <img class="reimg" src="https://i.pinimg.com/236x/6a/1f/7b/6a1f7b9b5d44e5dc6f1a627885e78214.jpg" alt="test" />
                </div>
                <!-- Icon area -->
                <div class="icon">
                  <ul class="i_area">
                    <li class="i_heart">
                      <img class="i_img" src="https://i.ibb.co/3YWXDSp/heart.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.heart_count }}</font>
                    </li>
                    <li class="i_chat">
                      <img class="i_img" src="https://i.ibb.co/StXq4pQ/chat.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.chat_count }}</font>
                    </li>
                  </ul>
                </div>
                <!-- Username area -->
                <div class="username">
                  <ul class="userarea">
                    <li class="userimg">
                      <a href="javascript:void(0)">
                        <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile" />
                      </a>
                    </li>
                    <li class="profilename">{{ con.name }}</li>
                  </ul>
                </div>
                <!-- Content title -->
                <!-- 폰트는 수정 예정 -->
                <div class="contenttitle">{{ con.title }}</div>
              </div>
            </li>
            <!-- 3 -->
            <li class="reviewitem">
              <!-- Content Area -->
              <div class="reviewcontent">
                <!-- Image area -->
                <div class="reviewimg">
                  <a href="javascript:void(0)"></a>
                  <img class="reimg" src="https://i.pinimg.com/236x/8a/53/45/8a534567db7be948a533b8cd1c94aecc.jpg" alt="test" />
                </div>
                <!-- Icon area -->
                <div class="icon">
                  <ul class="i_area">
                    <li class="i_heart">
                      <img class="i_img" src="https://i.ibb.co/3YWXDSp/heart.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.heart_count }}</font>
                    </li>
                    <li class="i_chat">
                      <img class="i_img" src="https://i.ibb.co/StXq4pQ/chat.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.chat_count }}</font>
                    </li>
                  </ul>
                </div>
                <!-- Username area -->
                <div class="username">
                  <ul class="userarea">
                    <li class="userimg">
                      <a href="javascript:void(0)">
                        <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile" />
                      </a>
                    </li>
                    <li class="profilename">{{ con.name }}</li>
                  </ul>
                </div>
                <!-- Content title -->
                <!-- 폰트는 수정 예정 -->
                <div class="contenttitle">{{ con.title }}</div>
              </div>
            </li>
            <!-- 4 -->
            <li class="reviewitem">
              <!-- Content Area -->
              <div class="reviewcontent">
                <!-- Image area -->
                <div class="reviewimg">
                  <a href="javascript:void(0)"></a>
                  <img class="reimg" src="https://i.pinimg.com/236x/60/65/99/606599c718bc91ef7ea526e3cb6a0a19.jpg" alt="test" />
                </div>
                <!-- Icon area -->
                <div class="icon">
                  <ul class="i_area">
                    <li class="i_heart">
                      <img class="i_img" src="https://i.ibb.co/3YWXDSp/heart.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.heart_count }}</font>
                    </li>
                    <li class="i_chat">
                      <img class="i_img" src="https://i.ibb.co/StXq4pQ/chat.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.chat_count }}</font>
                    </li>
                  </ul>
                </div>
                <!-- Username area -->
                <div class="username">
                  <ul class="userarea">
                    <li class="userimg">
                      <a href="javascript:void(0)">
                        <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile" />
                      </a>
                    </li>
                    <li class="profilename">{{ con.name }}</li>
                  </ul>
                </div>
                <!-- Content title -->
                <!-- 폰트는 수정 예정 -->
                <div class="contenttitle">{{ con.title }}</div>
              </div>
            </li>
            <!-- 5 -->
            <li class="reviewitem">
              <!-- Content Area -->
              <div class="reviewcontent">
                <!-- Image area -->
                <div class="reviewimg">
                  <a href="javascript:void(0)"></a>
                  <img class="reimg" src="https://i.pinimg.com/236x/25/c9/d2/25c9d27b47e0437f3f26fc71fed829e0.jpg" alt="test" />
                </div>
                <!-- Icon area -->
                <div class="icon">
                  <ul class="i_area">
                    <li class="i_heart">
                      <img class="i_img" src="https://i.ibb.co/3YWXDSp/heart.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.heart_count }}</font>
                    </li>
                    <li class="i_chat">
                      <img class="i_img" src="https://i.ibb.co/StXq4pQ/chat.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.chat_count }}</font>
                    </li>
                  </ul>
                </div>
                <!-- Username area -->
                <div class="username">
                  <ul class="userarea">
                    <li class="userimg">
                      <a href="javascript:void(0)">
                        <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile" />
                      </a>
                    </li>
                    <li class="profilename">{{ con.name }}</li>
                  </ul>
                </div>
                <!-- Content title -->
                <!-- 폰트는 수정 예정 -->
                <div class="contenttitle">{{ con.title }}</div>
              </div>
            </li>
          </ul>
          <!-- 두번째 Columns -->
          <ul class="reviewcol">
            <!-- 1 -->
            <li class="reviewitem">
              <div class="reviewcontent">
                <div class="reviewimg">
                  <a href="javascript:void(0)"></a>
                  <img class="reimg" src="https://i.pinimg.com/236x/ea/ab/1a/eaab1a9fef9d1e666958f1d8733cc707.jpg" alt="test" />
                </div>
                <!-- Icon area -->
                <div class="icon">
                  <ul class="i_area">
                    <li class="i_heart">
                      <img class="i_img" src="https://i.ibb.co/3YWXDSp/heart.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.heart_count }}</font>
                    </li>
                    <li class="i_chat">
                      <img class="i_img" src="https://i.ibb.co/StXq4pQ/chat.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.chat_count }}</font>
                    </li>
                  </ul>
                </div>
                <!-- Username area -->
                <div class="username">
                  <ul class="userarea">
                    <li class="userimg">
                      <a href="javascript:void(0)">
                        <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile" />
                      </a>
                    </li>
                    <li class="profilename">{{ con.name }}</li>
                  </ul>
                </div>
                <!-- Content title -->
                <!-- 폰트는 수정 예정 -->
                <div class="contenttitle">{{ con.title }}</div>
              </div>
            </li>
            <!-- 2 -->
            <li class="reviewitem">
              <div class="reviewcontent">
                <div class="reviewimg">
                  <a href="javascript:void(0)"></a>
                  <img class="reimg" src="https://i.pinimg.com/236x/97/94/12/97941226e22b41e6bdbc0176c46461a7.jpg" alt="test" />
                </div>
                <!-- Icon area -->
                <div class="icon">
                  <ul class="i_area">
                    <li class="i_heart">
                      <img class="i_img" src="https://i.ibb.co/3YWXDSp/heart.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.heart_count }}</font>
                    </li>
                    <li class="i_chat">
                      <img class="i_img" src="https://i.ibb.co/StXq4pQ/chat.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.chat_count }}</font>
                    </li>
                  </ul>
                </div>
                <!-- Username area -->
                <div class="username">
                  <ul class="userarea">
                    <li class="userimg">
                      <a href="javascript:void(0)">
                        <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile" />
                      </a>
                    </li>
                    <li class="profilename">{{ con.name }}</li>
                  </ul>
                </div>
                <!-- Content title -->
                <!-- 폰트는 수정 예정 -->
                <div class="contenttitle">{{ con.title }}</div>
              </div>
            </li>
            <!-- 3 -->
            <li class="reviewitem">
              <div class="reviewcontent">
                <div class="reviewimg">
                  <a href="javascript:void(0)"></a>
                  <img class="reimg" src="https://i.pinimg.com/236x/95/d0/07/95d00790cd0a347d9a63fd62c278a982.jpg" alt="test" />
                </div>
                <!-- Icon area -->
                <div class="icon">
                  <ul class="i_area">
                    <li class="i_heart">
                      <img class="i_img" src="https://i.ibb.co/3YWXDSp/heart.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.heart_count }}</font>
                    </li>
                    <li class="i_chat">
                      <img class="i_img" src="https://i.ibb.co/StXq4pQ/chat.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.chat_count }}</font>
                    </li>
                  </ul>
                </div>
                <!-- Username area -->
                <div class="username">
                  <ul class="userarea">
                    <li class="userimg">
                      <a href="javascript:void(0)">
                        <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile" />
                      </a>
                    </li>
                    <li class="profilename">{{ con.name }}</li>
                  </ul>
                </div>
                <!-- Content title -->
                <!-- 폰트는 수정 예정 -->
                <div class="contenttitle">{{ con.title }}</div>
              </div>
            </li>
            <!-- 4 -->
            <li class="reviewitem">
              <div class="reviewcontent">
                <div class="reviewimg">
                  <a href="javascript:void(0)"></a>
                  <img class="reimg" src="https://i.pinimg.com/236x/18/87/dc/1887dc83db3e1682fb16682c287204fa.jpg" alt="test" />
                </div>
                <!-- Icon area -->
                <div class="icon">
                  <ul class="i_area">
                    <li class="i_heart">
                      <img class="i_img" src="https://i.ibb.co/3YWXDSp/heart.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.heart_count }}</font>
                    </li>
                    <li class="i_chat">
                      <img class="i_img" src="https://i.ibb.co/StXq4pQ/chat.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.chat_count }}</font>
                    </li>
                  </ul>
                </div>
                <!-- Username area -->
                <div class="username">
                  <ul class="userarea">
                    <li class="userimg">
                      <a href="javascript:void(0)">
                        <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile" />
                      </a>
                    </li>
                    <li class="profilename">{{ con.name }}</li>
                  </ul>
                </div>
                <!-- Content title -->
                <!-- 폰트는 수정 예정 -->
                <div class="contenttitle">{{ con.title }}</div>
              </div>
            </li>
            <!-- 5 -->
            <li class="reviewitem">
              <div class="reviewcontent">
                <div class="reviewimg">
                  <a href="javascript:void(0)"></a>
                  <img class="reimg" src="https://i.pinimg.com/236x/20/89/54/208954268ba0b696ffdccc317870a89c.jpg" alt="test" />
                </div>
                <!-- Icon area -->
                <div class="icon">
                  <ul class="i_area">
                    <li class="i_heart">
                      <img class="i_img" src="https://i.ibb.co/3YWXDSp/heart.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.heart_count }}</font>
                    </li>
                    <li class="i_chat">
                      <img class="i_img" src="https://i.ibb.co/StXq4pQ/chat.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.chat_count }}</font>
                    </li>
                  </ul>
                </div>
                <!-- Username area -->
                <div class="username">
                  <ul class="userarea">
                    <li class="userimg">
                      <a href="javascript:void(0)">
                        <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile" />
                      </a>
                    </li>
                    <li class="profilename">{{ con.name }}</li>
                  </ul>
                </div>
                <!-- Content title -->
                <!-- 폰트는 수정 예정 -->
                <div class="contenttitle">{{ con.title }}</div>
              </div>
            </li>
          </ul>
          <!-- 세번째 Columns -->
          <ul class="reviewcol">
            <!-- 1 -->
            <li class="reviewitem">
              <div class="reviewcontent">
                <div class="reviewimg">
                  <a href="javascript:void(0)"></a>
                  <img class="reimg" src="https://i.pinimg.com/236x/0e/db/0e/0edb0eb326bb2228313f6694f532f3d6.jpg" alt="test" />
                </div>
                <!-- Icon area -->
                <div class="icon">
                  <ul class="i_area">
                    <li class="i_heart">
                      <img class="i_img" src="https://i.ibb.co/3YWXDSp/heart.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.heart_count }}</font>
                    </li>
                    <li class="i_chat">
                      <img class="i_img" src="https://i.ibb.co/StXq4pQ/chat.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.chat_count }}</font>
                    </li>
                  </ul>
                </div>
                <!-- Username area -->
                <div class="username">
                  <ul class="userarea">
                    <li class="userimg">
                      <a href="javascript:void(0)">
                        <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile" />
                      </a>
                    </li>
                    <li class="profilename">{{ con.name }}</li>
                  </ul>
                </div>
                <!-- Content title -->
                <!-- 폰트는 수정 예정 -->
                <div class="contenttitle">{{ con.title }}</div>
              </div>
            </li>
            <!-- 2 -->
            <li class="reviewitem">
              <div class="reviewcontent">
                <div class="reviewimg">
                  <a href="javascript:void(0)"></a>
                  <img class="reimg" src="https://i.pinimg.com/236x/a4/fe/e4/a4fee42124348f87eb2bc7be23088315.jpg" alt="test" />
                </div>
                <!-- Icon area -->
                <div class="icon">
                  <ul class="i_area">
                    <li class="i_heart">
                      <img class="i_img" src="https://i.ibb.co/3YWXDSp/heart.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.heart_count }}</font>
                    </li>
                    <li class="i_chat">
                      <img class="i_img" src="https://i.ibb.co/StXq4pQ/chat.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.chat_count }}</font>
                    </li>
                  </ul>
                </div>
                <!-- Username area -->
                <div class="username">
                  <ul class="userarea">
                    <li class="userimg">
                      <a href="javascript:void(0)">
                        <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile" />
                      </a>
                    </li>
                    <li class="profilename">{{ con.name }}</li>
                  </ul>
                </div>
                <!-- Content title -->
                <!-- 폰트는 수정 예정 -->
                <div class="contenttitle">{{ con.title }}</div>
              </div>
            </li>
            <!-- 3 -->
            <li class="reviewitem">
              <div class="reviewcontent">
                <div class="reviewimg">
                  <a href="javascript:void(0)"></a>
                  <img class="reimg" src="https://i.pinimg.com/236x/92/a1/b3/92a1b360c92d9dac1bda23a7d6413569.jpg" alt="test" />
                </div>
                <!-- Icon area -->
                <div class="icon">
                  <ul class="i_area">
                    <li class="i_heart">
                      <img class="i_img" src="https://i.ibb.co/3YWXDSp/heart.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.heart_count }}</font>
                    </li>
                    <li class="i_chat">
                      <img class="i_img" src="https://i.ibb.co/StXq4pQ/chat.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.chat_count }}</font>
                    </li>
                  </ul>
                </div>
                <!-- Username area -->
                <div class="username">
                  <ul class="userarea">
                    <li class="userimg">
                      <a href="javascript:void(0)">
                        <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile" />
                      </a>
                    </li>
                    <li class="profilename">{{ con.name }}</li>
                  </ul>
                </div>
                <!-- Content title -->
                <!-- 폰트는 수정 예정 -->
                <div class="contenttitle">{{ con.title }}</div>
              </div>
            </li>
            <!-- 4 -->
            <li class="reviewitem">
              <div class="reviewcontent">
                <div class="reviewimg">
                  <a href="javascript:void(0)"></a>
                  <img class="reimg" src="https://i.pinimg.com/236x/67/47/16/674716b1b2e2aa0a1d1bdfd2963d0ac2.jpg" alt="test" />
                </div>
                <!-- Icon area -->
                <div class="icon">
                  <ul class="i_area">
                    <li class="i_heart">
                      <img class="i_img" src="https://i.ibb.co/3YWXDSp/heart.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.heart_count }}</font>
                    </li>
                    <li class="i_chat">
                      <img class="i_img" src="https://i.ibb.co/StXq4pQ/chat.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.chat_count }}</font>
                    </li>
                  </ul>
                </div>
                <!-- Username area -->
                <div class="username">
                  <ul class="userarea">
                    <li class="userimg">
                      <a href="javascript:void(0)">
                        <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile" />
                      </a>
                    </li>
                    <li class="profilename">{{ con.name }}</li>
                  </ul>
                </div>
                <!-- Content title -->
                <!-- 폰트는 수정 예정 -->
                <div class="contenttitle">{{ con.title }}</div>
              </div>
            </li>
            <!-- 5 -->
            <li class="reviewitem">
              <div class="reviewcontent">
                <div class="reviewimg">
                  <a href="javascript:void(0)"></a>
                  <img class="reimg" src="https://i.pinimg.com/236x/85/67/be/8567beb5e679c6482121d506ee421119.jpg" alt="test" />
                </div>
                <!-- Icon area -->
                <div class="icon">
                  <ul class="i_area">
                    <li class="i_heart">
                      <img class="i_img" src="https://i.ibb.co/3YWXDSp/heart.png" alt="heart_icon" />
                    </li>
                    <li class="count">
                      <font>{{ con.heart_count }}</font>
                    </li>
                    <li class="i_chat">
                      <img class="i_img" src="https://i.ibb.co/StXq4pQ/chat.png" alt="chat_icon" />
                    </li>
                    <li class="count">
                      <font>{{ con.chat_count }}</font>
                    </li>
                  </ul>
                </div>
                <!-- Username area -->
                <div class="username">
                  <ul class="userarea">
                    <li class="userimg">
                      <a href="javascript:void(0)">
                        <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile" />
                      </a>
                    </li>
                    <li class="profilename">{{ con.name }}</li>
                  </ul>
                </div>
                <!-- Content title -->
                <!-- 폰트는 수정 예정 -->
                <div class="contenttitle">{{ con.title }}</div>
              </div>
            </li>
          </ul>
          <!-- 네번째 Columns -->
          <ul class="reviewcol">
            <!-- 1 -->
            <li class="reviewitem">
              <div class="reviewcontent">
                <div class="reviewimg">
                  <a href="javascript:void(0)"></a>
                  <img class="reimg" src="https://i.pinimg.com/564x/7c/71/d3/7c71d3bcbc24d5ae5817328b3899ef1d.jpg" alt="test" />
                </div>
                <!-- Icon area -->
                <div class="icon">
                  <ul class="i_area">
                    <li class="i_heart">
                      <img class="i_img" src="https://i.ibb.co/3YWXDSp/heart.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.heart_count }}</font>
                    </li>
                    <li class="i_chat">
                      <img class="i_img" src="https://i.ibb.co/StXq4pQ/chat.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.chat_count }}</font>
                    </li>
                  </ul>
                </div>
                <!-- Username area -->
                <div class="username">
                  <ul class="userarea">
                    <li class="userimg">
                      <a href="javascript:void(0)">
                        <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile" />
                      </a>
                    </li>
                    <li class="profilename">{{ con.name }}</li>
                  </ul>
                </div>
                <!-- Content title -->
                <!-- 폰트는 수정 예정 -->
                <div class="contenttitle">{{ con.title }}</div>
              </div>
            </li>
            <!-- 2 -->
            <li class="reviewitem">
              <div class="reviewcontent">
                <div class="reviewimg">
                  <a href="javascript:void(0)"></a>
                  <img class="reimg" src="https://i.pinimg.com/236x/61/70/41/61704181409d0d430b6f8361ca269daa.jpg" alt="test" />
                </div>
                <!-- Icon area -->
                <div class="icon">
                  <ul class="i_area">
                    <li class="i_heart">
                      <img class="i_img" src="https://i.ibb.co/3YWXDSp/heart.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.heart_count }}</font>
                    </li>
                    <li class="i_chat">
                      <img class="i_img" src="https://i.ibb.co/StXq4pQ/chat.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.chat_count }}</font>
                    </li>
                  </ul>
                </div>
                <!-- Username area -->
                <div class="username">
                  <ul class="userarea">
                    <li class="userimg">
                      <a href="javascript:void(0)">
                        <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile" />
                      </a>
                    </li>
                    <li class="profilename">{{ con.name }}</li>
                  </ul>
                </div>
                <!-- Content title -->
                <!-- 폰트는 수정 예정 -->
                <div class="contenttitle">{{ con.title }}</div>
              </div>
            </li>
            <!-- 3 -->
            <li class="reviewitem">
              <div class="reviewcontent">
                <div class="reviewimg">
                  <a href="javascript:void(0)"></a>
                  <img class="reimg" src="https://i.pinimg.com/236x/61/96/ad/6196addf57d50c52bb1bcd55edef0007.jpg" alt="test" />
                </div>
                <!-- Icon area -->
                <div class="icon">
                  <ul class="i_area">
                    <li class="i_heart">
                      <img class="i_img" src="https://i.ibb.co/3YWXDSp/heart.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.heart_count }}</font>
                    </li>
                    <li class="i_chat">
                      <img class="i_img" src="https://i.ibb.co/StXq4pQ/chat.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.chat_count }}</font>
                    </li>
                  </ul>
                </div>
                <!-- Username area -->
                <div class="username">
                  <ul class="userarea">
                    <li class="userimg">
                      <a href="javascript:void(0)">
                        <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile" />
                      </a>
                    </li>
                    <li class="profilename">{{ con.name }}</li>
                  </ul>
                </div>
                <!-- Content title -->
                <!-- 폰트는 수정 예정 -->
                <div class="contenttitle">{{ con.title }}</div>
              </div>
            </li>
            <!-- 4 -->
            <li class="reviewitem">
              <div class="reviewcontent">
                <div class="reviewimg">
                  <a href="javascript:void(0)"></a>
                  <img class="reimg" src="https://i.pinimg.com/236x/a8/7a/65/a87a654ebd8290c07fd59b3f20d1afa9.jpg" alt="test" />
                </div>
                <!-- Icon area -->
                <div class="icon">
                  <ul class="i_area">
                    <li class="i_heart">
                      <img class="i_img" src="https://i.ibb.co/3YWXDSp/heart.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.heart_count }}</font>
                    </li>
                    <li class="i_chat">
                      <img class="i_img" src="https://i.ibb.co/StXq4pQ/chat.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.chat_count }}</font>
                    </li>
                  </ul>
                </div>
                <!-- Username area -->
                <div class="username">
                  <ul class="userarea">
                    <li class="userimg">
                      <a href="javascript:void(0)">
                        <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile" />
                      </a>
                    </li>
                    <li class="profilename">{{ con.name }}</li>
                  </ul>
                </div>
                <!-- Content title -->
                <!-- 폰트는 수정 예정 -->
                <div class="contenttitle">{{ con.title }}</div>
              </div>
            </li>
            <!-- 5 -->
            <li class="reviewitem">
              <div class="reviewcontent">
                <div class="reviewimg">
                  <a href="javascript:void(0)"></a>
                  <img class="reimg" src="https://i.pinimg.com/236x/f6/80/7b/f6807b48a05996a87db5eaf7a4113449.jpg" alt="test" />
                </div>
                <!-- Icon area -->
                <div class="icon">
                  <ul class="i_area">
                    <li class="i_heart">
                      <img class="i_img" src="https://i.ibb.co/3YWXDSp/heart.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.heart_count }}</font>
                    </li>
                    <li class="i_chat">
                      <img class="i_img" src="https://i.ibb.co/StXq4pQ/chat.png" alt="" />
                    </li>
                    <li class="count">
                      <font>{{ con.chat_count }}</font>
                    </li>
                  </ul>
                </div>
                <!-- Username area -->
                <div class="username">
                  <ul class="userarea">
                    <li class="userimg">
                      <a href="javascript:void(0)">
                        <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile" />
                      </a>
                    </li>
                    <li class="profilename">{{ con.name }}</li>
                  </ul>
                </div>
                <!-- Content title -->
                <!-- 폰트는 수정 예정 -->
                <div class="contenttitle">{{ con.title }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </form>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";

// Import Swiper styles
import '../../node_modules/swiper/swiper.min.css';
import '../../node_modules/swiper/swiper-bundle.css'
import '../../node_modules/swiper/components/navigation/navigation.scss'
import '../../node_modules/swiper/components/pagination/pagination.scss'

SwiperCore.use([Navigation, Pagination, A11y]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  data() {
    return {
      // row 
      contents: [
        {
          id: 1,
          // img: '',
          heart_count: 120,
          chat_count: 130,
          // profileimg: '',
          name: "gorgeous_sh_",
          title: "너무너무 귀엽쥬~"
        }
      ]
    }
  }
}
</script>


<style lang="scss" scope>
@import "~/scss/main";

.cntbody {
  width: 1400px;
  margin: 0 auto;
  .top_title {
  margin-bottom: 30px;
  }
  .searchWrapper {
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  display: inline-block;
  .p_search {
    width: 375px;
    border-bottom: 2px solid black;
    .searchBar {
      width: 355px;
      text-align: left;
      margin-bottom: 3px;
      }
    .reviewSearch_btn {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-70%);
    }
    }
  }
  h4 {
    font-weight: bold;
    text-align: left !important;
    padding-left: 54px;
    margin-bottom: 30px;
  }
  // Weekly swiper scss
  .bodyt {
    width: 1290px;
    margin: auto;
    .swiper-wrapper {
    }
    .contant {
      width: 185px;
      height: 245px;
      overflow: hidden;
      border-radius: 10px;
      .user_name {
        position: absolute;
        left: 8px;
        bottom: 8px;
        z-index: 10;
        color: #fff;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: bold;
      }
      .user_img {
        width: 43px;
        height: 43px;
        position: absolute;
        border: 2px solid #fff;
        border-radius: 50px;
        right: 13px;
        top: 8px;        
      }
      .weekly_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
      border: 22px solid #fff;
      border-radius: 50px;
      // opacity: .7;
    }
    .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
      border: 22px solid #fff;
      border-radius: 50px;
      // opacity: .7;
    }
    .swiper-button-prev:after, .swiper-button-next:after {
      font-size: 15px;
      color: #000;
      font-weight: bold;
    }
  }
  .reviewitems {
    width: 1260px;
    margin: auto;
    margin-top: 50px;
    .reviewcol{
      width: 25%;
      display: inline-block;
      vertical-align: top;
      margin: 0;
      .reviewitem {
        padding: 18px;
        display: block;
        .reviewcontent {
          border: 1px solid #EBEBEB;
          border-radius: 10px 10px 0 0;
          .reviewimg {
            .reimg {
              width: 100%;
              border-radius: 10px 10px 0 0;
            }
          }
          .icon {
            padding: 15px 15px 10px 15px;
            text-align: left;
            .i_area {
              .i_heart {
                display: inline-block;
                margin-right: 0;
                .i_img {
                  width: 100%;
                  height: 100%;
                }
              }
              .i_chat {
                display: inline-block;
                margin-left: 14px;
                .i_img {
                  width: 100%;
                  height: 100%;
                }
              }
              .count {
                display: inline-block;
                vertical-align: middle;
                margin-left: 7px;
                color: #ADADAD;
              }
            }
          }
          .username {
            padding: 0 15px;
            text-align: left;
            .userarea {
              .userimg {
                display: inline-block;
                vertical-align: middle;
                .profileimg {
                  width: 33px;
                  height: 33px;
                  border-radius: 50%;
                }
              }
              .profilename {
                display: inline-block;
                vertical-align: middle;
                margin-left: 12px;
                font-size: 15px;
                color: #222222;
                opacity: 0.8;
              }
            }
          }
        }
        .contenttitle {
          padding: 0 15px;
          font-size: 15px;
          margin: 10px 0 15px 0;
          text-align: left;
        }
      }
    }
  }
}
</style>
