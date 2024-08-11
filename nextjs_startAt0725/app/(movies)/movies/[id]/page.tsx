import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MoviesDetail({
    params: { id },
}: {
    params: { id: string };
}) {
    return (
        <div>
            <Suspense fallback={<h1>영화 정보 로딩중 ... </h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>영화들 로딩중 ... </h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}
