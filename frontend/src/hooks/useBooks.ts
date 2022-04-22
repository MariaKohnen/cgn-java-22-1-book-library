import {useEffect, useState} from "react";
import {Book} from "../modul/Book";
import axios from "axios";

export default function useBooks() {

    const [books, setBooks] = useState<Book[]>([]);

    const addBook = (newBook : Book) => {
        setBooks((allBooks : Book[]) => [...allBooks, newBook])
    }

    useEffect(() => {
        axios.get("/book")
            .then(response => response.data)
            .then(body => setBooks(body))
            .catch(console.error)
    }, [])

    return {books, addBook};
}

export function postNewBook(newBook: Book) {
    return axios.post("/book", newBook)
        .then(response => response.data)
        .catch(console.error)
}
