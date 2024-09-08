import { ReactNode } from "react";
import Link from "next/link";
import style from "./global-layout.module.css";

export default function GlobalLayout({ children }: { children: ReactNode }) {
    return (
        <div className={style.container}>
            <header className={style.header}>
                <Link href={"/"}>📚 onebite books</Link>
            </header>
            <main className={style.main}>{children}</main>
            <footer className={style.footer}>제작 @ 승현쓰</footer>
        </div>
    );
}
