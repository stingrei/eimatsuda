<template>
  <transition name="page" mode="out-in">
    <div class="right-column-inner">
      <h1 class="title fade">About</h1>
      <div class="about-block fade">
        <div class="image">
          <img src="/portrait_new.jpg" alt="ei matsuda">
        </div>
        <div class="name">
          Ei Matsuda
        </div>
        <p>
          Hello <br>
          An experienced Front-end developer based in TORONTO moved from TOKYO.<br>
          Good at developping web pages with high quality and high speed.
        </p>
        <p>
          Feel free to check my <a href="/resume/eimatsuda.pdf" target="_blank">resume</a>.<br>
          If you’d like to chat, contact me.
        </p>

        <p class="skills">
          I'm familiar with<br>
          HTML5<br>
          JavaScript (jQuery, vue, nuxt)<br>
          CSS (Sass, scss)<br>
          PHP(WordPress)<br>
          gulp, npm<br>
          photoshop, illustrator, XD,　figma<br>
          Git, Google Analytics, Google ad manager, SEO
        </p>

        <p>
          I'd worked in <a href="http://www.rhino-inc.jp/" target="_blank">Rhino inc.</a> before I came to TORONTO.
        </p>
        <p class="contact">
          Contact me at:<br>
          <a href="mailto:ei.matsuda.13@gmail.com">ei.matsuda.13@gmail.com</a>
        </p>
        <ul class="sns">
          <li>
            <a href="https://www.instagram.com/wtf_shouldidowithmylife/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/stingr_ei" target="_blank">
              <i class="fab fa-twitter-square"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/ei.matsuda/" target="_blank">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ei-matsuda-636a9922b/" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
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
      padding-right: 173px;
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
        color: #C36F21;
        &:hover {
          text-decoration: none;
        }
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
          &:hover {
            color: #C36F21;
          }
        }
      }
    }
  }
}
</style>

