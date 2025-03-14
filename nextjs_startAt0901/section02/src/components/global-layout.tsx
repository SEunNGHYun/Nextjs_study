import { ReactNode } from "react";
import Link from "next/link";
import style from "./global-layout.module.css";
import { BookData } from "@/types";

async function Footer() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`
    );

    if (!response.ok) {
        return <footer>제작 @ 승현쓰</footer>;
    }

    const books: BookData[] = await response.json();
    const bookCount = books.length;

    return (
        <footer>
            <div>제작 @ 승현쓰</div>
            {/* <div>{bookCount}개의 도서가 있습니다/</div> */}
        </footer>
    );
}

export default function GlobalLayout({ children }: { children: ReactNode }) {
    return (
        
        <div className={style.container}>
            <header className={style.header}>
                <Link href={"/"}>📚 onebite books</Link>
            </header>
            <main className={style.main}>{children}</main>
            <Footer />
        </div>
    );
}
