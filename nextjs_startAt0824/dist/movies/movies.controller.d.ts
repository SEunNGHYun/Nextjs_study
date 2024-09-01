import { MoviesService } from './movies.service';
import { CreateMovieDTO } from 'src/dto/create-movie.dto';
export declare class MoviesController {
    readonly moviesService: MoviesService;
    constructor(moviesService: MoviesService);
    getAll(): import("./entities/movie.entitiy").Movie[];
    search(searchingYear: string): string;
    getOne(movie_id: number): import("./entities/movie.entitiy").Movie;
    create(movieData: CreateMovieDTO): void;
    remove(movie_id: number): boolean;
    update(movie_id: number, updateData: any): void;
}
