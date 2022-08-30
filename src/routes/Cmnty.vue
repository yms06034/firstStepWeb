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
		</article>
	</form>
</template>

<style lang="scss" scoped>
	@import "~/scss/main";
</style>