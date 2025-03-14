import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
<<<<<<< HEAD
import { BookData } from "@/types";

export default async function Page({
=======

export default function Page({
>>>>>>> e6736947ef0f1c1d1c4b536b3312dd77953850a0
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
<<<<<<< HEAD

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book/search?q=${searchParams.q}`);
  if (!response.ok) {
    return <div>오류가 발생하였습니다.</div>
  }

  const searchBooks : BookData[] = await response.json()
  
  return (
    <div>
      {searchBooks.map((book) => (
=======
  return (
    <div>
      {books.map((book) => (
>>>>>>> e6736947ef0f1c1d1c4b536b3312dd77953850a0
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
