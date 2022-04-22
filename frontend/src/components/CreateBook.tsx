import {Book} from "../modul/Book";
import {FormEvent, useState} from "react";
import {postNewBook} from "../hooks/useBooks";
import "./CreateBook.css";

type CreateBookProps = {
    addBook : (newBook : Book) => void;
}


export default function CreateBook({addBook} : CreateBookProps) {

    const [title, setTitle] = useState<string>('');
    const [isbn, setIsbn] = useState<string>('');

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
        const newBook : Book = {title, isbn};
        event.preventDefault();
        postNewBook(newBook)
            .then(response => addBook(response));
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