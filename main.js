const app = Vue.createApp({
    data() {
        return {
            header: 'Photo Gallery',

            tasks: [{image: 'images/img1.png',name: 'Shiva Pose',done: false,
            location:'Location: Naverius'},
            {image: 'images/img2.png',name: 'PSO2COMI Character Pose' ,done: false,
            location:'Location: Wopal'},
            {image: 'images/img3.png',name: 'Luster Pose M' ,done: false,
            location:'Location: Coast'},
            {image: 'images/img4.png',name: 'Luster Pose F' ,done: false,
            location:'Location: Coast'},
            {image: 'images/img5.png',name: 'Idola Frame' ,done: false,
            location:'Location: Personal quarter'}],
            searchOpen: false,
            inputSearch: '',
            searchFinding: false,
            showingImage: false,
            currentIndex: 0

        }
    },
    methods: {
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done
        },
        switchOpen() {
            this.searchOpen = !this.searchOpen
        },
        showImage(index) {
            this.showingImage = true;
            this.currentIndex = index;
        },
        hideImage() {
            this.showingImage = false;
        },
        searching(sc) {
            this.inputSearch = sc;
        }
        
    },
    computed: {
        countImage(){
            return this.tasks.length
        },
        countUndone(){
            return this.tasks.filter( t => t.done ).length
        },
        searchImage() {
            this.searchFinding = false;
            if (this.inputSearch == '') {
                return this.tasks
                
            } else {
                search = this.tasks.filter(tasks => this.inputSearch.toLowerCase().split(' ')
                .every(v => tasks.name.toLowerCase().includes(v)));
                if (search == '') {
                    this.searchFinding = true;
                } else {
                    return search;
                }
            }

        }
    }
})
