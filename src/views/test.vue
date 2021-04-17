<template>
  <div id="flip-list-demo">
    <button @click="shuffle">Shuffle</button>
    <button @click="preAdd">头部插入</button>
    <transition-group name="flip-list" tag="ul" @enter="enter"  @leave="leave">
      <li v-for="(item,index) in items" :key="index">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  methods: {
    shuffle() {
      this.items = _.shuffle(this.items)
    },
    enter(el){
      console.log(el)
    },
    leave(el){
      console.log(el)
    },
    preAdd(){
      this.items.unshift(this.items.length+1)
    }
  }
}
</script>

