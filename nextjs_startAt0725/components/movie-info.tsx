import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
    const data = await fetch(process.env.API_URL + "/" + id).then((res) =>
        res.json()
    );
    return data;
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return (
        <div className={styles["container"]}>
            <img
                className={styles["poster"]}
                src={movie.poster_path}
                alt={"movie-info" + movie.title}
            />
            <div className={styles["info"]}>
                <h1 className={styles["title"]}>{movie.title}</h1>
                <h3> {movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target="_blank">
                    homepage &rarr;
                </a>
            </div>
        </div>
    );
}
