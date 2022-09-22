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
								<div class="detail-content">{{ item.content }}</div>
							</section>
					</div>
					<div class="detail-sub-wrap">
						<div class="like-box">
							<button class="click-to-likes">하트</button>
							<span>추천</span>
							<span>{{ item.likesCnt }}</span>
						</div>
						<div class="detail-sub-group">
							<button class="book-mark-btn" type="submit" value="book-mark">북마크</button>
							<button class="share-btn" type="submit" value="share">공유</button>
						</div>
					</div>
			</section>
			<section class="detail-reply-container">
				<div class="detail-reply-main-wrap" v-for="reply in postReplysList" :key="reply">
					<ui class="detail-reply-list">
						<li id="{{ reply.id }}">
							<div class="reply-info">
								<div class="iconWrapper">
									<img class="circle" src="https://img.hankyung.com/photo/201811/01.18376762.1.jpg" alt="iconImg"/>
								</div>
							</div>
							<div class="reply-title">
								<p>{{ reply.replyContent}} </p>
							</div>
						</li>
					</ui>
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
			postReplysList : [
				{
					id : 1
					,userNM : 'momo'
					,replyContent : 'i love vue.js'
					,replyTime : '09.10 20:27:50'
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
		border: 1px solid gray;
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
			border-top: 1px solid gray;
			.contentImg{
				margin-top: 20px;
			}
			
		}
	}
	.detail-sub-wrap{
		margin-top: 5px;
		width: 100%;
		display: inline-flex;
		.like-box{
			margin: auto;
			width: 200px;
			border : 1px solid gray;
		}
		.detail-sub-group{
			.book-mark-btn{
				margin-right: 10px;
			}
		}
	}
}
.detail-reply-container{
	.detail-reply-main-wrap{
		.detail-reply-list{
			list-style: none;
			padding-left: 0px;
		}
	}
}
</style>