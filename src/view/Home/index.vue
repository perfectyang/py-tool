<template>
  <div class="">
    {{User}}
    <span>试试撒</span>
    <button type="button" name="button" @click="getUser">getUser</button>
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
    // this.setUser({
    //   info: 'user'
    // })
    // this.getUser()
  }
}
</script>

<style lang="css">
</style>
