<template>
  <form>
    <article>
      <section class="info-post-main-wrap">
        <section class="info-post-first-sub-wrap">
          <div class="info-post-option">
            <select>
              <option value="">분류</option>
              <option value="Korea"># 국내/제주</option>
              <option value="E_S_Asia"># 동남아</option>
              <option value="Japan"># 일본</option>
              <option value="S_"># 남태평양</option>
              <option value="M_Asia"># 중앙아시아/중국</option>
              <option value="Eu"># 유럽</option>
              <option value="America"># 북미/중남미</option>
            </select>
          </div>
          <div class="info-post-title">
            <input type="text" placeholder="제목" />
          </div>
        </section>
        <section class="info-post-first-second-wrap">
          <div class="info-post-content">
            <textarea name="content" cols="100" rows="10" spellcheck="false" wrap="hard"></textarea>
          </div>
        </section>
        <section class="info-post-file">
          <div>
            <input type="file" id="custom-file" class="custom-file" @change="handelFileChange"/>
            <label for="upload-file" class="upload-file">{{ fileName }}</label>
            <label class="file-btn" for="custom-file">업로드</label>
            <span>* 파일 크기 제한: 10MB (확장자 : *.jpeg, *.jpg, *.png,*.gif)</span>
          </div>
        </section>
        <section class="info-post-section">
          <div class="tmp-Strg">
            <button type="submit">임시저장</button>
          </div>
          <div class="file-imp">
            <button type="submit">불러오기</button>
          </div>
          <div class="file-previe">
            <button type="submit">미리보기</button>
          </div>
          <div class="file-save">
            <button class="post-btn" type="submit">등록</button>
          </div>
        </section>
      </section>
    </article>
  </form>
</template>
<script>
export default {
  data() {
    return {
      fileName: "파일 선택",
    };
  },
  methods: {
    handelFileChange(e) {
      this.fileName = e.target.files[0].name;
    },
  },
};
</script>
<style lang="scss" scoped>
.info-post-main-wrap {
  width: 900px;
  margin: auto;
  .info-post-first-sub-wrap {
    height: 30px;
    width: 900px;
    display: flex;
    .info-post-option {
      text-align: center;
      display: inline-block;
      border: 1px solid gray;
    }
    .info-post-title {
      text-align: center;
      display: inline-block;
      width: 785px;
      border: 1px solid gray;
    }
  }
  .info-post-first-second-wrap {
    .info-post-content {
      border: 1px solid gray;
			.content{
				text-align: left;
				resize: none;
				word-wrap: break-word;
			}
    }
  }
  .info-post-file {
    display: flex;
    border: 1px solid gray;
    .custom-file {
      display: none;
    }
    .file-btn {
      margin-left: 10px;
      margin-right: 10px;
      padding: 6px 25px;
      background-color: #ff6600;
      border-radius: 4px;
      color: white;
      cursor: pointer;
    }
    .upload-file {
      border: 1px solid gray;
      background-color: gray;
    }
  }
  .info-post-section {
		height: 45px;
    border: 1px solid gray;
    .tmp-Strg {
			margin-top: 10px;
      display: inline-block;
			margin-right: 20px;
			float: left;
    }
    .file-imp {
			margin-top: 10px;
      display: inline-block;
			margin-right: 20px;
			float: left;
    }
    .file-previe {
			margin-top: 10px;
      display: inline-block;
			margin-right: 20px;
			float: left;
    }
    .file-save {
			margin-top: 5px;
      display: inline-block;
			margin-left: 550px;
			.post-btn{
				margin-left: 10px;
				margin-right: 10px;
				padding: 4px 20px;
				background-color: #ff6600;
				border-radius: 4px;
				color: white;
			}
    }
  }
}
</style>