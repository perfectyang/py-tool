<template>
  <div class="">
    {{User}}
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
    // this.getUser()
    const on = ['a', 'b', 'c'].includes('a')
    const arr = new Set(['a', 'a', 'b', 'b'])
    console.log('arrarr', arr)
    console.log('onnnn', on)
  }
}
</script>
