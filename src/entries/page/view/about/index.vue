<template>
  <div class="">
    这是m关于我们的222
    <img src="./logo.png" alt="">
    <div class="bg">
      this is bg for test
    </div>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['User']),
    ...mapGetters(['backUser'])
  },
  methods: {
    ...mapActions(['getUser', 'setUser'])
  },
  created () {
    // this.getUser()
  }
}
</script>

<style lang="less">
  @import "./about";
</style>
