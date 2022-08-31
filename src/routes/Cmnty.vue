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

			<section>
				<div>
					<select class="cmuListOrder">
						<option value="order">정렬</option>
					</select>
				</div>

			</section>
			<section>
				<table>
					<thead>
							<th v-for = "item in header" :key="item">{{ item }}</th>
					</thead>
					<tbody>
						<tr>
							<td v-for="item in List" :key="item">{{ item.no }}</td>
							<td v-for="item in List" :key="item">{{ item.category }}</td>
							<td v-for="item in List" :key="item">{{ item.title }}</td>
							<td v-for="item in List" :key="item">{{ item.regId }}</td>
							<td v-for="item in List" :key="item">{{ item.regDate }}</td>
							<td v-for="item in List" :key="item">{{ item.views }}</td>
							<td v-for="item in List" :key="item">{{ item.likes }}</td>
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
				header: ["번호","","제목","글쓴이","작성일","조회수","추천수"] ,
				List:[
						{
							no : 10
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
	.cmuListOrder{
		width: 700px;
		margin: auto;
		float: left;
		margin-bottom: 10px;
	}
	table{
				width: 1260px;
				margin: 0 auto;
				border : 1px solid #eeeeef;
		th{
			padding : 12px;
			border-top: 1px solid  gray;
		}
		thead{
		border-bottom: 1px solid gray;
		}
		td{
				padding : 12px;
				border-bottom: 1px solid gray;
		}
	}
	
</style>