<template>
	<form>
		<article>
			<section class="detail-container" v-for="item in postDetailList" :key="item">
					<div class="detail-main-wrap">
							<section class="detail-top-wrap">
								<div class="detail-tf-wrap">
									<a class="detail-category">{{ item.category }}</a>
									<p class="detail-title">{{ item.title }}</p>
								</div>
								<div class="detail-tw-wrap">
									<span class="detail-iconWrapper">
										<img class="circle" src="https://img.hankyung.com/photo/201811/01.18376762.1.jpg" alt="iconImg"/>
									</span>
									<span class="detail-time">{{ item.time }}</span>
									<span class="detail-viewsCnt">{{ item.viewsCnt }}</span>
									<span class="detail-likesCnt">{{ item.likesCnt }}</span>
									<span class="detail-reaplysCnt">{{ item.reaplysCnt }}</span>
								</div>
							</section>
							<section class="detail-mid-wrap">
								<img class="contentImg" src="https://cdn.pixabay.com/photo/2022/09/11/15/56/river-7447346_960_720.jpg" alt="contentImg"/>
								
								<div class="detail-content"> <br />{{ item.content }}</div>
							</section>
					</div>
					<div class="detail-sub-wrap">
						<div class="r_d_text_buttom">
							<button class="btn_modify">수정</button>
							<button class="btn_delete">삭제</button>
						</div>
						<div class="detail-sub-group">
							<button class="book-mark-btn" type="submit" value="book-mark">북마크</button>
							<button class="share-btn" type="submit" value="share">공유</button>
						</div>
					</div>
					<div class="detail-like-box-wrap">
						<div class="like-box">
							<button type="submit" href="javascript:void(0)" class="click-to-likes" aria-label="좋아요" @click="btn_likeClick()">
								<img 
                      class="btn_like_img"
                      src="https://i.ibb.co/tQzVN2D/bi-heart.png" 
                      alt="heart_btn" />
							</button>
							<div class="recom">
								<span>추천</span>
								<span class="likeCnt">{{ item.likesCnt }}</span>
							</div>
						</div>
					</div>
			</section>
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
								<div v-for="item in infoReplysList" 
										:key="item"
										class="com_content_area" >
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
											<span class="user_name">{{ item.userNm }}</span>
											<span class="comment_txt">{{ item.replyTime }}</span>
										</div>
										<div class="sub">{{ item.replyContent }}</div>
										<div class="like_dislike_icon">
											<button class="like_btn">
												<img src="https://i.ibb.co/swdZnZt/uiw-like-o.png" alt="LIKEICON" />
											</button>
											<button class="dislike_btn">
												<img src="https://i.ibb.co/9Gj7zG4/uiw-dislike-o.png" alt="DISLIKEICON" />
											</button>
											<div class="reply_area">
												<button class="reply_btn">
													<div class="reply_context">답글</div>
												</button>
											</div>
										</div>
										<div class="rereply_area">
											<button class="rereply_btn">
												<div class="rereply_btn_click">답글보기</div>
											</button>
										</div>
									</div>
								</div>
								<a class="com_btn_more" href="javascript:void(0)">
									댓글 더 보기...
								</a>
							</div>
						</div>
					</div>
				</div>
		</article>
	</form>
