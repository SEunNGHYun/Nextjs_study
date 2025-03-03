import { BookData } from "@/types";
import style from "./page.module.css";
import { notFound } from "next/navigation";

// export const dynamicParams = false;

export function generateStaticParams() {
    return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function Page({
    params,
}: {
    params: { id: string | string[] };
}) {
    const resposnse = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${params.id}`,
        { cache: "force-cache" }
    );

    if (!resposnse.ok) {
        if (resposnse.status === 404) {
            notFound();
        }
        return <div>문제가 발생하였습니다.</div>;
    }

    const book: BookData = await resposnse.json();

    const { title, subTitle, description, author, publisher, coverImgUrl } =
        book;

    return (
        <div className={style.container}>
            <div
                className={style.cover_img_container}
                style={{ backgroundImage: `url('${coverImgUrl}')` }}
            >
                <img src={coverImgUrl} />
            </div>
            <div className={style.title}>{title}</div>
            <div className={style.subTitle}>{subTitle}</div>
            <div className={style.author}>
                {author} | {publisher}
            </div>
            <div className={style.description}>{description}</div>
        </div>
    );
}
