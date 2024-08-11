import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
    title: "Home",
};

async function getMovies() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(process.env.API_URL).then((res) => res.json());

    return response;
}

export default async function HomePage() {
    const movies = await getMovies();

    return (
        <div className={styles["container"]}>
            {movies.map((movie) => (
                <Movie key={"movie_item" + movie.id} {...movie} />
            ))}
        </div>
    );
}
