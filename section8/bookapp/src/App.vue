<template>
  <v-app>
  <Header
    @delete-local-storage="deleteLocalStorage"
    />
    <v-main>
      <v-container>
        <router-view 
        :books="books"
        @add-book-list="addBook"
        @update-book-info="updateBookInfo" />
      </v-container>
    </v-main>
  <Footer/>
  </v-app>
</template>

<script>
import Header from '@/global/Header'
import Footer from '@/global/Footer'
const STORAGE_KEY = 'books'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data(){
    return {
      books: [],
      newBook: null
    }
  },
  mounted() {
    if (localStorage.getItem(STORAGE_KEY)) {
      try {
        //localStorage.getItem(STORAGE_KEY)をJSON形式で読み込む、this.booksに代入
        this.books = JSON.parse(localStorage.getItem(STORAGE_KEY));
      } catch(e) {
        localStorage.removeItem(STORAGE_KEY); //なければlocalStorageから削除
      }
    }
  },
  methods: {
    addBook(e) {
      this.books.push({
        id: this.books.length,
        title: e.title,
        image: e.image,
        description: e.description,
        readData:'',
        memo:''
      });
      // this.newBook = '';
      this.saveBooks();
      this.gotoEditPage(this.books.slice(-1)[0].id);//booksの最後のidを引数に
    },
    removeBook(x) {
      this.books.splice(x, 1);
      this.saveBooks();
    },
    saveBooks() {
      const parsed = JSON.stringify(this.books);
      localStorage.setItem(STORAGE_KEY, parsed);
    },
    updateBookInfo(e){
      const updateInfo = {
        id: e.id,
        readDate: e.memo,
        title: this.books[e.id].title,
        image: this.books[e.id].image,
        description: this.books[e.id],description
      }
      this.books.splice(e.id,1,updateInfo)
      this.saveBooks()
      this.$router.push('/')
    },
    gotoEditPage(id){
      this.$router.push(`/edit/${id}`)
    },
    deleteLocalStorage(){
      const isDeleted = '削除してもいいですか？'
      if(window.confirm(isDeleted)){//警告ダイアログ
        localStorage.setItem(STORAGE_KEY,'');//STORAGE_KEYで空を登録
        localStorage.removeItem(STORAGE_KEY);//STORAGE_KEYを削除
        this.books=[]
        window.location.reload();//再読み込み
      }
    },
  }
}
</script>
