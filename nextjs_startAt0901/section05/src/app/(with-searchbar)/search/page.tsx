import BookItem from "@/components/book-item";
import { BookData } from "@/types";
// import { notFound } from "next/navigation";

// 페이지를 강제로 동적, 정적 페이지로 설정
// auto | force-dynamic | force-static | error

// 동적 페이지
export default async function Page({
    searchParams,
}: {
    searchParams: {
        q?: string;
    };
}) {
    const resposnse = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${searchParams.q}`,
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
}
