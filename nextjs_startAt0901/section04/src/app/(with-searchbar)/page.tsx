import BookItem from "@/components/book-item";
import style from "./page.module.css";
import books from "@/mock/books.json";
<<<<<<< HEAD
import { BookData } from "@/types";

async function AllBooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book`, {cache : 'no-store'});
  if (!response.ok) {
    return <div>오류가 발생하였습니다.</div>
  }
  const allBooks : BookData[] = await response.json()


  return (
    <div>
      {allBooks.map(book => <BookItem key={book.id} {...book}/>)}
    </div>
  )
}

async function RecoBooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book/random`, {next : {revalidate : 3}});
  if (!response.ok) {
    return <div>오류가 발생하였습니다.</div>
  }
  const recBooks : BookData[] = await response.json()

  return (
    <div>
      {recBooks.map(book => <BookItem key={book.id} {...book}/>)}
    </div>
  )
}

export default async function Home() {
  

=======

export default function Home() {
>>>>>>> e6736947ef0f1c1d1c4b536b3312dd77953850a0
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
<<<<<<< HEAD
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks/>
=======
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
>>>>>>> e6736947ef0f1c1d1c4b536b3312dd77953850a0
      </section>
    </div>
  );
}
