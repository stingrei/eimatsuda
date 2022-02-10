<template>
  <transition name="page" mode="out-in">
    <div class="right-column-inner">
      <h1 class="title work-detail-title fade-out">{{ this.work.name }}</h1>
      <div class="work-container fade-out">
        <div class="img">
          <img :src="'/'+this.work.mainImage" :alt="this.work.name">
        </div>
        <div class="data-list">
          <div class="data-line" v-for="item in this.work.items">
            <div class="data-key" v-if="item.key!='description'">
              {{ item.key }}
            </div>
            <div class="data-content" v-if="item.key!='description'">
              {{ item.content }}
            </div>
            <div v-if="item.key=='description'" class="description">
              {{ item.content }}
            </div>
          </div>
        </div>
        <div class="sp-img">
          <img :src="'/'+this.work.spImage" :alt="this.work.name">
        </div>
        <div class="link-line">
          <a :href="link.url" v-for="link in this.work.links" target="_blank" class="link">
            {{ link.label }}
          </a>
        </div>

        <router-link to="/works" class="back">Back</router-link>
      </div>



    </div>
  </transition>

</template>

<script>
  import works from '@/assets/data.json';
  export default {
    head(){
        return {
            title: this.work.name + ' | Works',
        }
    },
    data () {
      return {
        works: works,
        work: works.find((v) => v.id == this.$route.params.id)
      }
    },
    mounted: function () {
      let test = document.getElementById('container');
      test.scrollTop = 0;
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
    opacity: 1;
  }

  .work-container {
    width: 85%;
    margin: 0 auto;
    margin-top: 50px;
    @include mq{
      width: calc(771 / 1157)*100%;
    }
    .img {
      border: 3px solid #000;
      padding-top: calc(442 / 771)*100%;
      position: relative;
      overflow: hidden;
      img {
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    .sp-img {
      border: 3px solid #000;
      margin-top: -3px;
      @include mq{
        width: 50%;
      }
    }
    .data-list {
      .data-line {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: -3px;
        font-size: calc(20rem / 10);
        .data-key, .data-content {
          display: inline-block;
          border: 3px solid #000;
          padding: 10px;

        }
        .data-content {
          margin-left: -3px;
        }
        .description {
          border: 3px solid #000;
          width: 100%;
          padding: 7px;
          line-height: 1.6;
          font-size: calc(15rem / 10);
          @include mq{
            max-width: 70%;
          }
        }
      }

    }
    .link-line {
      .link {
        border: 3px solid #000;
        padding: 10px;
        font-size: calc(20rem / 10);
        display: inline-block;
        margin-top: -3px;
        &:nth-child(n+2){
          margin-left: -3px;
        }
      }
    }

    .back {
      margin-top: 50px;
      text-align: center;
      font-size: calc(20rem / 10);
      display: block;

    }

  }
}
</style>

