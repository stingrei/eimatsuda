<template>
    <nuxt-link to="/about" class="block">
        <div class="texts">
            <h1 class="name">Ei MATSUDA</h1>
            <p class="occupation">
                Front-end developer
            </p>
        </div>
    </nuxt-link>
</template>

<script>
  export default {
    head(){
        return {
            title: 'Home',
        }
    },
    layout: "top",
    name: 'IndexPage',
  }
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_config.scss';
@import '~/assets/sass/_mixins.scss';

.block {
  width: calc(305px / $base-wide-sp)*100%;
  max-width:  969px;
  border: 4px solid $text_color;
  height: calc(745 / 812)*100%;
  margin: auto;
  position: absolute;
  top: 50%;
  left: -5px;
  right: -5px;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: $main_color;
  z-index: 2;
  @include mq{

    height: 539px;

    &:hover {
      &:after {
        margin: 0;
      }
    }
  }
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: $main_color;
    left: 0;
    top: 0;
    z-index: 2;
  }
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: $text_color;
    left: 0;
    top: 0;
    margin: 5% 0 0 5%;
    z-index: 1;
    @include mq{
      margin: 15px 0 0 15px;
      transition: .4s ease;
    }
  }
  .texts {
    text-align: center;
    transform: translateY(8px);
    position: relative;
    z-index: 3;
    .name {
      font-size: calc(36rem / 10);
      font-weight: 400;
      @include mq{
        font-size: calc(48rem / 10);
      }
    }
    .occupation {
      font-size: calc(18rem / 10);
      margin-top: 5px;

    }
  }
}

</style>
