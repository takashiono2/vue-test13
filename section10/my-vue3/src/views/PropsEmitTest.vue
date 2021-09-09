<template>
  <div>
    <p>PropsEmitTest</p>
    <p>{{ setupBooks }}</p>
    <ul>
      <li v-for="book in setupBooks" :key="book">
        {{ book.title }}
      </li>
    </ul>
    <p>{{ dataBooks }}</p>
  </div>
</template>

<script>
export default {
  props:{
    setupBooks: Array,
    dataBooks: Array
  },
  setup(props){
    console.log(props.setupBooks[0].title)
    console.log(props.dataBooks)
  }
}
</script>

<style>

</style>