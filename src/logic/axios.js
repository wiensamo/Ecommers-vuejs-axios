import axios from 'axios';

const obtenerItem = async ()=> {
    try {
        const respuesta =  await axios
        .get("https://api.themoviedb.org/3/movie/popular?", {
            params: {
                api_key: '27136529f26ada5e907f470f8a3a2e42',
                language: 'es-MX'
            },
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzEzNjUyOWYyNmFkYTVlOTA3ZjQ3MGY4YTNhMmU0MiIsInN1YiI6IjYyM2E4OTQ5YWM2MTdjMDA1ZDZjYjE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DtK-I1-fTCNPveVyfT3tL6PISRPGCeKvfh8HGlYHPO8',
            }})

            console(respuesta);
    } catch (error) {
        console.log(error);
    }
}
const postearItem = async ()=> {
    try {
        const respuesta =  await axios
        .post("https://api.themoviedb.org/3/movie/popular?")

            console(respuesta);
    } catch (error) {
        console.log(error);
    }
}
export default  obtenerItem()
                postearItem()

/*
axios
.get(
  "https://api.themoviedb.org/3/movie/popular?api_key=27136529f26ada5e907f470f8a3a2e42&language=es-MX"
)
.then((res) => {
  console.log(res.data.results[1].title);
})
.catch((error) => {
  console.log(error);
});


*/ 