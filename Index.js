const baseUrl = "Haven't published it because azure is a scam :)"

Vue.createApp({
    data(){
        return{
            movie: null,
            movies: [],
            movieid: 0,
            addMovie: {MovieName: "", LenghInMinutes: 0, CountryOfOrigin: ""},
            errormessage: "Erorr!",
            createdmsg: "",
            moviesid: null,

        }
    },
    methods: {
        async helperGetAndShowLokaler(url)
        {
            try{
                const response = await axios.get(url)
                this.movies = await response.data
            }
            catch(ex){
                alert(ex.message)
            }
        },
        getAllMovies(){
            this.helperGetAndShowLokaler(baseUrl)
        },
        async getMovieById(id){
            const url = baseUrl + "/" + id
            try{
                const response = await axios.get(url)
                this.movies = await response.data
            }
            catch(ex){
                alert(ex.errormessage)
            }
        },
        async postMovie(){
            try{
                response = await axios.post(baseUrl, this.addMovie)
                this.createdmsg = "response" + response.status + " " + reponse.statusText
            }
            catch(ex){
                alert(ex.errormessage)
            }
        }
    }
}).mount("#app")