<template>
  <div class="hello">
    This is vuex test -- {{ this.getComments() }} -- Computed value = {{ comentsLength }} <br>
    {{ this.getData('hello') }}
    <br>  
    <VuexTestSub :somedata="somedata"></VuexTestSub>
  </div>
</template>

<script>

import VuexTestSub from './VuexTestSub'
import { mixin } from '../mixins/mixin'

export default {
  name: 'VuexTest',
  mixins : [mixin],
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
     },
     somedata(param){
         return param || 'tested some data' ;
     }
  },
  computed : {
        comentsLength(){
          return this.comments.length ;
      }
  },
  watch : {
      comments(n,o){
          console.log('New Value -is ', n);
          console.log('Old Value -is ', o);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
