<template lang="html">
     <div class="">
       {{$attrs}}
       <p v-for="(item, index) in $attrs.goson" :key="index" @click="change">{{item.name}}</p>
     </div>
</template>

<script>
export default {
  inheritAttrs: false,
  methods: {
    change () {
      this.$set(this.$attrs.goson[0], 'name', '变了没有')
    }
  }
}
</script>

<style lang="css">
</style>
