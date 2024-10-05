import { useRouter } from "next/router";
import style from './[id].module.css'
import {  GetStaticPropsContext,  InferGetStaticPropsType } from "next";
import { fetchOneBook } from "@/lib/fetch-one-book";
import Head from "next/head";


export const getStaticPaths = () => {
    return {
        paths : [
            {params : {id : "1"}},
            {params : {id : "2"}},
            {params : {id : "3"}}
        ],
        fallback : true

        // true : 404
        // 'blocking' : SSR 방식
        // true : 'blocking' + 데이터가 없는 풀백 상태의 페이지부터 봔환, 데이터는 이후 전달받으면 변함
    }
}


export const getStaticProps = async (context : GetStaticPropsContext ) => {

    const id = context.params!.id

    const book = await fetchOneBook(Number(id))

    if (!book) {
        return {
            notFound : true
        }
    }

   return {
        props : {
            book : book
        },
        
    }
}



export default function Page({book} : InferGetStaticPropsType<typeof getStaticProps>) {

    const router = useRouter()

    if (router.isFallback) return (
        <>
         <Head>
            <title>한입북스</title>
            <meta property="og:image" content="/thumbnail.png"></meta>
            <meta property="og:title" content="한입북스"></meta>
            <meta property="og:description" content="한입북스를 통하여 책 읽기"></meta>
        </Head>
        <div>
            데이터를 불러오는 중입니다.
        </div>
        </>
    )
    if (!book) return "문제 발생"

    
    const {
        title, subTitle, author, description, publisher, coverImgUrl
    } = book ;

    return (
        <>
        <Head>
            <title>한입북스</title>
            <meta property="og:image" content={coverImgUrl}></meta>
            <meta property="og:title" content={title}></meta>
            <meta property="og:description" content={description}></meta>
        </Head>
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
        </>
    )
}
