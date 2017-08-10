<template lang="html">
   <div class="">
     {{name}}
     <button @click="change">change</button>
   </div>
</template>

<script>
export default {
  props: ['arr', 'name'],
  methods: {
    change () {
      this.arr.splice(0, 1)
      this.arr.push({name: '9990000---'})
      // this.name = '9999'
      console.log('this', this.arr)
    }
  }
}
</script>

<style lang="css">
</style>
