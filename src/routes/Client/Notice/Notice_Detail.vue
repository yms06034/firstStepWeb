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
									<span class="detail-username">{{ item.userNm }}</span>
									<span class="detail-time">{{ item.time }}</span>
									<span class="detail-viewsCnt">{{ item.viewsCnt }}</span>
									<span class="detail-likesCnt">{{ item.likesCnt }}</span>
								</div>
							</section>
							<section class="detail-mid-wrap">
								<img class="contentImg" src="https://cdn.pixabay.com/photo/2022/09/11/15/56/river-7447346_960_720.jpg" alt="contentImg" />
								<div class="detail-content"> <br />{{ item.content }}</div>
							</section>
					</div>
					<div class="detail-sub-wrap">
						<div class="r_d_text_buttom">
							<button class="btn_modify">수정</button>
							<button class="btn_delete">삭제</button>
						</div>
						<div class="detail-sub-group">
							<button class="share-btn" type="submit" value="share">
                <img src="https://i.ibb.co/PC5VFCm/fluent-share-ios-28-filled.png" alt="btn_share_img" />
              </button>
						</div>
					</div>
			</section>
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
					,title : '[2022년] 설 연휴 배송/반품 일정 및 고객센터 휴뮤 안내'
					,userNm : 'FIRSTSTEP'
					,time : '2022.09.10 19:10:01'
					,viewsCnt : 3000
					,likesCnt : 235
					,reaplysCnt : 152
					,content : '넌 한숨만 또 한숨만 긴 침묵이 흐르고 차가워진 이 바람엔 우리가 써있어 먼 계절을 견뎌낸 사랑이 이젠 지쳐 멈추나봐 네 마음도 결국엔 지나 봐 이렇게 우린 끝인가 봐 Bad Love Bad Love Bad Love'
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
		border-top: 1px solid #EBEBEB;
		border-bottom: 1px solid #EBEBEB;
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
          font-size: 16px;
          margin-bottom: 5px;
          font-weight: 600;
				}
			}

			.detail-tw-wrap{
				float: left;
        font-size: 14px;
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
        .detail-username {
          &::after {
            content: "|";
            margin-left: 10px;
          }
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
      padding: 20px 0;
			.contentImg{
				// margin-top: 20px;
			}
			
		}
	}
	.detail-sub-wrap{
		margin-top: 13px;
		width: 100%;
		justify-content: space-between;
		display: flex;
		.like-box{
			margin: auto;
			width: 200px;
			border : 1px solid #EBEBEB;
		}
		.detail-sub-group{
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
			margin-left: 10px;
			font-size: 14px;
		}
	}
}
</style>	