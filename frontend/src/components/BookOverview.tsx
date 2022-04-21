import useBooks from "../hooks/useBooks";
import {BookCard} from "./BookCard";
import "./BookOverview.css";

export default function BookOverview() {

    const books = useBooks();

    return (<div id={"bookOverview"}>
            {books.map(obj => <BookCard key={obj.isbn} book={obj}/>)}
        </div>

    )

}