<template lang="html">
    <div class="" style="border: 1px solid #ff6161; padding: 20px;">
      <!-- {{$attrs}} -->
      <!-- <p v-for="(item, index) in $attrs.goson" @click="go">{{item.name}}</p> -->
      <grandsonson2 v-bind="$attrs" v-on="$listeners" />
    </div>
</template>

<script>
import grandsonson2 from './grandsonson2'
export default {
  components: {
    grandsonson2
  },
  inheritAttrs: false,
  methods: {
    go () {
      this.$listeners.go({name: '999'})
    }
  }
}
</script>

<style lang="css">
</style>
