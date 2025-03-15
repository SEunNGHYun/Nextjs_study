import { BookData } from "@/types";
import style from "./page.module.css";
import { notFound } from "next/navigation";
import BookPage from '@/app/book/[id]/page'
import Modal from "@/components/modal";
// export const dynamicParams = false;


export default async function Page(props : any) {   
    return (
        <Modal>
            <BookPage {...props}/>
            </Modal>
    )
}
