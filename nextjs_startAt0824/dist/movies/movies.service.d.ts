import { Movie } from './entities/movie.entitiy';
import { CreateMovieDTO } from 'src/dto/create-movie.dto';
export declare class MoviesService {
    private movies;
    getAll(): Movie[];
    getOne(id: number): Movie;
    deleteOne(id: number): boolean;
    create(movieData: CreateMovieDTO): void;
    update(id: number, updateData: any): void;
}
