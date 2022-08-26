<template>
	<form>
		<article>
			<div>
				<h1>TRAVEL INFORMATION</h1>
			</div>
			<div>
				<input type="button" class="p_btn" value="#All"/>
				<input type="button" class="p_btn" value="#국내/제주"/>
				<input type="button" class="p_btn" value="#동남아"/>
				<input type="button" class="p_btn" value="#일본"/>
				<input type="button" class="p_btn" value="#남태평양"/>
				<input type="button" class="p_btn" value="#극동러시아/중국"/>
				<input type="button" class="p_btn" value="#유럽"/>
				<input type="button" class="p_btn" value="#북미/중남미"/>
			</div>
			
			<div class="searchWrapper">
				<div class="p_search">
					<input type="text" placeholder="검색하세요"/>
					<button type="submit">버튼</button>
				</div>

				<div class="infoOrder">
					<select class="otOrder">
						<option>인기순</option>
						<option>조회수순</option>
					</select>
				</div>
				<button type="submit">글쓰기</button>
			</div>
			<section class="infoList">
				<div v-for="item in List" :key="item" class="listLayout">
					<div class="contentFrom">
						<div class="topInfo">
							<div class="iconWrapper">
								<img class="circle" src="https://img.hankyung.com/photo/201811/01.18376762.1.jpg" alt="iconImg"/>
							</div>
							<!-- 닉네임 & 게시물 등록일 -->
							<div class="infoUsr">
								<div class="infoUserNm">{{ item.name }}</div>
								<div class="infoRegDt">{{ item.time }}</div>
							</div>
						</div>
						<!-- title & content -->
						<div class="infoText">
							<div class="infoTitle">{{ item.title }}</div>
							<div class="infoContent">{{ item.content }}</div>
						</div>
					</div>
					<!-- Thumnail_img -->
					<div class="preView">
						<div class="preImg">
							<img class="imgThumnail" src="https://i.pinimg.com/236x/f3/d9/e4/f3d9e4f1bf5a65f188467b7a5b7a0771.jpg" alt="imfoTestImg" />
						</div>
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
			List : [
				{
					id : 1
					,name : 'kana'
					,time : 'time1'
					,title : '부산'
					,content : '부산 여행'
				},
				{
					id : 2
					,name : 'momo'
					,time : 'time2'
					,title : '서울'
					,content : '서울 여행'
				},
				{
					id : 3
					,name : 'sina'
					,time : 'time3'
					,title : '뉴욕'
					,content : '뉴욕 여행'
				},
				{
					id : 4
					,name : 'kana'
					,time : 'time4'
					,title : '도쿄'
					,content : '도쿄 여행'
				},
				{
					id : 5
					,img : 'img5'
					,name : 'ana'
					,time : 'time5'
					,title : '파리'
					,content : '파리 여행'
				},
				{
					id : 6
					,name : 'han'
					,time : 'time6'
					,title : '런던'
					,content : '런던 여행'
				},
				{
					id : 7
					,name : 'emma'
					,time : 'time7'
					,title : 'LA'
					,content : 'LA 여행'
				},
				{
					id : 8
					,name : 'sam'
					,time : 'time8'
					,title : '로마'
					,content : '로마 여행'
				},
				{
					id : 9
					,name : 'simon'
					,time : 'time9'
					,title : '시드니'
					,content : '시드니 여행'
				},
				{
					id : 10
					,name : 'poll'
					,time : 'time10'
					,title : '베를린'
					,content : '베를린 여행'
				}
			]
		}
	},	
}
</script>

<style lang="scss" scoped>
	@import "~/scss/main";
	.infoOrder{
		display: inline-block;
		margin-right: 10px;
	}
	.infoList{
		width: 1100px;
		margin: auto;
	}
	.infoUsr{
		margin-left: 50px;
		display: inline-block;
		flex-direction: column;
	}
	.infoProfile{
		display: inline-block;
		margin-right: 10px;
		height: 50px;
	}
	.infoUserNm{
		display: inline-block;
		margin-right: 10px;
		height: 25px;
	}
	.infoRegDt{
		height: 25px;
		font-size: 10px;
	}
	.infoText{
		position: absolute;
		transform: translate(0px, 70px);
		clear: left;
		float: left;
		display: flex;
		flex-direction: column;
	}
	.infoTitle{
		margin-left: 10px;
		text-align: left;
		float: left;
		margin-bottom: 7px;
	}
	.infoContent{
		margin-left: 10px;
		text-align: left;
		float: left;
	}
	.listLayout{
		display: table;
		overflow: hidden;
		border-bottom: 1px solid gray;
		padding: 20px 0;
	}
	.circle{
		width: 30px;
		height: 30px;
		border: 15px;
		border-radius: 50%;
	}
	.iconWrapper{
		position: absolute;
		margin: 0 auto;
		padding: 5px;
		max-width: 1170px;
	}
	.searchWrapper{
		text-align: center;
		margin-bottom: 20px;
		border-bottom: 1px solid gray;
	}
	.otOrder{
		margin-left: 20px;
	}
	.contentFrom{
		display: table-cell;
		width : 100%;
	}
	.preView{
		margin-top: 5px;
		display: table-cell;
		align-content: center;
		justify-content: center;
		width : 150px;
		height: 100px;
	}
	.img_thumnail{
		max-width: 100%;
		max-height: 100%;
	}
	.topInfo{
		float: left;
		position: relative;
		margin-bottom: 7px;
	}
</style>