</template>
<script>
export default {
	data() {
		return {
			postDetailList : [
				{
					id : 1
					,category : '# 국내/제주'
					,title : '띠부띠부씰이 인기 많은게 아닌데 이렇게 까지 하면 몇글자가 되는거지궁금'
					,userNm : '첫 걸음'
					,time : '2022.09.10 19:10:01'
					,viewsCnt : 3000
					,likesCnt : 235
					,reaplysCnt : 152
					,content : 'Vue is a JavaScript framework for building user interfaces'
				}
			],
			infoReplysList : [
				{
					id : 1
					,userNm : 'momo'
					,userImg : 'https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg'
					,replyContent : 'replyContent1'
					,replyTime : '09.10 20:27:50'
				},
				{
					id : 2
					,userNm : 'sana'
					,userImg : 'https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg'
					,replyContent : 'replyContent2'
					,replyTime : '09.12 20:27:50'
				},
				{
					id : 1
					,userNm : 'shasha'
					,userImg : 'https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg'
					,replyContent : 'replyContent3'
					,replyTime : '09.14 20:27:50'
				}
			],
			infoReReplysList : [
				{
					id : 1
					,replyGroup : 1
					,userNM : 'momo1'
					,replyContent : 'replyContent1'
					,replyTime : '09.10 20:27:50'
				},
				{
					id : 2
					,replyGroup : 1
					,userNM : 'sana2'
					,replyContent : 'replyContent2'
					,replyTime : '09.12 20:27:50'
				},
				{
					id : 1
					,replyGroup : 2
					,userNM : 'shasha3'
					,replyContent : 'replyContent3'
					,replyTime : '09.14 20:27:50'
				}
			]
		}
	}
}
</script>
<style lang="scss" scoped>
.detail-container{
	margin: auto;
	width: 900px;
	.detail-main-wrap{
		height: auto;
		border: 1px solid #EBEBEB;
		.detail-top-wrap{
			margin: 15px;
			overflow: hidden;

			.detail-tf-wrap{
				display: grid;
				width: 100%;
				text-align: left;

				.detail-category{
					float: left;
				}
				.detail-title{
					float: left;
				}
			}

			.detail-tw-wrap{
				float: left;
				.iconWrapper{
					position: relative;
					margin-right: 10px;
					float: left;
				}
				.circle{
					width: 33px;
					height: 33px;
					border-radius: 50%;
				}
				.detail-time{
					margin-right: 10px;
					margin-left: 10px;
				}
				.detail-viewsCnt{
					margin-right: 10px;
				}
				.detail-likesCnt{
					margin-right: 10px;
				}
				.detail-reaplysCnt{
					margin-right: 10px;
				}
			}
		}
		.detail-mid-wrap{
			margin: 0;
			width: 100%;
			border-top: 1px solid #EBEBEB;
			.contentImg{
				margin-top: 20px;
			}
			
		}
	}
	.detail-sub-wrap{
		margin-top: 5px;
		width: 100%;
		justify-content: space-between;
		display: flex;
		.like-box{
			margin: auto;
			width: 200px;
			border : 1px solid #EBEBEB;
		}
		.detail-sub-group{
			.book-mark-btn{
				margin-right: 10px;
			}
		}
	}
	.r_d_text_buttom {
		text-align: right;
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
	.detail-like-box-wrap {
		border-radius: 5px;
		margin: auto;
		display: flex;
		margin-bottom: 30px;

		.like-box{
			margin: auto;
			border: 1px solid #EBEBEB;
			height: 50px;
			display: flex;
			border-radius: 5px;
			.click-to-likes{
				margin-left: 10px;
				margin-right: 5px;
				float: left;
			}
			.recom {
				margin-top: 12px;
				margin-right: 15px;
				.likeCnt {
					margin-left: 5px;
				}
			}
		}
		
	}
	
}
.r_d_comments_area {
	width: 730px;
	margin: auto;
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
			&::placeholder{
				color: rgb(208, 208, 208);
			}
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
					align-items: flex-start;
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
								color: rgba(34, 34, 34, .5);
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
						}
						.like_dislike_icon {
							display: flex;
							.reply_area {
								font-size: 12px;
								margin-left: 10px;
								display: flex;
								align-content: center;
								.reply_btn {
									width: 32px;
									height: 32px;
								}
							}
						}
						.rereply_area {
							display: flex;
							font-size: 13px;
							margin-top: 5px;
							.rereply_btn {
								.rereply_btn_click {
									color: #eb860d;
									font-weight: bold;
								}
							}
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
</style>	