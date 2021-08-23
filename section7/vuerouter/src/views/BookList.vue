<template>
  <div>
    <h1>本の一覧</h1>
    <ul><!--クリックした時、showBookDetail処理、book変数で配列-->
      <li>
        {{ book.title}}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name:'BookList',
  data(){
    return{
      bookIndex: -1,
      books:[
        {id:1, title:'タイトル1', content:'本の内容1'},
        {id:2, title:'タイトル2', content:'本の内容2'},
        {id:3, title:'タイトル3', content:'本の内容3'}
      ]
    }
  },
  //showBookDetail関数で処理、nameは名前付きルート
  methods:{
    
      this.bookIndex = 
      console.log(this.bookIndex)
      this　　　　　　({
        name:,
        params:{
          id: 　　　　　　　　　.id,
          title: 　　　　　　　.title,
          content: 　　　　　　.content
        }
      })
    }
  }
}
</script>

<style>

</style>