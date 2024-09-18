import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import books from '@/mock/books.json'
import BookItem from "@/components/book-item";
import { GetServerSideProps, GetServerSidePropsContext, InferGetStaticPropsType } from "next";
import { fetchBooks } from "@/lib/fetch-books";
import { BookData } from "@/types";

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
        <div>
            {books.map((book) => {
                return <BookItem key={book.id} {...book}/>
            })  }
        </div>
    )
}

Page.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>;
};
