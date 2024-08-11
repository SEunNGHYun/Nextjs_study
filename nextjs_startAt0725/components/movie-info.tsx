import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
    console.log(`fetching data ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const data = await fetch(API_URL + "/" + id).then((res) => res.json());
    return data;
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>;
}
