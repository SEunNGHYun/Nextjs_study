import { BookData } from "@/types";

export async function fetchRandomBooks() : Promise<BookData[]>{

    const url = "http://localhost:12345/book/random"
    
    try{ 
        const response = await fetch(url);
        if (!response.ok){
            throw new Error()
        }

        return response.json();

    }catch(err) {

        console.error(err)
        return [];
    }
}


