import {BookCard} from "./BookCard";
import "./BookOverview.css";
import {Book} from "../modul/Book";

type BookOverviewProps = {
    books : Book []
}

export default function BookOverview({books} : BookOverviewProps) {


    return (<div id={"bookOverview"}>
            {books.map(obj => <BookCard key={obj.isbn} book={obj}/>)}
        </div>

    )

}