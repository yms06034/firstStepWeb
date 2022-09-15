<template>
  <form>
    <article>
      <div class="wrt_container">
        <div class="wrt_col">
          <div class="wrt_bg">
            <div class="wrt_wrap">
              <div class="wrt_hd">
                <select 
                  name="category_review"
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
              <!-- Text Editor Area -->
              <editor api-key="6d76q584pnvmmzqx4wgfra5fv901ohapji308ne3uxelr9cf" />
              <section class="review-post-file">
                <div class="review_file">
                  <label for="upload-file" class="file_upload" aria-placeholder="파일 선택">{{ fileName }}</label>
                  <label class="file_btn" for="custom-file">업로드_1</label>
                  <input 
                    type="file" 
                    accept="image/*" 
                    id="custom-file" 
                    class="file_upload_hidden"
                    multiple="multiple" 
                    @change="handelFileChange" />
                  <span>* 파일 크기 제한: 10MB (확장자 : *.jpeg, *.jpg, *.png,*.gif)</span>
                </div>
              </section>
              <section class="review-post-section">
                <div class="review_post_btn">
                  <button type="submit">임시저장</button>
                  <button type="submit">불러오기</button>
                  <button type="submit">미리보기</button>
                </div>
                <div class="file-save">
                  <button class="post-btn" type="submit">등록</button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </article>
  </form>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";


export default {
  name: "App",
  components: {
	editor: Editor,
  },
  data() {
    return {
      fileName: "파일 선택",
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
      ],
    }
  },
  methods: {
    handelFileChange(e) {
      this.fileName = e.target.files[0].name;
    },
  }
}
</script>

<style lang="scss" scope>
@import "~/scss/main";

.wrt_container {
  padding: 30px 0;
  margin: 0 auto;
  width: 950px;
  .wrt_col {
    display: flex;
    .wrt_bg {
      padding: 0;
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
            text-align: left;
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
            width: 100%;
          }
        }
        .tox {
          .tox-menubar {
            display: none;
          }
          .tox-statusbar {
            display: none;
          }
        }
        .tox-tinymce {
          border: 1px solid #e5e5e5;
          height: 400px !important;
        }
        .review-post-file {
          text-align: left;
          background-color: #F3F3F3;
          .review_file {
            // display: inline;
            padding: 15px 10px 15px 10px;
            font-size: 14px;
            label {
              margin-bottom: 0 !important;
            }
            .file_upload {
              width: 250px;
              background-color: #DFDFDF;
              padding: 5px;
              border-radius: 5px;
              margin-right: 10px;
              color: #999;
            }
            .file_btn {
              background-color: $primary;
              color: #fff;
              padding: 5px 8px;
              cursor: pointer;
              border-radius: 5px;
              margin-right: 16px;
            }
            .file_upload_hidden {
              position: absolute;
              width: 1px;
              height: 1px;
              padding: 0;
              margin: -1px;
              overflow: hidden;
              clip:rect(0,0,0,0);
              border: 0;
            }        
          }
        }
        .review-post-section {
          display: flex;
          // align-items: center;
          justify-content: space-between;
          padding: 12px;
          align-items: center;
          .review_post_btn {
            display: inline-block;
            button {
              margin-right: 20px;
              font-size: 13px;
              color: #F37171;
              font-weight: bold;
            }
          }
          .file-save {
            display: inline-block;
            font-size: 13px;
            background-color: $primary;
            padding: 5px 30px;
            color: $white;
            border-radius: 5px;
          }
        }
      }
    }
  }
}
</style>
