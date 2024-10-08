import { BookData } from "@/types";


export async function fetchOneBook(id : number) : Promise<BookData | null>  {

    /* eslint-disable */
    let url = `http://localhost:12345/book/${id}`
    
    try{ 
        const response = await fetch(url);
        if (!response.ok){
            throw new Error()
        }

        return response.json();

    }catch(err) {

        console.error(err)
        return null;
    }
}