<template>
  <form>
    <article>
      <div class="wrt_container">
        <div class="wrt_col">
          <div class="wrt_bg">
            <div class="wrt_wrap">
              <div class="wrt_hd">
                <select 
                  name="category_reviwe"
                  class="wrt_hd_sel">
                  <option class="wrt_c" value>분류</option>
                  <option 
                    class="wrt_ch"
                    v-for="cate in cates"
                    :key="cate.value">
                    {{ cate.text }}
                  </option>
                </select>
                <input 
                  class="wrt_hd_title"
                  type="text" 
                  name="title" 
                  id="postTitle"
                  placeholder="제목" />
                <input 
                  class="wrt_hd_tag"
                  type="text" 
                  name="title" 
                  id="postTitle"
                  placeholder="태그 : 쉼표(,)를 이용하여 복수 등록" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </form>
</template>

<script>
export default {
  data() {
    return {
      cates: [
      {
        text: "제주도",
        value: "20"
      },
      {
        text: "국내여행",
        value: "21"
      },
      {
        text: "해외여행",
        value: "22"
      },
      {
        text: "일본",
        value: "23"
      },
      {
        text: "데이트코스",
        value: "24"
      },
      {
        text: "애견팬션",
        value: "25"
      },
      {
        text: "카페",
        value: "26"
      },
      {
        text: "맛집탐방",
        value: "27"
      },
    ]
    }
  }
}
</script>

<style lang="scss" scope>
@import "~/scss/main";

.wrt_container {
  padding: 30px 0;
  .wrt_col {
    display: flex;
    .wrt_bg {
      padding: 0;
      max-width: 930px;
      margin: 0 auto;
      overflow-x: hidden;
      font-size: 12px;
      letter-spacing: -0 0.03em;
      background: transparent;
      line-height: 1.5;
      .wrt_wrap {
        border: 1px solid #e5e5e5;
        background: #fff;
        &::before {
          content: "";
          display: table;
        }
        .wrt_hd {
          display: table;
          .wrt_hd_sel {
            width: 100px;
            // height: 48px;
            border-right: 1px solid #f1f1f1;
            color: #999;
            .wrt_c {
              color: #999;
            }
            .wrt_ch {
              color: $black;
            }
          }
          .wrt_hd_title {
            height: 48px;
            text-align: left;
            padding: 0 12px;
            width: 800px;
          }
          .wrt_hd_tag {
            height: 48px;
            text-align: left;
            border-top: 1px solid #f1f1f1;
            padding: 0 12px;
            width: 900px;
          }
        }
      }
    }
  }
}
</style>