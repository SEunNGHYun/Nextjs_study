import styles from "../styles/movie-video.module.css";

async function getVideos(id: string) {
    const data = await fetch(`${process.env.API_URL}/${id}/videos`).then(
        (res) => res.json()
    );
    return data;
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return (
        <div className={styles["container"]}>
            {videos.map((video) => {
                return (
                    <iframe
                        key={video.name + "youtube_list"}
                        src={"https://youtube.com/embed/" + video.key}
                        title={video.name}
                        allow="accelerometer; autoplay; clipboard-write; encryted-media; gyroscope; picture-in-picture;"
                        allowFullScreen
                    >
                        {video.title}
                    </iframe>
                );
            })}
        </div>
    );
}
