import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import BookItem from "@/components/book-item";
import { fetchBooks } from "@/lib/fetch-books";
import { BookData } from "@/types";
import Head from "next/head";

// export const getStaticProps = async (context : GetServerSidePropsContext ) => {

//     const { q } = context.query

//     const books = await fetchBooks(q as string)

//     return {
//         props : {
//             books
//         }
//     }
// }

export default function Page() {

    const router = useRouter();
    const [books, setBooks] = useState<BookData[]>([])
    const q = router.query.q;

    const getBooks = async () => {
        const data = await fetchBooks(q as string);
        setBooks(data)
    }

    useEffect(() => {
        if (q){
            getBooks()
        }
    } , [q])

    return (
        <>
        <Head>
            <title>한입북스</title>
            <meta property="og:image" content="/thumbnail.png"></meta>
            <meta property="og:title" content="한입북스"></meta>
            <meta property="og:description" content="한입북스를 통하여 책 읽기"></meta>
        </Head>
        <div>
            {books.map((book) => {
                return <BookItem key={book.id} {...book}/>
            })  }
        </div>
        </>
    )
}

Page.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>;
};
