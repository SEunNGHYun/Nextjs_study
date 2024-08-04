import { Metadata } from "next"
import Link from "next/link"

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

export const metadata = {
    title : "Home",
}

async function getMovies () {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const response = await fetch(API_URL).then(res=>res.json())

    return response
} 

export default async function HomePage () {
    const movies = await getMovies()

    return (
        <div>
        {movies.map(movie => <li key={'movie_'+ movie.id.toString()}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)}
        </div>
    )
}