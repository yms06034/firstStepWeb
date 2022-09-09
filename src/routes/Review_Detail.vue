<template>
  <form>
    <article>
      <div class="r_d_container">
        <div class="r_d_content">
          <div>
            <div class="r_d_social_post_detail">
              <div class="r_d_social_user_state">
                <a href="javascript:void(0)" class="user_state">
                  <div class="user_profile_img">
                    <img 
                      src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" 
                      alt="user_profile_img" 
                      class="profile_img" />
                  </div>
                  <div class="user_profile_name">
                    <p class="user_name">gorgeous_sh_</p>
                  </div>
                </a>
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
  
}
</script>

<style lang="scss" scpoe>
@import "~/scss/main";
a:hover {
  color: #000 !important;
  text-decoration: none !important;
}
div {
  margin: 0;
  padding: 0;
}
.r_d_container {
  margin-top: 55px;
  .r_d_content {
    margin: 0 auto;
    padding-bottom: 200px;
    max-width: 800px;
    background-color: #fff;
    .r_d_social_post_detail {
      padding-bottom: 40px;
      .r_d_social_user_state {
        padding: 12px 0;
        .user_state {
          display: flex;
          align-content: center;
          .user_profile_img {
            overflow: hidden;
            position: relative;
            flex-shrink: 0;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            .profile_img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .user_profile_name {
            margin-left: 15px;
            padding-top: 5px;
            .user_name {
              font-size: 17px;
              font-weight: bold;
              letter-spacing: -.35px;
            }
          }
        }
      }
    }
  }
}
</style>