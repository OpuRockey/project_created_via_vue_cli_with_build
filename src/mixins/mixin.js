export const mixin = {
    created(){
        console.log('Hello ! the mixin is called just');
    },
    methods : {
        getData(param){
            return param ;
        }
    }
}