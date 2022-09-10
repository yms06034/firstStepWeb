<template>
	<form>
		<article>
			<section class="detail-main-wrap">
					<div class="post-info"></div>
			</section>
		</article>
	</form>
</template>
<script>
export default {
	data() {
		return {
			PostDetail : [
				{
					id : 1
					,category : '# 국내/제주'
					,title : '부산'
					,userNm : '첫 걸음'
					,time : '2022.09.10 19:10:01'
					,views : 3000
					,likes : 235
					,replys : 152
					,content : 'Vue is a JavaScript framework for building user interfaces'
				}
			],
			PostReplys : [
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
.detail-main-wrap{
	margin: auto;
	width: 900px;
	.post-info{
		height: 50px;
		border: 1px solid gray;
	}
}
</style>