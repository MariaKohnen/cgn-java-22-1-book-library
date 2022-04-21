import {Book} from "../modul/Book";
import {FormEvent, useState} from "react";
import {postNewBook} from "../hooks/useBooks";
import "./CreateBook.css";


export default function CreateBook() {

    const [title, setTitle] = useState('');
    const [isbn, setIsbn] = useState('');

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
        const newBook : Book = {title, isbn};
        console.log(newBook);
        postNewBook(newBook);
    }

    return (
        <div id={"createBook"}>
            <h2>Add a new book</h2>
            <form className={"formAddBook"} onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type={"title"} required value={title}
                       onChange={(handleChange) => setTitle(handleChange.target.value)}/>
                <label>Isbn:</label>
                <input type={"isbn"} required value={isbn}
                       onChange={(handleChange) => setIsbn(handleChange.target.value)}/>
                <button type={"submit"}>Add Book</button>
            </form>
        </div>
    )
}