<template>
  <div class="hello">
    This is vuex test -- {{ this.getComments() }}
    <br>  
    <VuexTestSub></VuexTestSub>
  </div>
</template>

<script>

import VuexTestSub from './VuexTestSub'

export default {
  name: 'VuexTest',
  props: {
    
  },
  components : {
     VuexTestSub
  },
  data(){
    return {
        currentComp : 'A new comp',
        comments : 'Local comments'
    }
  },
  beforeCreate(){
      console.log('Before create');
  },
  created(){
      console.log('created');
      this.changeComments();
  },
  beforeMount(){
      console.log('Before mounted');
  },
  mounted(){
      console.log(' mounted');
  },
  beforeUpdate(){
      console.log('Before update');
  },
  updated(){
      console.log('update');
  },
  beforeDestroy(){
      console.log('Before destroy');
  },
  destroyed(){
      console.log('destroyed');
  },
  methods : {
     getComments(){
       return this.comments ;
     },
     changeComments(){
        let self = this ;
        setTimeout(function(){
            self.comments = 'Local comments just changed';
            self.$store.dispatch('changeCommentsAction','Local comments changed the state');
        },7000)
     }
  }
}

//self.$store.dispatch('changeCommentsAction',counter);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
