<template>
	<form @:submit.prevent>
		<article>
			<div>
				<h1 class="top_title">TRAVEL INFORMATION</h1>
			</div>
			<div class="top_btn">
				<button type="button" class="p_btn"># All</button>
				<button type="button" class="p_btn"># 국내/제주</button>
				<button type="button" class="p_btn"># 동남아</button>
				<button type="button" class="p_btn"># 일본</button>
				<button type="button" class="p_btn"># 남태평양</button>
				<button type="button" class="p_btn"># 중앙아시아/중국</button>
				<button type="button" class="p_btn"># 유럽</button>
				<button type="button" class="p_btn"># 북미/중남미</button>
			</div>
			<div class="searchWrapper">
				<div class="info-search">
					<input class="searchBar" type="text" placeholder="검색하세요"/>
				</div>
				<!-- <div class="infoOrder"> -->
					<select class="otOrder">
						<option value="fm">인기순</option>
						<option value="views">조회수순</option>
					</select>
				<!-- </div> -->
				<router-link to="info_Post">
					<button class="postBtn" type="submit">글쓰기</button>
				</router-link>
				
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
								<em class="infoUserNm">
									
										<a class="infoUserNm_f">{{ item.name }}</a>
									
								</em>
								<span class="infoRegDt">{{ item.time }}</span>
							</div>
						</div>
						<!-- title & content -->
						<router-link :to="item.url">
							<div class="infoText">
								<div class="infoTitle">{{ item.title }}</div>
								<div class="infoContent">{{ item.content }}</div>
							</div>
						</router-link>
					</div>
					<!-- Thumnail_img -->
					<div class="preView">
						<router-link :to="item.url">
							<div class="preImg">
								<img class="imgThumnail" src="https://i.pinimg.com/236x/f3/d9/e4/f3d9e4f1bf5a65f188467b7a5b7a0771.jpg" alt="imfoTestImg" />
							</div>
						</router-link>
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
					,name : '귀여운 발랑이'
					,time : '6시간 전'
					,title : '부산'
					,content : 'Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.'
					,url : '/Client/Info/Info_Detail'
				},
				{
					id : 2
					,name : '귀여운 발랑이'
					,time : '6시간 전'
					,title : '부산'
					,content : 'Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.'
					,url : '/Client/Info/Info_Detail'
				},
				{
					id : 3
					,name : '귀여운 발랑이'
					,time : '6시간 전'
					,title : '부산'
					,content : 'Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.'
					,url : '/Client/Info/Info_Detail'
				},
				{
					id : 4
					,name : '귀여운 발랑이'
					,time : '6시간 전'
					,title : '부산'
					,content : 'Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.'
					,url : '/Info_Detail'
				},
				{
					id : 5
					,name : '귀여운 발랑이'
					,time : '6시간 전'
					,title : '부산'
					,content : 'Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.'
					,url : '/Client/Info/Info_Detail'
				},
				{
					id : 6
					,name : '귀여운 발랑이'
					,time : '6시간 전'
					,title : '부산'
					,content : 'Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.'
					,url : '/Client/Info/Info_Detail'
				},
				{
					id : 7
					,name : '귀여운 발랑이'
					,time : '6시간 전'
					,title : '부산'
					,content : 'Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.'
					,url : '/Client/Info/Info_Detail'
				},
				{
					id : 8
					,name : '귀여운 발랑이'
					,time : '6시간 전'
					,title : '부산'
					,content : 'Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.'
					,url : '/Client/Info/Info_Detail'
				},
				{
					id : 9
					,name : '귀여운 발랑이'
					,time : '6시간 전'
					,title : '부산'
					,content : 'Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.'
					,url : '/Client/Info/Info_Detail'
				},
				{
					id : 10
					,name : '귀여운 발랑이'
					,time : '6시간 전'
					,title : '부산'
					,content : 'Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.'
					,url : '/Client/Info/Info_Detail'
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
		width: 900px;
		margin: auto;
	}
	.infoUsr{
		float: left;
		text-align: left;
	}
	.infoProfile{
		display: inline-block;
		margin-right: 10px;
		height: 50px;
	}
	.infoUserNm{
		display: block;
		height: 11px;
		line-height: 15px;
		font-size: 15px;
		.infoUserNm_f {
			color: black;
			&:hover {
				text-decoration: underline;
			}
		}
	}
	.infoRegDt{
		// line-height: 10px;
		font-size: 12px;
		color: #959595;
	}
	.infoText{
		display: block;
	}
	.infoTitle{
		text-align: left;
		float: left;
		overflow: hidden;
		text-overflow: ellipsis;
		display: block;
		width: 600px;
		font-size: 17px;
		font-weight: 700;
		word-wrap: break-word;
	}
	.infoContent{
		text-align: left;
		float: left;
		overflow: hidden;
		text-overflow: ellipsis;
		display: block;
		width: 600px;
		margin-top: 10px;
		font-size: 13px;
		color: #666;
		line-height: 20px;
		word-wrap: break-word;
	}
	.listLayout{
		display: table;
		overflow: hidden;
		border-bottom: 1px solid #eeeeef;
		padding: 25px 0 23px;
		width: 100%;
	}
	.circle{
		width: 33px;
		height: 33px;
		// border: 15px;
		border-radius: 50%;
	}
	.iconWrapper{
		position: relative;
		margin-right: 10px;
		float: left;
	}
	.searchWrapper{
		text-align: center;
		margin-bottom: 20px;
		border-bottom: 1px solid gray;
		.info-search {
			margin-top: 10px;
			margin-left: 20px;
			margin-bottom: 20px;
			display: inline-block;
			border-bottom: 2px solid black;
			text-align: center;
			width: 370px;
			.searchBar{
				text-align: left;
				width: 350px;
			}
		}
	}
	.otOrder{
		margin-left: 20px;
		display: inline-block;
		margin-right: 10px;
	}
	.contentFrom{
		display: table-cell;
		position: relative;
		padding-right: 30px;
	}
	.preView{
		// margin-top: 5px;
		display: table-cell;
		// align-content: center;
		// justify-content: center;
		width : 167px;
		height: 167px;
		vertical-align: top;
		.preImg {
			overflow: hidden;
			display: block;
			position: relative;
			z-index: 10;
			width: 167px;
			height: 167px;
			text-align: center;
		}
	}
	.img_thumnail{
		max-width: 100%;
		max-height: 100%;
	}
	.topInfo{
		float: left;
		position: relative;
		margin-bottom: 15px;
	}
</style>