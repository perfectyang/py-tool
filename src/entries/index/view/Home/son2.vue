<template lang="html">
    <div class="" style="background: red;">
          <p v-for="(item, index) in arr" :key="index">{{item.name}}</p>
          <div style="background: green;">
            <grandson2 v-bind="$attrs" v-on="$listeners" />
          </div>
    </div>
</template>

<script>
import grandson2 from './grandson2'
export default {
  components: {
    grandson2
  },
  props: ['arr'],
  inheritAttrs: false
}
</script>

<style lang="css">
</style>
