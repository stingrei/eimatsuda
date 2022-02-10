<template>
  <transition name="page" mode="out-in">
    <div class="right-column-inner">
      <h1 class="title fade">About</h1>
      <div class="about-block fade">
        <div class="image">
          <img src="/portrait.jpg" alt="about-block">
        </div>
        <div class="name">
          Ei Matsuda
        </div>
        <p>
          Hello <br>
          I'm an Front-end developer based in TOKYO.<br>
          Currently I belong to Rhino inc.
        </p>
        <p>
          Feel free to check my resume.<br>
          If you’d like to chat contact me.
        </p>

        <p class="skills">
          HTML5<br>
          JavaScript (jQuery, vue)<br>
          CSS (Sass, scss)<br>
          PHP(WordPress)
        </p>
        <p class="contact">
          Contact me at:<br>
          <a href="mailto:ei.matsuda.13@gmail.com">ei.matsuda.13@gmail.com</a>
        </p>
        <ul class="sns">
          <li>
            <a href="" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <i class="fab fa-twitter-square"></i>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data(){
      return {
        subtitle: 'この文書はNuxt.jsの基本的な使用方法について説明しています。'
      }
    },
    head(){
        return {
            title: 'About Page',
        }
    },
    mounted: function() {
      let test = document.getElementById('container');
      test.scrollTop = 0;
    }
  }
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_config.scss';
@import '~/assets/sass/_mixins.scss';

.right-column-inner{
  .title {
    text-align: center;
    font-size: calc(40rem / 10);
  }

  .about-block {
    margin: 0 auto;
    margin-top: 36px;
    width: calc(287px / $base_wide_sp)*100%;
    @include mq{
      width: calc(824 / 1153)*100%;
      position: relative;
      margin-top: 56px;
      padding-right: 163px;
    }
    .image {
      width: 163px;
      margin: 0 auto;
      @include mq{
        position: absolute;
        right: 0;
        top: 0;
      }
    }

    .name {
      text-align: center;
      font-size: calc(28rem / 10);
      margin-top: 15px;
      @include mq{
        text-align: left;
      }
    }
    p {
      font-size: calc(18rem / 10);
      line-height: calc(26 / 18);
      margin-top: 30px;
      a {
        text-decoration: underline;
        color: #555;
      }
      &.skills {
        margin-top: 70px;
      }
    }
    .sns {
      display: flex;
      justify-content: flex-start;
      margin-top: 30px;
      li {
        margin-right: 20px;
        a {
          i {
            font-size: calc(30rem / 10);
          }
        }
      }
    }
  }
}
</style>

