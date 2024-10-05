import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import {fetchBooks} from "@/lib/fetch-books";
import {fetchRandomBooks} from '@/lib/fetch-random-books'
import Head from 'next/head'

// getStaticProps SSG
//

// getServerSideProps SSR

// 서버 렌더링 전 외부 서버에서 데이터를 호출하는 함수
// 렌더링 전 외부 서버에서 데이터를 불러와 렌더링시 데이터가 포함되서 온다. 
export const getStaticProps = async ( ) => {

  const [allBooks, recoBooks] = await Promise.all([fetchBooks(), fetchRandomBooks()])

  return {
    props : {
        allBooks,
        recoBooks
    },
  }
}

export default function Home({allBooks, recoBooks} : InferGetStaticPropsType<typeof getStaticProps>) {

    return (
        <>
        <Head>
            <title>한입북스</title>
            <meta property="og:image" content="/thumbnail.png"></meta>
            <meta property="og:title" content="한입북스"></meta>
            <meta property="og:description" content="한입북스를 통하여 책 읽기"></meta>
            </Head>
        <div className={style['container']}>
           <section>
            <h3>지금 추천하는 도서</h3>
            {recoBooks.map((book) => 
                <BookItem key={book.id} {...book}/>
                )}
           </section>
           <section>
            <h3>등록된 모든 도서</h3>

            {allBooks.map((book) => 
                <BookItem key={book.id} {...book}/>
                )}
           </section>
        </div>
        </>
    );
}

Home.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>;
};
