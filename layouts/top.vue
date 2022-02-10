<template>
  <transition name="layout" mode="out-in">
    <div id="main">
      <nuxt />
    </div>
  </transition>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#main {
  display: block;
  height: 100vh;
  position: relative;
  // max-width: 1440px;
}

</style>
