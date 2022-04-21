import {Book} from "../modul/Book";

type BookCardProps = {
    book : Book;
}

export function BookCard({book} : BookCardProps) {
    return (
        <div>
            <div>{book.title}</div>
            <div>{book.isbn}</div>
        </div>
    )
}