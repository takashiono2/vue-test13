<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="checkRouteInfo">ルート情報</button><br>
    <button @click="goToHome">Homeに戻る</button>
  </div>
</template>

<script>
export default {
  name:'About',
  methods:{
    checkRouteInfo(){
      console.log(this.$route)
      console.log(this.$route.path)
      console.log(this.$router)
    },
    goToHome(){//ホームへ
    }
  },
  beforeRouteLeave(){
    const checkLeave =　//引数と、'本当にこのページを離れますか?'の注意喚起
    if(checkLeave){
      next()
    } else{
      next(false)
    }
  }
}
</script>
