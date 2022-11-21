<template>
  <form @submit.prevent="onSubmit">
    <article>
      <div class="r_d_container">
        <div class="r_d_content">
          <div class="r_d_content_list">
            <div class="r_d_social_post_detail">
              <div class="r_d_social_user_state">
                <a href="javascript:void(0)" class="user_state">
                  <div class="user_profile_img">
                    <img 
                      src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" 
                      alt="user_profile_img" 
                      class="profile_img" />
                  </div>
                  <!-- a tag structural change -->
                  <div class="user_profile_name">
                    <p class="user_name">gorgeous_sh_</p>
                    <span class="user_up_time">6시간 전</span>
                  </div>
                </a>
              </div>
              <div class="r_d_social_user_img">
                <swiper
                  :slides-per-view="1"
                  :space-between="30"
                  :navigation="true"
                  :pagination="{ type: 'fraction' }"
                  @swiper="onSwiper"
                  @slideChange="onSlideChange">
                  <swiper-slide>
                    <img 
                      class="user_img" 
                      src="https://i.pinimg.com/564x/c3/b2/fa/c3b2fa206fd2d092ce555d537441f98e.jpg" 
                      alt="test_1" />
                  </swiper-slide>
                  <swiper-slide>
                    <img 
                      class="user_img" 
                      src="https://i.pinimg.com/564x/c3/b2/fa/c3b2fa206fd2d092ce555d537441f98e.jpg" 
                      alt="test_1" />
                  </swiper-slide>
                  <swiper-slide>
                    <img 
                      class="user_img" 
                      src="https://i.pinimg.com/564x/c3/b2/fa/c3b2fa206fd2d092ce555d537441f98e.jpg" 
                      alt="test_1" />
                  </swiper-slide>
                </swiper>
              </div>
              <table class="r_d_info">
                <tbody class="r_d_info_tb">
                  <tr class="r_d_info_tr">
                    <th class="r_d_info_dest">여행지</th>
                    <td class="r_d_info_adres">경기도 화성시 송상면 고정리</td>
                  </tr>
                  <tr class="r_d_info_tr">
                    <th class="r_d_info_dest">팬션</th>
                    <td class="r_d_info_adres">OO 애견팬션</td>
                  </tr>
                  <tr class="r_d_info_tr">
                    <th class="r_d_info_dest">인원&가격</th>
                    <td class="r_d_info_adres">2인 / 1박 - 45000원</td>
                  </tr>
                </tbody>
              </table>
              <!-- 좋아요 & 댓글 & 공유 버튼 -->
              <div class="r_d_social_btn">
                <div id="btn_bind" class="btn_bind">
                  <button type="submit" href="javascript:void(0)" class="btn_like" aria-label="좋아요" @click="btn_likeClick()">
                    <img 
                      class="btn_like_img"
                      src="https://i.ibb.co/tQzVN2D/bi-heart.png" 
                      alt="like_btn" />
                  </button>
                  <div ref="clicker_like" class="btn_like_counter"></div>
                  <button type="submit" href="javascript:void(0)" class="btn_commit" aria-label="댓글">
                    <img 
                      class="btn_commit_img" 
                      src="https://i.ibb.co/2dcrNFv/bi-chat.png" 
                      alt="commit_btn" />
                  </button>
                  <div ref="clicker_commit" class="btn_commit_counter">13</div>
                </div>
                <a href="javascript:void(0)" class="r_d_social-share">
                  <img src="https://i.ibb.co/PC5VFCm/fluent-share-ios-28-filled.png" alt="btn_share_img" />
                </a>
              </div>
              <!-- Text Content -->
              <div class="r_d_text_area">
                <p>애견 팬션 미친듯이 좋네요~~ 다들 애견팬션 꼭 여기로 <br />오세요 정말이지 좋아요~~ 💕</p>
              </div>
              <!-- Text Delete Modify button -->
              <div class="r_d_text_buttom">
                <button class="btn_modify">수정</button>
                <button class="btn_delete">삭제</button>
              </div>
            </div>
            <!-- Comments Area -->
            <div class="r_d_comments_area">
              <!-- Comment Text Input -->
              <div class="r_d_comments_content">
                <input 
                  class="r_d_text_input"
                  type="text"
                  placeholder="댓글을 입력해주세요" />
                <button class="r_d_text_btn">
                  댓글 입력
                </button> 
              </div>
              <!-- Comment View Area -->
              <div class="r_d_comments_view">
                <div class="r_d_comments_view_area">
                  <div class="r_d_comments_view_total">
                    <span class="first">댓글</span>
                    <span class="comments_total">152개</span>
                  </div>
                  <div class="com_comment_list">
                    <div class="com_content_area">
                      <div class="com_user_img">
                        <a 
                          class="com_user_img_a" 
                          href="/">
                          <img 
                            class="com_user_img_img" 
                            src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" 
                            alt="" />
                        </a>
                      </div>
                      <div class="com_detail">
                        <div class="main">
                          <span class="user_name">nun_na_najugeo</span>
                          <span class="comment_txt">눈나 미모가 더 미쳤어용</span>
                        </div>
                        <div class="sub">1시간 전</div>
                      </div>
                    </div>
                    <div class="com_content_area">
                      <div class="com_user_img">
                        <a 
                          class="com_user_img_a" 
                          href="/">
                          <img 
                            class="com_user_img_img" 
                            src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" 
                            alt="" />
                        </a>
                      </div>
                      <div class="com_detail">
                        <div class="main">
                          <span class="user_name">nun_na_najugeo</span>
                          <span class="comment_txt">눈나 미모가 더 미쳤어용</span>
                        </div>
                        <div class="sub">1시간 전</div>
                      </div>
                    </div>
                    <div class="com_content_area">
                      <div class="com_user_img">
                        <a 
                          class="com_user_img_a" 
                          href="/">
                          <img 
                            class="com_user_img_img" 
                            src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" 
                            alt="" />
                        </a>
                      </div>
                      <div class="com_detail">
                        <div class="main">
                          <span class="user_name">nun_na_najugeo</span>
                          <span class="comment_txt">눈나 미모가 더 미쳤어용</span>
                        </div>
                        <div class="sub">1시간 전</div>
                      </div>
                    </div>
                    <a class="com_btn_more" href="javascript:void(0)">
                      댓글 더 보기...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="r_d_content_list">
            <div class="r_d_social_post_detail">
              <div class="r_d_social_user_state">
                <a href="javascript:void(0)" class="user_state">
                  <div class="user_profile_img">
                    <img 
                      src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" 
                      alt="user_profile_img" 
                      class="profile_img" />
                  </div>
                  <!-- a tag structural change -->
                  <div class="user_profile_name">
                    <p class="user_name">gorgeous_sh_</p>
                    <span class="user_up_time">6시간 전</span>
                  </div>
                </a>
              </div>
              <div class="r_d_social_user_img">
                <swiper
                  :slides-per-view="1"
                  :space-between="30"
                  :navigation="true"
                  :pagination="{ type: 'fraction' }"
                  @swiper="onSwiper"
                  @slideChange="onSlideChange">
                  <swiper-slide>
                    <img 
                      class="user_img" 
                      src="https://i.pinimg.com/564x/c3/b2/fa/c3b2fa206fd2d092ce555d537441f98e.jpg" 
                      alt="test_1" />
                  </swiper-slide>
                  <swiper-slide>
                    <img 
                      class="user_img" 
                      src="https://i.pinimg.com/564x/c3/b2/fa/c3b2fa206fd2d092ce555d537441f98e.jpg" 
                      alt="test_1" />
                  </swiper-slide>
                  <swiper-slide>
                    <img 
                      class="user_img" 
                      src="https://i.pinimg.com/564x/c3/b2/fa/c3b2fa206fd2d092ce555d537441f98e.jpg" 
                      alt="test_1" />
                  </swiper-slide>
                </swiper>
              </div>
              <table class="r_d_info">
                <tbody class="r_d_info_tb">
                  <tr class="r_d_info_tr">
                    <th class="r_d_info_dest">여행지</th>
                    <td class="r_d_info_adres">경기도 화성시 송상면 고정리</td>
                  </tr>
                  <tr class="r_d_info_tr">
                    <th class="r_d_info_dest">팬션</th>
                    <td class="r_d_info_adres">OO 애견팬션</td>
                  </tr>
                  <tr class="r_d_info_tr">
                    <th class="r_d_info_dest">인원&가격</th>
                    <td class="r_d_info_adres">2인 / 1박 - 45000원</td>
                  </tr>
                </tbody>
              </table>
              <!-- 좋아요 & 댓글 & 공유 버튼 -->
              <div class="r_d_social_btn">
                <div id="btn_bind" class="btn_bind">
                  <button type="submit" href="javascript:void(0)" class="btn_like" aria-label="좋아요" @click="btn_likeClick()">
                    <img 
                      class="btn_like_img"
                      src="https://i.ibb.co/tQzVN2D/bi-heart.png" 
                      alt="like_btn" />
                  </button>
                  <div ref="clicker_like" class="btn_like_counter"></div>
                  <button type="submit" href="javascript:void(0)" class="btn_commit" aria-label="댓글">
                    <img 
                      class="btn_commit_img" 
                      src="https://i.ibb.co/2dcrNFv/bi-chat.png" 
                      alt="commit_btn" />
                  </button>
                  <div ref="clicker_commit" class="btn_commit_counter">13</div>
                </div>
                <a href="javascript:void(0)" class="r_d_social-share">
                  <img src="https://i.ibb.co/PC5VFCm/fluent-share-ios-28-filled.png" alt="btn_share_img" />
                </a>
              </div>
              <!-- Text Content -->
              <div class="r_d_text_area">
                <p>애견 팬션 미친듯이 좋네요~~ 다들 애견팬션 꼭 여기로 <br />오세요 정말이지 좋아요~~ 💕</p>
              </div>
              <!-- Text Delete Modify button -->
              <div class="r_d_text_buttom">
                <button class="btn_modify">수정</button>
                <button class="btn_delete">삭제</button>
              </div>
            </div>
            <!-- Comments Area -->
            <div class="r_d_comments_area">
              <!-- Comment Text Input -->
              <div class="r_d_comments_content">
                <input 
                  class="r_d_text_input"
                  type="text"
                  placeholder="댓글을 입력해주세요" />
                <button class="r_d_text_btn">
                  댓글 입력
                </button> 
              </div>
              <!-- Comment View Area -->
              <div class="r_d_comments_view">
                <div class="r_d_comments_view_area">
                  <div class="r_d_comments_view_total">
                    <span class="first">댓글</span>
                    <span class="comments_total">152개</span>
                  </div>
                  <div class="com_comment_list">
                    <div class="com_content_area">
                      <div class="com_user_img">
                        <a 
                          class="com_user_img_a" 
                          href="/">
                          <img 
                            class="com_user_img_img" 
                            src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" 
                            alt="" />
                        </a>
                      </div>
                      <div class="com_detail">
                        <div class="main">
                          <span class="user_name">nun_na_najugeo</span>
                          <span class="comment_txt">눈나 미모가 더 미쳤어용</span>
                        </div>
                        <div class="sub">1시간 전</div>
                      </div>
                    </div>
                    <div class="com_content_area">
                      <div class="com_user_img">
                        <a 
                          class="com_user_img_a" 
                          href="/">
                          <img 
                            class="com_user_img_img" 
                            src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" 
                            alt="" />
                        </a>
                      </div>
                      <div class="com_detail">
                        <div class="main">
                          <span class="user_name">nun_na_najugeo</span>
                          <span class="comment_txt">눈나 미모가 더 미쳤어용</span>
                        </div>
                        <div class="sub">1시간 전</div>
                      </div>
                    </div>
                    <div class="com_content_area">
                      <div class="com_user_img">
                        <a 
                          class="com_user_img_a" 
                          href="/">
                          <img 
                            class="com_user_img_img" 
                            src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" 
                            alt="" />
                        </a>
                      </div>
                      <div class="com_detail">
                        <div class="main">
                          <span class="user_name">nun_na_najugeo</span>
                          <span class="comment_txt">눈나 미모가 더 미쳤어용</span>
                        </div>
                        <div class="sub">1시간 전</div>
                      </div>
                    </div>
                    <a class="com_btn_more" href="javascript:void(0)">
                      댓글 더 보기...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="r_d_content_list">
            <div class="r_d_social_post_detail">
              <div class="r_d_social_user_state">
                <a href="javascript:void(0)" class="user_state">
                  <div class="user_profile_img">
                    <img 
                      src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" 
                      alt="user_profile_img" 
                      class="profile_img" />
                  </div>
                  <!-- a tag structural change -->
                  <div class="user_profile_name">
                    <p class="user_name">gorgeous_sh_</p>
                    <span class="user_up_time">6시간 전</span>
                  </div>
                </a>
              </div>
              <div class="r_d_social_user_img">
                <swiper
                  :slides-per-view="1"
                  :space-between="30"
                  :navigation="true"
                  :pagination="{ type: 'fraction' }"
                  @swiper="onSwiper"
                  @slideChange="onSlideChange">
                  <swiper-slide>
                    <img 
                      class="user_img" 
                      src="https://i.pinimg.com/564x/c3/b2/fa/c3b2fa206fd2d092ce555d537441f98e.jpg" 
                      alt="test_1" />
                  </swiper-slide>
                  <swiper-slide>
                    <img 
                      class="user_img" 
                      src="https://i.pinimg.com/564x/c3/b2/fa/c3b2fa206fd2d092ce555d537441f98e.jpg" 
                      alt="test_1" />
                  </swiper-slide>
                  <swiper-slide>
                    <img 
                      class="user_img" 
                      src="https://i.pinimg.com/564x/c3/b2/fa/c3b2fa206fd2d092ce555d537441f98e.jpg" 
                      alt="test_1" />
                  </swiper-slide>
                </swiper>
              </div>
              <table class="r_d_info">
                <tbody class="r_d_info_tb">
                  <tr class="r_d_info_tr">
                    <th class="r_d_info_dest">여행지</th>
                    <td class="r_d_info_adres">경기도 화성시 송상면 고정리</td>
                  </tr>
                  <tr class="r_d_info_tr">
                    <th class="r_d_info_dest">팬션</th>
                    <td class="r_d_info_adres">OO 애견팬션</td>
                  </tr>
                  <tr class="r_d_info_tr">
                    <th class="r_d_info_dest">인원&가격</th>
                    <td class="r_d_info_adres">1인 / 1박 - 45000원</td>
                  </tr>
                </tbody>
              </table>
              <!-- 좋아요 & 댓글 & 공유 버튼 -->
              <div class="r_d_social_btn">
                <div id="btn_bind" class="btn_bind">
                  <button type="submit" href="javascript:void(0)" class="btn_like" aria-label="좋아요" @click="btn_likeClick()">
                    <img 
                      class="btn_like_img"
                      src="https://i.ibb.co/tQzVN2D/bi-heart.png" 
                      alt="like_btn" />
                  </button>
                  <div ref="clicker_like" class="btn_like_counter"></div>
                  <button type="submit" href="javascript:void(0)" class="btn_commit" aria-label="댓글">
                    <img 
                      class="btn_commit_img" 
                      src="https://i.ibb.co/2dcrNFv/bi-chat.png" 
                      alt="commit_btn" />
                  </button>
                  <div ref="clicker_commit" class="btn_commit_counter">13</div>
                </div>
                <a href="javascript:void(0)" class="r_d_social-share">
                  <img src="https://i.ibb.co/PC5VFCm/fluent-share-ios-28-filled.png" alt="btn_share_img" />
                </a>
              </div>
              <!-- Text Content -->
              <div class="r_d_text_area">
                <p>애견 팬션 너무너무 좋네요~~ 다들 애견팬션 꼭 여기로 <br />오세요 정말이지 좋아요~~ 💕</p>
              </div>
              <!-- Text Delete Modify button -->
              <div class="r_d_text_buttom">
                <button class="btn_modify">수정</button>
                <button class="btn_delete">삭제</button>
              </div>
            </div>
            <!-- Comments Area -->
            <div class="r_d_comments_area">
              <!-- Comment Text Input -->
              <div class="r_d_comments_content">
                <input 
                  class="r_d_text_input"
                  type="text"
                  placeholder="댓글을 입력해주세요" />
                <button class="r_d_text_btn">
                  댓글 입력
                </button> 
              </div>
              <!-- Comment View Area -->
              <div class="r_d_comments_view">
                <div class="r_d_comments_view_area">
                  <div class="r_d_comments_view_total">
                    <span class="first">댓글</span>
                    <span class="comments_total">152개</span>
                  </div>
                  <div class="com_comment_list">
                    <div class="com_content_area">
                      <div class="com_user_img">
                        <a 
                          class="com_user_img_a" 
                          href="/">
                          <img 
                            class="com_user_img_img" 
                            src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" 
                            alt="" />
                        </a>
                      </div>
                      <div class="com_detail">
                        <div class="main">
                          <span class="user_name">nun_na_najugeo</span>
                          <span class="comment_txt">눈나 미모가 더 미쳤어용</span>
                        </div>
                        <div class="sub">1시간 전</div>
                      </div>
                    </div>
                    <div class="com_content_area">
                      <div class="com_user_img">
                        <a 
                          class="com_user_img_a" 
                          href="/">
                          <img 
                            class="com_user_img_img" 
                            src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" 
                            alt="" />
                        </a>
                      </div>
                      <div class="com_detail">
                        <div class="main">
                          <span class="user_name">nun_na_najugeo</span>
                          <span class="comment_txt">눈나 미모가 더 미쳤어용</span>
                        </div>
                        <div class="sub">1시간 전</div>
                      </div>
                    </div>
                    <div class="com_content_area">
                      <div class="com_user_img">
                        <a 
                          class="com_user_img_a" 
                          href="/">
                          <img 
                            class="com_user_img_img" 
                            src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" 
                            alt="" />
                        </a>
                      </div>
                      <div class="com_detail">
                        <div class="main">
                          <span class="user_name">nun_na_najugeo</span>
                          <span class="comment_txt">눈나 미모가 더 미쳤어용</span>
                        </div>
                        <div class="sub">1시간 전</div>
                      </div>
                    </div>
                    <a class="com_btn_more" href="javascript:void(0)">
                      댓글 더 보기...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="r_d_content_list">
            <div class="r_d_social_post_detail">
              <div class="r_d_social_user_state">
                <a href="javascript:void(0)" class="user_state">
                  <div class="user_profile_img">
                    <img 
                      src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" 
                      alt="user_profile_img" 
                      class="profile_img" />
                  </div>
                  <!-- a tag structural change -->
                  <div class="user_profile_name">
                    <p class="user_name">gorgeous_sh_</p>
                    <span class="user_up_time">6시간 전</span>
                  </div>
                </a>
              </div>
              <div class="r_d_social_user_img">
                <swiper
                  :slides-per-view="1"
                  :space-between="30"
                  :navigation="true"
                  :pagination="{ type: 'fraction' }"
                  @swiper="onSwiper"
                  @slideChange="onSlideChange">
                  <swiper-slide>
                    <img 
                      class="user_img" 
                      src="https://i.pinimg.com/564x/c3/b2/fa/c3b2fa206fd2d092ce555d537441f98e.jpg" 
                      alt="test_1" />
                  </swiper-slide>
                  <swiper-slide>
                    <img 
                      class="user_img" 
                      src="https://i.pinimg.com/564x/c3/b2/fa/c3b2fa206fd2d092ce555d537441f98e.jpg" 
                      alt="test_1" />
                  </swiper-slide>
                  <swiper-slide>
                    <img 
                      class="user_img" 
                      src="https://i.pinimg.com/564x/c3/b2/fa/c3b2fa206fd2d092ce555d537441f98e.jpg" 
                      alt="test_1" />
                  </swiper-slide>
                </swiper>
              </div>
              <table class="r_d_info">
                <tbody class="r_d_info_tb">
                  <tr class="r_d_info_tr">
                    <th class="r_d_info_dest">여행지</th>
                    <td class="r_d_info_adres">경기도 화성시 송상면 고정리</td>
                  </tr>
                  <tr class="r_d_info_tr">
                    <th class="r_d_info_dest">팬션</th>
                    <td class="r_d_info_adres">OO 애견팬션</td>
                  </tr>
                  <tr class="r_d_info_tr">
                    <th class="r_d_info_dest">인원&가격</th>
                    <td class="r_d_info_adres">2인 / 1박 - 45000원</td>
                  </tr>
                </tbody>
              </table>
              <!-- 좋아요 & 댓글 & 공유 버튼 -->
              <div class="r_d_social_btn">
                <div id="btn_bind" class="btn_bind">
                  <button type="submit" href="javascript:void(0)" class="btn_like" aria-label="좋아요" @click="btn_likeClick()">
                    <img 
                      class="btn_like_img"
                      src="https://i.ibb.co/tQzVN2D/bi-heart.png" 
                      alt="like_btn" />
                  </button>
                  <div ref="clicker_like" class="btn_like_counter"></div>
                  <button type="submit" href="javascript:void(0)" class="btn_commit" aria-label="댓글">
                    <img 
                      class="btn_commit_img" 
                      src="https://i.ibb.co/2dcrNFv/bi-chat.png" 
                      alt="commit_btn" />
                  </button>
                  <div ref="clicker_commit" class="btn_commit_counter">13</div>
                </div>
                <a href="javascript:void(0)" class="r_d_social-share">
                  <img src="https://i.ibb.co/PC5VFCm/fluent-share-ios-28-filled.png" alt="btn_share_img" />
                </a>
              </div>
              <!-- Text Content -->
              <div class="r_d_text_area">
                <p>애견 팬션 미친듯이 좋네요~~ 다들 애견팬션 꼭 여기로 <br />오세요 정말이지 좋아요~~ 💕</p>
              </div>
              <!-- Text Delete Modify button -->
              <div class="r_d_text_buttom">
                <button class="btn_modify">수정</button>
                <button class="btn_delete">삭제</button>
              </div>
            </div>
            <!-- Comments Area -->
            <div class="r_d_comments_area">
              <!-- Comment Text Input -->
              <div class="r_d_comments_content">
                <input 
                  class="r_d_text_input"
                  type="text"
                  placeholder="댓글을 입력해주세요" />
                <button class="r_d_text_btn">
                  댓글 입력
                </button> 
              </div>
              <!-- Comment View Area -->
              <div class="r_d_comments_view">
                <div class="r_d_comments_view_area">
                  <div class="r_d_comments_view_total">
                    <span class="first">댓글</span>
                    <span class="comments_total">152개</span>
                  </div>
                  <div class="com_comment_list">
                    <div class="com_content_area">
                      <div class="com_user_img">
                        <a 
                          class="com_user_img_a" 
                          href="/">
                          <img 
                            class="com_user_img_img" 
                            src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" 
                            alt="" />
                        </a>
                      </div>
                      <div class="com_detail">
                        <div class="main">
                          <span class="user_name">nun_na_najugeo</span>
                          <span class="comment_txt">눈나 미모가 더 미쳤어용</span>
                        </div>
                        <div class="sub">1시간 전</div>
                      </div>
                    </div>
                    <div class="com_content_area">
                      <div class="com_user_img">
                        <a 
                          class="com_user_img_a" 
                          href="/">
                          <img 
                            class="com_user_img_img" 
                            src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" 
                            alt="" />
                        </a>
                      </div>
                      <div class="com_detail">
                        <div class="main">
                          <span class="user_name">nun_na_najugeo</span>
                          <span class="comment_txt">눈나 미모가 더 미쳤어용</span>
                        </div>
                        <div class="sub">1시간 전</div>
                      </div>
                    </div>
                    <div class="com_content_area">
                      <div class="com_user_img">
                        <a 
                          class="com_user_img_a" 
                          href="/">
                          <img 
                            class="com_user_img_img" 
                            src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" 
                            alt="" />
                        </a>
                      </div>
                      <div class="com_detail">
                        <div class="main">
                          <span class="user_name">nun_na_najugeo</span>
                          <span class="comment_txt">눈나 미모가 더 미쳤어용</span>
                        </div>
                        <div class="sub">1시간 전</div>
                      </div>
                    </div>
                    <a class="com_btn_more" href="javascript:void(0)">
                      댓글 더 보기...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
