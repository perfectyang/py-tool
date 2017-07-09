<template>
  <div class="">
    {{User}}
    <button type="button" name="button" @click="getUser">getUser</button>
     <group>
        <calendar title="title" v-model="value"></calendar>
      </group>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
import { Group, Calendar } from 'vux'
export default {
  data () {
    return {
      value: ''
    }
  },
  components: {
    Group,
    Calendar
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
