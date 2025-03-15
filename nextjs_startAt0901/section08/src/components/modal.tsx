'use client'

import { ReactNode, useEffect, useRef } from 'react'
import style from './modal.module.css'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/navigation'

export default function Modal ({children} : {children : ReactNode}) {
    const modalRef = useRef<HTMLDialogElement>(null)
    const router = useRouter()

    useEffect(() => {
        if (!modalRef.current?.open){
            modalRef.current?.showModal()
            modalRef.current?.scrollTo({
                top : 0
            })
        }
    }, [])

    return createPortal(<dialog
        onClose={() => {router.back()}}
        onClick={(e) => {
            if((e.target as any).nodeName === 'DIALOG') {
                router.back()
            }
        }}
        ref={modalRef} className={style['modal']}>{children}</dialog>, document.getElementById('modal-root' )as HTMLElement)
}