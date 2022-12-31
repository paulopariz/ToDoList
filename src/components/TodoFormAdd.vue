<template>
    <form 
      @submit.stop.prevent="addTodo"
      class="flex items-center ">
        
          <input 
            v-model="title"
            placeholder="Adicione uma nova tarefa" 
            type="text" 
            class="bg-neutral-800 placeholder-gray-400 text-gray-400 text-sm focus:outline-none block w-full appearance-none leading-normal py-3 pl-6 rounded-md h-12">

         

          <button class=" ml-3 h-12 px-4 rounded-md bg-yellow-400 text-xs font-semibold focus:outline-none" type="submit">
            ADICIONAR
          </button>

          
        </form>

        <button
            @click="reload"
            class="mt-5 h-12 focus:outline-none float-right"
          >
            <img 
              class="w-5 " 
              :src="imgReload"/>  
          </button>


        <span 
          class="text-red-500 text-sm mt-3" 
          v-show="validad">
              O campo está vazio!
        </span>

</template>


<script>
export default {
  data() {
    return {
      title: '',
      validad: false,
      imgReload: 'https://img.icons8.com/ios-filled/50/FACC14/recurring-appointment.png'
    }
  },

  methods: {
    reload(){
      window.location.reload()
    },
            
    addTodo() {

      if(!this.title){
        return false,
        this.validad = true
      }
      this.$store.dispatch('addTodo', {
        title: this.title,
        completed: false
      }).finally(() => {
        this.title = '',
        this.validad = false

      })
    }
  },
}
</script>