import '../../../../node_modules/swiper/swiper.min.css';
import '../../../../node_modules/swiper/swiper-bundle.css'
import '../../../../node_modules/swiper/components/navigation/navigation.scss'
import '../../../../node_modules/swiper/components/pagination/pagination.scss'

SwiperCore.use([Navigation, Pagination, A11y]);

export default {
  components: {
    Swiper,
    SwiperSlide
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
      modules: [Pagination]
    };
  },
  el: '#btn_bind',
  data() {
    return{
      counter: 0,
    }
  },
  methods: {
    btn_likeClick() {
      const clickCounter = this.$refs.clicker_like;
      
      clickCounter.textContent = `${++this.counter}`;

      clickCounter.classList.add('act')
    }
  }
}
</script>

<style lang="scss" scpoe>
@import "~/scss/main";

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
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
  width: 50px;
  height: 30px;
  top:0 ;
  bottom: 0 !important;
  margin-left: 92%;
  margin-top: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000; opacity: .3;
  border-radius: 50px;
  color: #fff;
  font-weight: bold;
}

a:hover {
  color: inherit !important;
  text-decoration: none !important;
}
div {
  margin: 0;
  padding: 0;
}
.r_d_container {
  margin-top: 55px;
  .r_d_content {
    margin: 0 auto;
    padding-bottom: 200px;
    max-width: 730px;
    .r_d_social_post_detail {
      padding-bottom: 30px;
      .r_d_social_user_state {
        padding: 12px 0;
        .user_state {
          display: flex;
          align-content: center;
            .user_profile_name {
              margin-left: 15px;
              .user_name {
                font-size: 17px;
                font-weight: bold;
                letter-spacing: -.32px;
              }
              .user_up_time {
                float: left;
                font-size: 13px;
                color: $time;
              }
            }
          .user_profile_img {
            overflow: hidden;
            position: relative;
            flex-shrink: 0;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            .profile_img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
      .r_d_social_user_img {
        .user_img {
          width: 100%;
          height: auto;
          border-radius: 5px;
        }
      }
      .r_d_info {
        margin-top: 15px;
        width: 100%;
        border-top: 0px solid #eee;
        border-bottom: 1px solid #eee;
        border-collapse: collapse;
        .r_d_info_tb {
          border-top: 1px solid #eee;
          border-right: 1px solid #eee;
          .r_d_info_tr {
            border-bottom: 1px solid #eee;
            .r_d_info_dest {
              background: #f7f7f7;
              color: #777;
              padding: 10px 25px;
              border-top: 1px solid #eee;
              width: 200px;
            }
            .r_d_info_adres {
              color: #333;
              border-bottom: 0px solid #eee;
              padding: 10px 20px;
              border-top: 1px solid #eee;
            }
          }
        }
      }
      .r_d_social_btn {
        display: flex;
        justify-content: space-between;
        margin: 13px 8px 0;
        margin-bottom: 20px;
        .btn_bind {
          display: flex;
          .btn_like {
            color: #ADADAD; 
            margin-right: 10px;           
            &:hover {
              color: #ADADAD !important;
            }
            .btn_like_img {
              margin-right: 8px;
            }

          }
          .btn_like_counter {
            margin-right: 10px;
          }
          .btn_commit {
            color: #ADADAD;
            margin-bottom: 1px;
            &:hover {
              color: #ADADAD !important;
            }
            .btn_commit_img {
              margin: 0 10px 3px 0;
            }
          }
        }
      }
      .r_d_text_area {
        text-align: left;
        line-height: 25px;
        font-size: 16px;
        margin: 0 8px;
        padding-bottom: 25px;
      }
      .r_d_text_buttom {
        text-align: right;
        border-top: 1px solid #D4D4D4;
        .btn_modify {
          padding: 5px 15px;
          border: 1px solid #EBEBEB;
          border-radius: 5px;
          font-size: 14px;
        }
        .btn_delete {
          padding: 5px 15px;
          border: 1px solid #EBEBEB;
          border-radius: 5px;
          margin: 10px 0 0 0;
          margin-left: 10px;
          font-size: 14px;
        }
      }
    }
    .r_d_comments_area {
      width: 730px;
      margin-bottom: 30px;
      .r_d_comments_content {
        width: 100%;
        display: flex;
        margin-bottom: 40px;
        .r_d_text_input {
          border: 1px solid #EBEBEB;
          width: 80%;
          text-align: left;
          padding: 12px 30px;
          border-radius: 5px 0 0 5px;
        }
        .r_d_text_btn {
          background-color: #F3B66D;
          width: 20%;
          border-radius: 0 5px 5px 0;
          color: white;
        }
      }
      .r_d_comments_view {
        .r_d_comments_view_area {
          .r_d_comments_view_total {
              font-weight: bold;
              text-align: left;
              margin-bottom: 20px;
            .first {
              padding-right: 8px;
            }
          }
          .com_comment_list {
            .com_content_area {
              display: flex;
              align-items: center;
              padding: 12px 0;
              .com_user_img {
                width: 34px;
                height: 34px;
                overflow: hidden;
                border-radius: 100%;
                margin-right: 10px;
                position: relative;
                flex-shrink: 0;
                .com_user_img_a {
                  .com_user_img_img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                  }
                }
              }
              .com_detail {
                margin-top: -10px;
                .main {
                  word-break: break-all;
                  display: block;
                  overflow: hidden;
                  .user_name {
                    margin-right: 4px;
                    font-size: 14px;
                    font-weight: 700;
                  }
                  .comment_txt {
                    margin-right: 4px;
                    font-size: 14px;
                    letter-spacing: -.21px;
                  }
                }
                .sub {
                  display: flex;
                  -webkit-box-align: center;
                  align-items: center;
                  // margin-top: 6px;
                  line-height: 14px;
                  font-size: 14px;
                  letter-spacing: -.06px;
                  color: rgba(34, 34, 34, .5);
                }
              }
            }
            .com_btn_more {
              display: flex;
              padding-left: 42px;
              color: rgba(34, 34, 34, .5);
              height: 49px;
              font-size: 14px;
              align-items: center;
              &:hover {
                color: rgba(34, 34, 34, .5) !important;
              }
            }            
          }
        }
      }
    }
  }
}
</style>