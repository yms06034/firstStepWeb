<template>
  <footer>
    <ul class="footer__link-list">
      <li class="footer__link-list-item">개인정보처리방침</li>
      <li class="footer__link-list-divider"></li>
      <li class="footer__link-list-item">이용약관</li>
      <li class="footer__link-list-divider"></li>
      <li class="footer__link-list-item">청소년 보호정책</li>
    </ul>
    <p>010-0000-0000 | yms06034@gmail.com</p>
    <a 
      href="/"
      target="_self">
      (c) {{ new Date().getFullYear() }} FIRSTSTEP. All Rights Reserved.
    </a>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scope>
@import "~/scss/main";

  footer {
    padding: 30px 0;
    font-size: 15px;
    background-color: #262626;
    color: #666666;
    text-decoration: none;
    text-align: center;
    margin-top: 100px;
    a {
      color: #666666;
      margin: auto;
    }
    p {
      margin-bottom:10px;
      padding-top: 20px;
      border-top: 1px solid #828282;
    }
    .footer__link-list {
      display:flex;
      grid-row-gap: 1.6rem;
      align-items: center;
      justify-content: center;
      li {
        display: flex;
        align-content: center;
      }
      .footer__link-list-divider {
        margin: 0 1.2rem;
        &::before {
          content: "";
          display: block;
          width: 0.1rem;
          height: 1.2rem;
          background-color: #666666;
        }
      }
    }
  }
</style>