<template>
  <div>
    <p>本の詳細</p>
    <p>タイトル： {{ title }}</p>
    <p>本の内容：{{ content }} </p>
    {{ books[bookIndex].title }}
  </div>
</template>

<script>
export default {
  name:'BookDetail',//以下、props（id、title,contentの型設定
  props:{

  },
  data(){
    return{
     //bookIndexをパラメータを使う
       books:[
        {id:1, title:'タイトル1', content:'本の内容1'},
        {id:2, title:'タイトル2', content:'本の内容2'},
        {id:3, title:'タイトル3', content:'本の内容3'}
      ]
    }
  },
  {//コンポーネントが読み込まれるタイミングで生成
    if(this.$route.params.id > this.books.length){
  //'/book'へ飛ばしたい
    }
  }
}
</script>

<style>

</style>