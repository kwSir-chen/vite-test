<template>
  {{count}}
  <div><button @click="add">add</button></div>
  <div><button @click="dbAdd">dbAdd</button></div>
  <router-link to="/hello">
    user
  </router-link>
  <div v-for="i in lists" :key="i" :ref="i">{{i}}</div>
</template>

<script>
import _ from "lodash"
let debounceAdd
export default {
    data(){
        return {
            count: 0,
            lists: ['a','b']
        }
    },
    mounted(){
        // console.log(_.VERSION)
        console.log(this.$refs.a)
    }, 
    methods: {
        add(){
            this.count++
        },
        dbAdd(){
            if(!debounceAdd) {
                debounceAdd = _.debounce(()=>{
                    this.count++
                },1000)
                debounceAdd = _.throttle(()=>{
                    this.count++
                },1000)
            }
            debounceAdd()
        }
    }
}
</script>

