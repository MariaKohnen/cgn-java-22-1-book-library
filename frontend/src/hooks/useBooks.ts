import {useEffect, useState} from "react";
import {Book} from "../modul/Book";
import axios from "axios";

export default function useBooks() {

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        axios.get("/book")
            .then(response => response.data)
            .then(body => setBooks(body))
            .catch(console.error)
    }, [])

    return books;
}

export function postNewBook(newBook: Book) {
    axios.post("/book", newBook)
}