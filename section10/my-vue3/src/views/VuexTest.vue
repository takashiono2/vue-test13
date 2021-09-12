<template>
<div>
  <div>
    VuexTest
  </div>
  <div>
    {{ count }}
  </div>
  <button @click="increment">+</button>
</div> 
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup(){
    const store = useStore()
    const count = computed(()=>{
      return store.state.count//storeから数字を引っ張りだす
    })
    const increment = () =>{
      store.commit('increment')
    }
    return { count,increment }
}
}
</script>

<style>

</style>