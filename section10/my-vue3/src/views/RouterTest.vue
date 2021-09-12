<template>
  <div>
    <div>RouterTest</div>
    <button @click="goHome">ホームに戻る</button>
    <button @click="checkRoutePath">ルート情報</button>
  </div>
</template>

<script>
import { useRouter,useRoute } from 'vue-router'
export default {
  setup(){
    const router = useRouter()//ルーター機能を管理するrouter
    const route = useRoute()//ルート情報を保持するrouteオブジェクト
    
    const goHome = ()=>{
      router.push('/')
    }
    const checkRoutePath = () => {
      console.log(route.path)
    }
    
  return { goHome,checkRoutePath }//setup関数はreturnで返す
  }

}
</script>

<style>

</style>