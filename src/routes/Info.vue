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
			
			<div class="p_search">
				<input type="text" placeholder="검색하세요"/>
				<button type="submit">버튼</button>
			</div>

			<div class="Info_liOrder">
				<select>
					<option>인기순</option>
					<option>조회수순</option>
				</select>
			</div>
			<button type="submit">글쓰기</button>
			
			
			
		</article>
	</form>
</template>

<style lang="scss" scoped>
	@import "~/scss/main";
</style>