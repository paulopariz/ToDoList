<template>

  <div class="px-3 py-10 md:px-10">

    <div>
        <h1 class="text-center text-4xl mb-9 text-yellow-400 font-righteous">ToDo List</h1>
    </div>

    <div class="w-11/12  mx-auto">


      

      <TodoSpinner v-if="loading" />

      <template v-else>
        <TodoFormAdd />


        <TodoItems 
          v-if="$store.state.todos.length"
        />


        <TodoEmpty v-else />
      </template>

    </div>
  </div>


</template>

<script>
  import TodoFormAdd from './components/TodoFormAdd.vue';
  import TodoSpinner from './components/TodoSpinner.vue';
  import TodoItems from './components/TodoItems.vue';
  import TodoEmpty from './components/TodoEmpty.vue';


  export default {

    name: 'App',
    components: {
      TodoSpinner,
      TodoFormAdd,
      TodoItems,
      TodoEmpty
    },

    data() {
      return {
        loading: false
      }
    },

    created() {
      this.loading = true
      this.$store.dispatch('getTodos').then(() => {
        this.loading = false
      })
    },
  }
</script>