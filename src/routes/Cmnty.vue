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
						<tr v-for="line in ranking" :key="line">
							<td v-for="item in line" :key="item">{{ item.number }}</td>
							<td></td>
							<td v-for="item in line" :key="item">{{ item.title }}</td>
							<td v-for="item in line" :key="item">{{ item }}</td>
							<td v-for="item in line" :key="item">{{ item }}</td>
							<td v-for="item in line" :key="item">{{ item }}</td>
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
				ranking:[
					{
						number: '3',
						title:'띠뿌띠뿌',
						
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
	th {
		padding : 12px;
		border-top: 1px solid  gray;
	}
	thead {
		border-bottom: 1px solid gray;
	}
	td {
		padding : 12px;
		border-bottom: 1px solid gray;
	}
}
</style>