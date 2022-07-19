<template>
  <transition name="page" mode="out-in">
    <div class="right-column-inner">
      <h1 class="title works-title fade-in">Work</h1>
      <div class="works-block fade-in">
        <ul class="works-list">
          <li v-for="work in works" :key="work.id">
            <nuxt-link :to="{ name: 'works-id', params: { id: work.id } }" :data-works="work.id" v-if="!work.nameForList">
              {{ work.name }}
            </nuxt-link>
            <nuxt-link :to="{ name: 'works-id', params: { id: work.id } }" :data-works="work.id" v-if="work.nameForList">
              {{ work.nameForList }}
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="works-block-bg-images pc">
        <div v-for="work in works" :key="work.id" class="bg" :data-works-bg="work.id" :style="'background-image: url(/'+work.background+');'">
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
  import works from '@/assets/data.json';
  export default {
    data () {
      return {
        works: works
      }
    },
    head(){
        return {
            title: 'Works Page',
        }
    },
    mounted: function () {
      let test = document.getElementById('container');
      test.scrollTop = 0;

      let elements = document.querySelectorAll("[data-works]");
      elements.forEach(el=>{
          console.log(el);
          el.addEventListener('mouseenter', function(){

          let target = document.querySelector('[data-works-bg="'+ el.dataset.works +'"]');
          target.classList.add('hover');
         })

          el.addEventListener('mouseleave', function(){

          let target = document.querySelector('[data-works-bg="'+ el.dataset.works +'"]');
          target.classList.remove('hover');
         })
      })
    }
  }
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_config.scss';
@import '~/assets/sass/_mixins.scss';

.right-column-inner{
  position: relative;
  .title {
    text-align: center;
    font-size: calc(40rem / 10);
    position: relative;
    z-index: 2;
  }
  .works-block {
    margin: 0 auto;
    margin-top: 36px;
    position: relative;
    z-index: 2;
    @include mq{
      width: calc(824 / 1153)*100%;
      margin-top: 50px;
    }
    .works-list {
      li {
        text-align: center;
        margin-bottom: 15px;
        @include mq{
          text-align: left;
          margin-bottom: 18px;
        }
        a {
          display: inline-block;
          border: 2px solid #000;
          font-size: calc(30rem / 10);
          padding: 13px 15px 9px;
          background: $main-color;
          @include mq{
            font-size: calc(40rem / 10);
          }
        }
      }
    }
  }
  .works-block-bg-images {
    max-width: $max-width;
    max-height: $max-height;
    height: calc(100vh - 80px);
    width: calc(100% - 80px);
    margin: 0 auto;
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    bottom: 0;
    margin: 0 auto;
    z-index: 0;
    padding-left: 238px;
    overflow: hidden;
    .bg {
      width: calc(100% - 238px);
      height: 0;
      position: absolute;
      left: 238px;
      right: 0;
      margin: 0 auto;
      top: 0;
      padding-top: 100%;
      background-size: 100% auto;
      background-repeat: repeat-y;
      background-color: $main-color;
      background-blend-mode: luminosity;
      opacity: 0;
      transition: .1s ease;
      &.hover {
        opacity: .3;
      }
    }
  }
}
#right-column {
  &.wide {
    .right-column-inner {
      .works-block-bg-images {
        padding-left: 0;
        .bg {
          width: 100%;
          left: 0;
        }
      }
    }
  }
}
</style>

