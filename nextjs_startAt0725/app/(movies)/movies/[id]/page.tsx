import { API_URL } from "../../../(home)/page"


async function getMovie (id : string) {
console.log(`fetching data ${Date.now() }`)
    await new Promise(resolve => setTimeout(resolve, 5000))
    const data = await fetch(API_URL+ '/'+ id).then(res => res.json());
    return data
}

async function getVideos (id :string) {
console.log(`fetching data Videos: ${Date.now() }`)
    await new Promise(resolve => setTimeout(resolve, 5000))
    const data = await fetch(`${API_URL}/${id}/videos`).then(res => res.json());
    return data
}


export default async function MoviesDetail ({params:{id}} : {params : {id : string}}) {
    console.log('start fetching')
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])
    console.log('end fetching')

    return <h1>{movie.title}
    </h1>
} 