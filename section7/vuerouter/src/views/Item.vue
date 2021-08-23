<template><!--1,2へルート-->
  <div>Item
    <>Item1<><br>
    <>Item2<><br>
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  created(){
    console.log('created')
  },
  //ルーティングを監視watch:{
    {
      console.log(to)
      console.log(from)
    }
  }
}
</script>

<style>

</style>