import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";

const AllBooks = async () => {
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

export default function Home() {
    return (
        <div className={style.container}>
            <section>
                <h3>지금 추천하는 도서</h3>
                <RecoBooks />
            </section>
            <section>
                <h3>등록된 모든 도서</h3>
                <AllBooks />
            </section>
        </div>
    );
}
