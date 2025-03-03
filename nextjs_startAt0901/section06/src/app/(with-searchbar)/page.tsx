import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";
import { delay } from "@/util/delay";
import { Suspense } from "react";
import BookItemSkeleton from "@/components/skeleton/book-item-skeleton";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";

const AllBooks = async () => {
    await delay(1400);

    const resposnse = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
        { cache: "force-cache" }
    );

    if (!resposnse.ok) {
        return <div>문제가 발생하였습니다.</div>;
    }

    const books: BookData[] = await resposnse.json();

    return (
        <div>
            {books.map((book) => (
                <BookItem key={book.id} {...book} />
            ))}
        </div>
    );
};

const RecoBooks = async () => {
    await delay(3000);
    const resposnse = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
        { next: { revalidate: 3 } }
    );

    if (!resposnse.ok) {
        return <div>문제가 발생하였습니다.</div>;
    }

    const books: BookData[] = await resposnse.json();

    return (
        <div>
            {books.map((book) => (
                <BookItem key={book.id} {...book} />
            ))}
        </div>
    );
};

export const dynamic = "force-dynamic";

export default function Home() {
    return (
        <div className={style.container}>
            <section>
                <h3>지금 추천하는 도서</h3>
                <Suspense fallback={<BookListSkeleton count={3} />}>
                    <RecoBooks />
                </Suspense>
            </section>
            <section>
                <h3>등록된 모든 도서</h3>
                <Suspense fallback={<BookListSkeleton count={10} />}>
                    <AllBooks />
                </Suspense>
            </section>
        </div>
    );
}
