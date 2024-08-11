import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
    console.log(`fetching data Videos: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const data = await fetch(`$ {API_URL}/${id}/videos`).then((res) =>
        res.json()
    );
    return data;
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>;
}
