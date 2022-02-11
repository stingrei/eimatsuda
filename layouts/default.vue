<template>
  <transition name="layout" mode="out-in">
    <div class="whole-wrapper">
      <div class="container" id="container">
        <div id="left-column">

          <div class="names">
            <nuxt-link to="/">
              <h1 class="name">Ei MATSUDA</h1>

              <p class="occupation">
                  Front-end developer
              </p>
            </nuxt-link>
          </div>
          <nav class="navigation">
            <ul class="navigation-list">
              <li @click="clickNavigation()">
                <router-link active-class="current" to="/" exact>Home</router-link>
              </li>
              <li @click="clickNavigation()">
                <router-link active-class="current" to="/about" >About</router-link>
              </li>
              <li @click="clickNavigation()">
                <router-link active-class="current" to="/works">Works</router-link>
              </li>
              <li>
                <a href="mailto:ei.matsuda.13@gmail.com" target="_blank">Contact</a>
              </li>
            </ul>
          </nav>

          <div class="close" @click="closeMenu()">
            <i class="fas fa-arrow-left"></i>
          </div>
        </div>
        <div id="right-column" class="wide" v-bind:data-page="this.$route.name">

            <nuxt />

          <!-- <div v-if="this.$route.name === 'article'"> -->
            <!-- <p>{{ this.$route.name }}</p> -->

          <!-- </div> -->
        </div>
        <button class="menu-trigger" @click="openMenu()">
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return{
      isSp: false,
      breakPoint: 980,
      windowWidth: '',
      leftMenu: '',
      rightColumn: '',
      transitionFlag: false,
    }
  },

  methods: {
    openMenu: function(){
      this.leftMenu.classList.add('show');
      if(!this.isSp){
        this.rightColumn.classList.remove('wide');
      }
    },
    closeMenu: function(){
      this.leftMenu.classList.remove('show');
      if(!this.isSp){
        this.rightColumn.classList.add('wide');
      }
    },
    clickNavigation: function(){
      if(this.isSp){
        this.closeMenu();
      }
    }
  },
  mounted: function () {
    this.windowWidth  = window.innerWidth;
    if(this.windowWidth < this.breakPoint){
      this.isSp = true
    }
    this.leftMenu = document.getElementById('left-column');
    this.rightColumn = document.getElementById('right-column');

    if(!this.isSp){
      var that = this;
      setTimeout(function(){
        that.openMenu();
      }, 500);

    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_config.scss';
@import '~/assets/sass/_mixins.scss';


.whole-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

}
.container {
  border: 4px solid #000;
  height: 100%;
  overflow: scroll;
  width: 100%;
  @include mq{
    max-width: $max-width;
    max-height: $max-height;
    height: calc(100vh - 80px);
    width: calc(100% - 80px);
    margin: 0 auto;
    overflow: scroll;
    position: relative;
    &:before {
      content: '';
      width: 300px;
      height: 100vh;
      display: block;
      background: $main-color;
      top: 0;
      right: calc(100% - 40px);
      position: fixed;
      z-index: $z-left-column-cover;
      @media screen and (min-width: 1522px) {
        right: calc(50% + 720px);
      }
    }
    @media screen and (min-width: $max-width) {
      // height: calc(100vh - 80px);
    }
  }

  #left-column {
    background: $text_color;
    color: $main_color;
    width:  238px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    z-index: $z-left-column;
    font-size: calc(24rem / 10);
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: calc(35 / 24);
    transform: translateX(-100%);
    transition: .5s ease;

    @include mq{
      transform: none;
      max-height: $max-height;
      height: calc(100vh - 80px);
      top: 50%;
      transform: translate(-100%, -50%);
      left: 40px;
      @media screen and (min-width: calc($max-width + 80px)) {
        left: calc(50vw - calc($max-width / 2));
      }
    }
    &.show {
      transform: translateX(0%);
      @include mq{
        transform: translate(0%, -50%);
      }
    }

    .names {
      position: absolute;
      left: 0;
      top: 50px;
      text-align: center;
      width: 100%;
      .name {
        font-size: calc(26rem / 10);
      }
      .occupation {
        font-size: 50%;
      }
    }

    .navigation {
      text-transform: uppercase;
      .navigation-list {
        li {
          a {
            position: relative;
            display: inline-block;
            &:before {
              content: '';
              width: 100%;
              height: 4px;
              background: $main_color;
              display: block;
              position: absolute;
              left: 0;
              top: calc(50% - 2px);
              transition: transform .4s ease;
              transform-origin: 0 0;
              transform: scaleX(0);
            }
            &:hover, &.current {
              &:before {
                transform: scaleX(1);
              }
            }
          }
        }
      }
    }

    .close {
      position: absolute;
      left: 0;
      right: 0;
      font-size: calc(26rem / 10);
      margin: 0 auto;
      bottom: 30px;
      text-align: center;
      &:hover {
        cursor: pointer;
      }
    }


  }
  #right-column {
    padding: 70px 0;
    min-height: 100%;
    transition: .4s ease;
    @include mq{
      min-height: 0;
      padding-left: 234px;

      &.wide {
        padding-left: 0;
      }
    }
  }
  .menu-trigger {
    position: fixed;
    background: $main-color;
    border-radius: 0;
    border: 4px solid #000;
    border-top: 3px solid #000;
    border-right: 3px solid #000;
    left: 0;
    bottom: 0;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: #000;
    @include mq{
      left: 40px;
      bottom: 40px;
      &:hover {
        cursor: pointer;
      }
      @media screen and (min-width: 1522px) {
        left: auto;
        right: calc(50% + 675px);
      }
      @media screen and (min-height: 1101px) {
        bottom: auto;
        top: calc(50% + 467px);
      }
    }
  }
}

</style>
