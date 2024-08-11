import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { getMovie } from "../../../../components/movie-info";

interface IParams {
    params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

export default async function MoviesDetail({ params: { id } }: IParams) {
    return (
        <div>
            <Suspense fallback={<h1>영화 정보 로딩중 ... </h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>추천 영화 로딩중 ... </h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}
