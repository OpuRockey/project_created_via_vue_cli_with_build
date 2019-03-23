<template>
  <div class="hello">
        This is VuexTestSub {{ this.getComments() }}
        <router-link to="/">Home</router-link> |
  </div>
</template>

<script>
export default {
  name: 'VuexTestSub',
  data(){
      return {
          comments : 'Sub components comments'
      }
  },
  props: {
    
  },
  methods : {
      getComments(){
          this.comments = this.$store.getters.getComments ;
          return this.comments ;
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
