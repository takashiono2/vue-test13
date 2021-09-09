<template>
  <div>
    Compositiontest
    <p>{{name}}</p>
    <p>{{age}}</p>
    <p>{{number}}</p>
    <p>ref: {{sports}}</p>
    <p>ref: {{nameRef}}</p>
    <p>reactive: {{book.title}}</p>
    <p>reactive: {{book.author[0]}}</p>
    <p>reactiveToRefs: {{ titleRef }}</p>
    <p>reactiveToRefs: {{ authorRef[1] }}</p>
    <button @click="btnClick">クリック</button>
    <p>computed: {{ totalPrice }} </p>
    <div>watch:<input v-model="search"></div>
    <div>watchEffect:<input v-model="searchEffect"></div><!--watchEffect:を表示使う-->
  </div>
</template>

<script>
import {ref,reactive,toRefs,computed,watch,watchEffect,onMounted} from 'vue'//importに追加
export default {
  
  setup(){
    let name = '大谷'
    const age = 30
    const nameRef = ref('錦織')
    const book = reactive({
      title:'タイトル',
      author:['大谷','伊藤']
    })

    const booktoRefs = reactive({
      titleRef:'タイトル2',
      authorRef:['大谷2','伊藤2']
    })

    const item = reactive({
      price: 100,
      number: 1
    })

    const totalPrice = computed(()=>{
      return item.price * item.number
    })

    const btnClick = e => {
      console.log(book.title)
      console.log(e.type)
    }

    const search = ref('')//リアクティブの状態を定義
    watch(search,(newValue,oldValue)=>{
      console.log(`watch: ${search.value}`);
      console.log(`olde: ${oldValue}`);
      console.log(`new: ${newValue}`);
    })

    const searchEffect = ref('') //searchEffectをリアクティブで使う
    watchEffect(()=>{
      console.log(`watchEffect: ${searchEffect.value}`)
    })//watchEffectを使う
    
    onMounted(()=>{//setupの中でcreatedよりタイミングを遅らせる時に使う
      console.log('onMounted')
    })

    console.log('setup')
    console.log(this) //undefined
    console.log(nameRef)
    console.log(nameRef.value)
    
    return {
      name,
      age,
      nameRef,
      book,...toRefs(booktoRefs),
      btnClick,
      item,
      totalPrice,
      search,
      searchEffect
    }//追加する
  },
  data(){
    return {
      number: 1,
      sports: "soccrer"
    }
  },
  created(){
    console.log('created')
    console.log(this)
  },
  mounted(){
    console.log('mounted')
  }
}
</script>

<style>

</style>