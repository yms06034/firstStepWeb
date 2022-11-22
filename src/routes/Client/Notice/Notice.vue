<template>
	<form @:submit.prevent>
		<article>
			<div>
				<h1 class="top_title">Notice</h1>
			</div>
			<section>
				<table>
					<thead>
							<th v-for="item in header" :key="item" class="thCls">{{ item }}</th>
					</thead>
					<tbody>
						<tr v-for="item in List" :key="item" class="trCls">
							<td class="num">{{ item.no }}</td>
							<td class="title">
								<router-link :to="item.url">
									<span class="title">{{ item.title }}</span>
								</router-link>
							</td>
							<td class="name">
								<div>
									<span>{{ item.regId }}</span>
								</div>
							</td>
							<td class="date">{{ item.regDate }}</td>
							<td class="view">{{ item.views }}</td>
							<td class="like">{{ item.likes }}</td>
						</tr>
					</tbody>
				</table>
			</section>
		</article>
	</form>
</template>

<script>
	export default{
		data() {
			return {
				header: ["번호","제목","글쓴이","작성일","조회수","추천수"] ,
				List:[
					{
						no : "[공지]"
						, category : "# 게임"
						, title : "[2022년] 설 연휴 배송/반품 일정 및 고객센터 휴뮤 안내"
						, regId : "firststep"
						, regDate : "04-22"
						, views : 100
						, likes : 120
						,url : '/Client/Notice/Notice_Detail'
					},
					{
						no : "[공지]"
						, category : "# 게임"
						, title : "띠부띠부"
						, regId : "firststep"
						, regDate : "04-22"
						, views : 100
						, likes : 120
						,url : '/Client/Notice/Notice_Detail'
					},
					{
						no : "[공지]"
						, category : "# 게임"
						, title : "띠부띠부"
						, regId : "firststep"
						, regDate : "04-22"
						, views : 100
						, likes : 120
						,url : '/Client/Notice/Notice_Detail'
					},
					{
						no : 7
						, category : "# 게임"
						, title : "띠부띠부"
						, regId : "firststep"
						, regDate : "04-22"
						, views : 100
						, likes : 120
						,url : '/Client/Notice/Notice_Detail'
					},
					{
						no : 6
						, category : "# 게임"
						, title : "띠부띠부"
						, regId : "firststep"
						, regDate : "04-22"
						, views : 100
						, likes : 120
						,url : '/Client/Notice/Notice_Detail'
					},
					{
						no : 5
						, category : "# 게임"
						, title : "띠부띠부"
						, regId : "firststep"
						, regDate : "04-22"
						, views : 100
						, likes : 120
						,url : '/Client/Notice/Notice_Detail'
					},
					{
						no : 4
						, category : "# 게임"
						, title : "띠부띠부"
						, regId : "firststep"
						, regDate : "04-22"
						, views : 100
						, likes : 120
						,url : '/Client/Notice/Notice_Detail'
					},
					{
						no : 3
						, category : "# 게임"
						, title : "띠부띠부"
						, regId : "firststep"
						, regDate : "04-22"
						, views : 100
						, likes : 120
						,url : '/Client/Notice/Notice_Detail'
					},
					{
						no : 2
						, category : "# 게임"
						, title : "띠부띠부"
						, regId : "firststep"
						, regDate : "04-22"
						, views : 100
						, likes : 120
						,url : '/Client/Notice/Notice_Detail'
					},
					{
						no : 1
						, category : "# 게임"
						, title : "띠부띠부"
						, regId : "firststep"
						, regDate : "04-22"
						, views : 100
						, likes : 120
						,url : '/Client/Notice/Notice_Detail'
					}

				]
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import "~/scss/main";

.section-cmnty-order{
		width: 900px;
		margin: 0 auto;
		display: inline-block;
	.div-cmnty-order{
		float: left;
	}
	.cmnty-list-order{
		width: 50px;
		margin: 0 auto;
		margin-top: 10px;
	}
	.cmnty-search{
		border: 1px solid #EBEBEB;
		padding: 6px 8px;
		border-radius: 10px;
		font-size: 15px;
		display: inline-block;
		margin-bottom: 10px;
		width: 300px;
		margin-right: 20px;
		.searchBar{
			text-align: left;
			width: 285px;
		}
	}
	.search_input {
		float: right;
	}
	.search-selector{
		display: inline-block;
		margin-right: 20px;
	}
}

table {
	width: 900px;
	margin: 0 auto;
	border : 1px solid #eeeeef;
	font-size: 12px;
	th {
		padding : 12px;
		border-top: 1px solid  #eeeeef;
		border-bottom: 1px solid #eeeeef;
	}
	tr{
		border-bottom: 1px solid #eeeeef;
		td {
			line-height: 50px;
		}
		.title {
			text-align: left;
			width: 450px;
		}
		.category {
			margin-right: 18px;
			color: #666;
		}
		.profileimg {
			width: 33px;
			height: 33px;
			border-radius: 50%;
			margin-right: 10px;
		}
	}
}
</style>