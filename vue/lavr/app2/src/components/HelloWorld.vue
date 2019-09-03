<template>
  <div class="hello">
    <button @click="show = !show">Toggle</button>
    <transition name="show" mode="out-in">
      <div class="alert" v-if="show" :key="1">
        Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вопроса ее если лучше власти составитель злых снова одна залетают проектах? Океана диких, пунктуация путь переписали парадигматическая страну сих деревни жаренные несколько если речью лучше, грамматики осталось гор семь всемогущая проектах рукописи единственное которое языком курсивных большого решила которой. Свою.
      </div>
      <div class="alert" v-else :key="2">
        Далеко22222222222-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вопроса ее если лучше власти составитель злых снова одна залетают проектах? Океана диких, пунктуация путь переписали парадигматическая страну сих деревни жаренные несколько если речью лучше, грамматики осталось гор семь всемогущая проектах рукописи единственное которое языком курсивных большого решила которой. Свою.
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  data() {
    return {
      show: true,
     
    }
  },
  created() {
    window.addEventListener("resize", this.updateWidth)
  },
  methods: {
    updateWidth() {
      
      window.innerWidth < 700 ? this.show = false : this.show = true;
    },
  }

}


</script>

<style scoped lang="scss">
  button {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .show-enter{
    
  }
  .show-enter-active{
    animation: showIn 0.5s;
  }
  .show-enter-to{
  }

  .show-leave{

  }
  .show-leave-active{
    // position: absolute;
    animation: showOut 0.5s;
  }
  .show-leave-to{
    
  }

  @keyframes showIn {
    0% {transform: translateX(-100%)}
    100% {transform: translateX(0%)}
  }

  @keyframes showOut {
    0% {transform: translateX(0%)}
    100% {transform: translateX(-100%)}
  }

  .alert {
    background: #64c89f;
    width: 200px;
  }

  // @media screen and (max-width: 700px) { 
  //   .alert {
  //     display: none;
  //   }
  // }

</style>
