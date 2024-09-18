import { useRouter } from "next/router";
import style from './[id].module.css'
import { GetServerSidePropsContext, GetStaticPropsContext, InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import { fetchOneBook } from "@/lib/fetch-one-book";
import { BookData } from "@/types";

export const getStaticProps = async (context : GetStaticPropsContext ) => {

    const id = context.params!.id

    const book = await fetchOneBook(Number(id))

    console.log("id: ", id)

   return {
        props : {
            book : book
        }
    }
}

export const getStaticPaths = () => {
    return {
        paths : [
            {params : {id : "1"}},
            {params : {id : "2"}},
            {params : {id : "3"}}
        ],
        fallback : false
    }
}


export default function Page({book} : InferGetStaticPropsType<typeof getStaticProps>) {

    if (!book) return "문제 발생"

    
    const {
        id, title, subTitle, author, description, publisher, coverImgUrl
    } = book ;

    return (
        <div className={style.container}>
            <div 
                className={style.cover_img_container}
                style={{backgroundImage : `url('${coverImgUrl}')`}}>
                    <img src={coverImgUrl}/>
            </div>
            <div className={style.title}>
                {title}
            </div>
            <div  className={style.subTitle}>
                {subTitle}
            </div>
            <div  className={style.author}>
                {author} | {publisher}
            </div>

            <div  className={style.description}>
                {description}
            </div>
        </div>
    )
}
