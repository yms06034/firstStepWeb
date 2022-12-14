<template>
  <Transition name="modal">
    <div class="modalto modal-overlay" @click.self="$emit('close')">
      <div class="modal_window">
        <div class="modal_content">
          <!-- <slot /> <= SignUP.vue에서 내용 불러올 때 사용 -->
          <div class="page-title">
            <p class="title">댓글 삭제</p>
          </div>
          <div class="page_content">
            <p class="str">해당 댓글을 삭제하시겠습니까?</p>
            <p class="c2">삭제하신 후에는 되돌릴 수 없습니다.</p>
            <p></p>
          </div>
          <div class="page_close-btn">
            <button 
              class="delete_btn"
              @keyup.enter="$emit('close')" 
              @click="openModal">삭제</button>
            <button 
              class="close_btn"
              @keyup.esc="$emit('close')"  
              @click="$emit('close')">취소</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
  <!-- <ConfirmModal @close="closeModal" v-if="confirmmodal" /> -->
  <Transition v-if="confirmmodal" name="modal" appear>
    <div class="confirm_modalto modal-overlay" @click.self="$emit('close')">
      <div class="confirm_modal_window">
        <div class="confirm_modal_content">
          <!-- <slot /> <= SignUP.vue에서 내용 불러올 때 사용 -->
          <div class="confirm_page-title">
            <p class="confirm_title">댓글이 삭제되었습니다.</p>
          </div>
          <div class="confirm_page_close-btn">
            <button 
              class="confirm_close_btn" 
              @keyup.enter="$emit('close')" 
              @click="$emit('close')">확인</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      confirmmodal: false,
    };
  },
  methods: {
    openModal() {
      this.confirmmodal = true;
    },
    closeModal() {
      this.confirmmodal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/scss/main";
@import "~/scss/reset.css";

.modalto {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  .modal_window {
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    position: fixed;
    width: 400px;
    height: 250px;
    // margin: -340px auto 0px -260px;
    // top: 50%;
    // left: 50%;
    z-index: 2010;
    .modal_content {
      position: relative;
      width: 100%;
      background-color: rgb(255, 255, 255);
      .page-title {
        top: 0px;
        left: 0px;
        width: 100%;
        height: auto;
        padding: 30px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        flex-direction: row;
        -webkit-box-pack: start;
        justify-content: center;
        .title {
          font-size: 25px;
          font-weight: bold;
          color: #f3b66d;
          line-height: 1.2;
        }
      }
      .page_content {
        text-align: center;
        overflow: hidden auto;
        position: relative;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: start;
        justify-content: flex-start;
        flex-direction: column;
        width: 100%;
        height: auto;
        padding: 0 30px 0;
        .str {
          font-size: 16px;
        }
        .c2 {
          font-size: 13px;
          color: rgb(154, 154, 154);
        }
      }
      .page_close-btn {
        position: absolute;
        bottom: 0px;
        width: 100%;
        display: flex;
        -webkit-box-pack: justify;
        place-content: center space-between;
        padding: 0 30px 30px 30px;
        justify-content: space-around;
        .delete_btn {
          height: 35px;
          width: 130px;
          text-align: center;
          border: 0px;
          background: #f3b66d;
          font-size: 15px;
          font-weight: bold;
          color: #fff;
          line-height: 1.2;
          border-radius: 5px;
        }
        .close_btn {
          height: 35px;
          width: 130px;
          text-align: center;
          border: 1px solid #f3b66d;
          font-size: 15px;
          font-weight: bold;
          color: #f3b66d;
          line-height: 1.2;
          border-radius: 5px;
        }
      }
    }
  }
}

.confirm_modalto {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .confirm_modal_window {
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    position: fixed;
    width: 400px;
    height: 250px;
    // margin: -340px auto 0px -260px;
    // top: 50%;
    // left: 50%;
    z-index: 2010;
    .confirm_modal_content {
      position: relative;
      width: 100%;
      background-color: rgb(255, 255, 255);
      display: flex;
      .confirm_page-title {
        top: 0px;
        left: 0px;
        width: 100%;
        height: auto;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        flex-direction: row;
        -webkit-box-pack: start;
        justify-content: center;
        .confirm_title {
          font-size: 25px;
          font-weight: bold;
          color: #F3B66D;
          line-height: 1.2;
          padding-bottom: 40px;
        }
      }
      .confirm_page_close-btn {
        position: absolute;
        bottom: 0px;
        width: 100%;
        display: flex;
        -webkit-box-pack: justify;
        place-content: center space-between;
        padding: 0 30px 30px 30px;
        justify-content: space-around;
        .confirm_close_btn {
          height: 35px;
          width: 130px;
          text-align: center;
          border: 1px solid #F3B66D;
          font-size: 15px;
          font-weight: bold;
          color: #F3B66D;
          line-height: 1.2;
          border-radius: 5px;
        }
      }
    }
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>