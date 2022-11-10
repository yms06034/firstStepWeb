<template>
  <div id="app">
    <div class="flex">
      <div class="mode-toggle" @click="modeToggle" :class="darkDark">
        <div class="toggle">
          <div id="dark-mode" type="checkbox"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    el: '#app',
    
    data() {
        return {
            darkMode: false
        }
    },
    
    methods: {
        dark() {
            document.querySelector('body').classList.add('dark-mode')
            this.darkMode = true
            this.$emit('dark')
        },

        light() {
            document.querySelector('body').classList.remove('dark-mode')
            this.darkMode = false
            this.$emit('light')
        },

        modeToggle() {
            if(this.darkMode || document.querySelector('body').classList.contains('dark-mode')) {
                this.light()
            } else {
                this.dark()
            }
        },
    },
    
    computed: {
        darkDark() {
            return this.darkMode && 'darkmode-toggled'
        }
    }
}
</script>

<style lang="scss">
$dark: #171717;
$mode-toggle-bg: #262626;

// _base.scss
body {
    background-color: #fff;
    color: $dark;
    transition: background-color .2s ease, color .2s ease;
}


// _dark-mode.scss
body {
    &.dark-mode {
        background-color: lighten($dark, 5%);
        color: #d9d9d9 !important;
        * {
           color: #fff;
           .h_btn:hover {
            color: #fff;
           }
           .profilename {
              color: #d9d9d9 !important;
           }
           .infoUserNm {
            .infoUserNm_f {
              color: #d9d9d9 !important;
           }
           }
           .p_search {
            border-bottom: 2px solid #d9d9d9 !important;
           }
           .infoContent {
            color: #d9d9d9;
           }
           a {
            color: #d9d9d9;
           }
           option {
            color: black;
           }
            .cntbody .review_top_sort_wbtn .review_sort_area .review_sort {
                color: #fff;
                background: url('https://i.ibb.co/HCV097b/dashicons-arrow-down1.png') no-repeat 105% 30%;
            }
            .r_d_container .r_d_content .r_d_social_post_detail .r_d_info .r_d_info_tb .r_d_info_tr .r_d_info_dest {
                color: #d9d9d9;
                background: #171717;
                border-left: 1px solid #eee;
            }
            .r_d_container .r_d_content .r_d_social_post_detail .r_d_info .r_d_info_tb .r_d_info_tr .r_d_info_adres {
                color: #d9d9d9;
            }
        }
    }
}


// _mode-toggle.scss
.mode-toggle {
    display: block; 
    position: fixed; 
    bottom: 35px; 
    right: 30px; 
    z-index: 999; 
    //margin: auto .5rem .5rem auto;
    padding: 0;
    width: 54px;
    height: 34px;
    min-width: 46px;
    min-height: 30px;
    background-color: $mode-toggle-bg;
    border: 2px solid #fff;
    border-radius: 24px;
    outline: 0;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout: none;
    appearance: none;
    transition: background-color .5s ease;

    .toggle {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 3px solid transparent;
        // box-shadow: inset 0 0 0 2px #a5abba;
        overflow: hidden;
        transition: transform .5s ease;

        #dark-mode {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 50%;

            &:before {
                content: '';
                position: relative;
                width: 23px;
                height: 23px;
                top: 2px;
                margin-left: 2px;
                float: left;
                background-repeat: no-repeat;
                background-image: url("https://i.ibb.co/cgxQ36p/ic-sharp-wb-sunny.png");
                transition: border-radius .5s ease, width .5s ease, height .5s ease, left .5s ease, transform .5s ease;
            }
        }
    }
}

body.dark-mode {
    .mode-toggle {
        background-color: lighten($mode-toggle-bg, 5%);
        .toggle {
            transform: translateX(20px);

            #dark-mode {
                &:before {
                    // transform: translate(-10%, -50%), rotate(-35deg);
                  width: 23px;
                  height: 23px;
                  background-image: url('https://i.ibb.co/BZFQZQb/ion-moon.png');
                  background-repeat: no-repeat;
                  top: -0.5px;
                }
            }
        }
    }
}

// DEMO STYLES
</style>