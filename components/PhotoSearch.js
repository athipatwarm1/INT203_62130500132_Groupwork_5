app.component('task-search',{
    props:{
      tasks: {
        type: Array,
        require: true
    }
      },
      template: 
      /*html*/
      `<div>
      <div v-if="searchOpen">
        <div class="flex text-lg">
        <input v-model="inputSearch" @input="searching"
        class="ml-2 p-1 w-80 h-12 placeholder-gray-500 placeholder-opacity-50 
        focus:outline-none text-black rounded-lg bg-gray-100 border-current border-2 "
        type="text" placeholder="Enter Photo Name ...">

        <button class="ml-2 p-1 rounded-lg focus:outline-none bg-red-400" 
          v-on:click="switchOpen">Cancel
        </button>

        </div>
      </div>
      <i class="material-icons text-4xl" v-on:click="switchOpen" v-else>search</i>
    </div>`,
    data(){
      return {
        inputSearch: '',
        searchOpen: false
          }
      },
      methods: {
          switchOpen() {
            this.searchOpen = !this.searchOpen
            if (this.searchOpen == false) {
              this.inputSearch = '';
          }
          this.$emit('searching', this.inputSearch);
          },
          searching() {
          this.$emit('searching', this.inputSearch);
          }
          
      }
  })