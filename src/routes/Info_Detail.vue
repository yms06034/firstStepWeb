<template>
	<form>
		<article>
			<section class="detail-container">
					<div class="detail-main-wrap" v-for="item in postDetailList" :key="item">
							<section class="detail-top-wrap">
								<div class="detail-category">{{ item.category }}</div>
								<div class="detail-title">{{ item.title }}</div>
								<div class="detail-iconWrapper">
									<img class="circle" src="https://img.hankyung.com/photo/201811/01.18376762.1.jpg" alt="iconImg"/>
								</div>
								<div class="detail-time">{{ item.time }}</div>
								<div class="detail-viewsCnt">{{ item.viewsCnt }}</div>
								<div class="detail-likesCnt">{{ item.likesCnt }}</div>
								<div class="detail-reaplysCnt">{{ item.reaplysCnt }}</div>
							</section>
							<section class="detail-mid-wrap">
								<div class="detail-content">{{ item.content }}</div>
							</section>
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
					,title : '부산'
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
			overflow: hidden;
			.detail-category{
				float: left;
			}
			.detail-title{
				float: left;
			}
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
		}
	}
}
</style>