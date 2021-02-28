app.component('task-item',{
    props:{
        tasks: {
            type: Array,
            require: true
        },
    'search-image': Array,
    'search-finding': Boolean,
    },
    template: 
    /*html*/
    `<div>
    <section class="overflow-hidden text-gray-700 body-font ">
    <div class="container pl-8 text-3xl ">
        <div v-for="(task,index) in searchImage" class="flex">
        <div class="flex flex-row mb-3">
        <img :src="task.image" class="pb-16" v-on:click="showImage(index)" v-on:dblclick="toggleDone(index)" width="550" height="450">
        <div class="my-4 text-2xl ml-2">----------------------------------------------------------
          <br>{{task.name}}
          <span class="material-icons text-red-400" v-show="task.done">
            favorite
            </span>
            <br>----------------------------------------------------------
            <p>
              {{task.location}}
            </p>
        </div>
      </div>

    </section>
    <p v-if="searchFinding" class="text-center mt-4 text-7xl">No photo.</p>
    </div>`,
    data(){
    return {
      showingImage: false,
      currentIndex: 0
        }
    },
    methods: {
      toggleDone(index){
          this.tasks[index].done = !this.tasks[index].done
      },
      showImage(index) {
        this.currentIndex = index
        this.showingImage = true
        this.$emit('showing-image', this.showingImage)
        this.$emit('show-image', this.currentIndex)
      }


    }
})