import { computed } from 'vue'//何をimportするか
export default function useCounter(item){//何の関数を登録するか
    const increment = () => {
      item.amount++;
    }
    const decrement = () => {
      item.amount--;
    }
    const totalPrice = computed(() => {
      return item.price * item.amount
    })
  return { increment,decrement,totalPrice }
    
  }