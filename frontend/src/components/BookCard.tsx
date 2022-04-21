import {Book} from "../modul/Book";
import "./BookCard.css"

type BookCardProps = {
    book: Book;
}

export function BookCard({book}: BookCardProps) {
    return (
        <div id={"bookCard"}>
            <div>{book.title}
                <hr></hr>
            </div>
            <div>{book.isbn}</div>
        </div>
    )
}