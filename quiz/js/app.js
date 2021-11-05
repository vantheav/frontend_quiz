new Vue({
    el: "#app",
    data: {
        books: [],
        author_id: null,
        title:"",
        text: "",
    },
    methods: {
        getBook() {
            let url = "http://localhost:3000/api/book";
            axios.get(url).then(response => {
                let book = response.data;
                for(bo of book){
                    this.books.push(bo);
                    console.log(bo);
                }
                console.log(this.books);
            });
        },
        createBook(){
            let url="http://localhost:3000/api/book";
            let data = {user_id: parseInt(this.author_id), title:this.title, body: this.text};
            axios.post(url, data).then(() =>{
                this.getBook();
            }).catch(()=>{
                console.log("Error 404 not found!")
            });
            this.author_id = null
            this.title = ""
            this.text = ""
        }
        
    },
    mounted() {
        this.getBook();
    },
})