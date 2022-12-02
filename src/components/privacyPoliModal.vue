<template>
	// transition 문법은 상단 문서 참고
  <transition name="modal">
    <section class="modal">
      <div class="modal__window">
        <div class="modal__title">
					<slot name="title">
						<p>12312321</p>
					</slot>
        </div>
        <div class="modal__content">
          <slot name="content">
						<p>12312321</p>
					</slot>
        </div>
        <div class="modal__footer">
          <slot name="footer">
						<p>12312321</p>
					</slot>
        </div>
      </div>
      <div class="modal__overlay" @click.self="$emit('close')"></div>
    </section>
  </transition>
</template>

<style lang="scss" scoped>
@import "~/scss/main";
.modal {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  
  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;

    background-color: black;
    opacity: 0.8;
  }

  &__window {
    width: 30rem;
    height: 40rem;
    border-radius: 0.4rem;
    overflow: hidden;
    padding: 1rem;
    z-index: 1;

    background-color: white;
  }

  &__title {
  }

  &__content {
  }

  &__footer {
  }

	// 상황에 따라 transition 변경가능 enter,leave class는 상단 문서 참고
  &-enter,
  &-leave-to {
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &-enter-to,
  &-leave {
    transition: opacity 0.4s ease;
  }
}
</style>