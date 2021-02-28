app.component('task-view',{
    props:{
      tasks: {
        type: Array,
        require: true
    },
    'search-image': Array,
    'showing-image': Boolean,
    'current-index': Number
},
    template: 
    /*html*/
    `<div>
    <div v-if="showingImage">
    <div class="bg-black text-xl rounded font-medium pb-4 mx-auto my-auto mb-8">
      <div class="px-auto">
        <span class="material-icons select-none flex justify-end mt-2 mb-3 mx-1 text-white"
         v-on:click="hideImage">cancel</span>
        <img class="mx-auto w-3/5 h-3/5" :src="searchImage[currentIndex].image">
      </div>
    </div>
  </div>
  </div>`,
    methods: {
        hideImage() {
            this.$emit('hide-image',this.showingImage);
        }
        
    }
})