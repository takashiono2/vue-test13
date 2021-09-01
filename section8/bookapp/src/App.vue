<template>
  <v-app>
  <Header/>
    <v-main>
      <v-container>
        <router-view @add-book-list="addBook"/>
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
    addBook(e) {//子コンポーネントから渡ってくる値をうけとる。
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
    },
    removeBook(x) {
      this.books.splice(x, 1);
      this.saveBooks();
    },
    saveBooks() {
      //保存前に、this.booksをJSON形式に変換し、const parsedに代入
      //localStorageにkey,value形式で保存
      const parsed = JSON.stringify(this.books);
      localStorage.setItem(STORAGE_KEY, parsed);
    }
  }
}
</script>
