import useBooks from "../hooks/useBooks";
import {BookCard} from "./BookCard";

export default function BookOverview() {

    const books = useBooks();

    return (<div>
            {books.map(obj => <BookCard key={obj.isbn} book={obj}/>)}
        </div>

    )

}