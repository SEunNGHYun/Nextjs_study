"use client";
import Link from "next/link";
import styes from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

export default function Movie({
    id,
    title,
    poster_path,
}: {
    id: string;
    title: string;
    poster_path: string;
}) {
    const router = useRouter();

    const onClickImg = () => {
        router.push(`/movies/${id}`);
    };

    return (
        <div className={styes["movie"]}>
            <img
                src={poster_path}
                alt={"movie poster at" + title}
                onClick={onClickImg}
            />
            <Link prefetch href={`/movies/${id}`}>
                {title}
            </Link>
        </div>
    );
}
