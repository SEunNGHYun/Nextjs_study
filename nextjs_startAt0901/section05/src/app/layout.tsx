import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";
import { BookData } from "@/types";

async function Footer() {
    const resposnse = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
        { cache: "force-cache" }
    );

    if (!resposnse.ok) {
        return <footer>@승현쓰</footer>;
    }

    const books: BookData[] = await resposnse.json();
    const bookCount = books.length;

    return (
        <footer>
            <div>@승현쓰</div>
            <div>{bookCount}개의 책을 가지고 있습니다.</div>
        </footer>
    );
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className={style.container}>
                    <header>
                        <Link href={"/"}>📚 ONEBITE BOOKS</Link>
                    </header>
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
