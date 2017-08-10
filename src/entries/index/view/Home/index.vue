<template>
  <div class="">
    {{User}} ---- 新增测试00000------99999
    <button type="button" name="button" @click="getUser">getUser</button>
    <p v-for="(item, index) in arr" :key="index">{{item.name}}</p>
    <son :arr="arr" :name="name"/>
    <son2 :arr="arr" :goson="goson" :name="name" @go="go" @to="go"/>
    ---------------------------------------------
    <div class="" v-for="(item, index) in goson">
      {{item.name}}
    </div>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
import son from './son'
import son2 from './son2'
export default {
  components: {
    son,
    son2
  },
  data () {
    return {
      name: '16666',
      goson: [{
        name: 'goSon'
      }],
      arr: [
        {
          name: '111'
        },
        {
          name: '222'
        }
      ]
    }
  },
  computed: {
    ...mapState(['User']),
    ...mapGetters(['backUser'])
  },
  methods: {
    ...mapActions(['getUser', 'setUser']),
    go (obj) {
      console.log('父子', obj)
      alert('go')
    },
    to () {
      alert('to')
    }
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
