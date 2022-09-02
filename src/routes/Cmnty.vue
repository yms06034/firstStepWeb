<template>
	<form @:submit.prevent>
		<article>
			<div>
				<h1 class="top_title">Community</h1>
			</div>
			<div class="top_btn">
				<button type="button" class="p_btn"># All</button>
				<button type="button" class="p_btn"># 게임</button>
				<button type="button" class="p_btn"># 스포츠</button>
				<button type="button" class="p_btn"># 연애/방송</button>
				<button type="button" class="p_btn"># 여행/음식</button>
				<button type="button" class="p_btn"># IT</button>
				<button type="button" class="p_btn"># 유머</button>
				<button type="button" class="p_btn"># 취미/생활</button>
				<button type="button" class="p_btn"># 기타</button>
			</div>

			<section class="section-cmnty-order">
				<div class="div-cmnty-order">
					<select class="cmnty-list-order">
						<option value="order">정렬</option>
						<option value="dis-order">미정렬</option>
					</select>
				</div>
				<div class="search_input">
					<div class="search-selector">
						<span>
							<select>
								<option value="tit-n-con">제목+내용</option>
								<option value="title">제목</option>
								<option value="content">내용</option>
								<option value="writter">글쓴이</option>
							</select>
						</span>
					</div>
					<div class="cmnty-search">
						<input class="searchBar" type="text" placeholder="검색하세요"/>
					</div>
					<button class="postBtn" type="submit">글쓰기</button>
				</div>
			</section>

			<section>
				<table>
					<thead>
							<th v-for="item in header" :key="item" class="thCls">{{ item }}</th>
					</thead>
					<tbody>
						<tr v-for="item in List" :key="item" class="trCls">
							<td class="num">{{ item.no }}</td>
							<td class="title">
								<span class="category">{{ item.category }}</span>
								<a href="javascript:void(0)">{{ item.title }}</a>
							</td>
							<td class="name">
								<div>
									<img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile_img" />
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
						no : 10
						, category : "# 게임"
						, title : "띠부띠부"
						, regId : "admin"
						, regDate : "04-22"
						, views : 100
						, likes : 120
					},
					{
						no : 9
						, category : "# 게임"
						, title : "띠부띠부"
						, regId : "admin"
						, regDate : "04-22"
						, views : 100
						, likes : 120
					},
					{
						no : 8
						, category : "# 게임"
						, title : "띠부띠부"
						, regId : "admin"
						, regDate : "04-22"
						, views : 100
						, likes : 120
					},
					{
						no : 7
						, category : "# 게임"
						, title : "띠부띠부"
						, regId : "admin"
						, regDate : "04-22"
						, views : 100
						, likes : 120
					},
					{
						no : 6
						, category : "# 게임"
						, title : "띠부띠부"
						, regId : "admin"
						, regDate : "04-22"
						, views : 100
						, likes : 120
					},
					{
						no : 5
						, category : "# 게임"
						, title : "띠부띠부"
						, regId : "admin"
						, regDate : "04-22"
						, views : 100
						, likes : 120
					},
					{
						no : 4
						, category : "# 게임"
						, title : "띠부띠부"
						, regId : "admin"
						, regDate : "04-22"
						, views : 100
						, likes : 120
					},
					{
						no : 3
						, category : "# 게임"
						, title : "띠부띠부"
						, regId : "admin"
						, regDate : "04-22"
						, views : 100
						, likes : 120
					},
					{
						no : 2
						, category : "# 게임"
						, title : "띠부띠부"
						, regId : "admin"
						, regDate : "04-22"
						, views : 100
						, likes : 120
					},
					{
						no : 1
						, category : "# 게임"
						, title : "띠부띠부"
						, regId : "admin"
						, regDate : "04-22"
						, views : 100
						, likes : 120
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
		margin-right: 250px;
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