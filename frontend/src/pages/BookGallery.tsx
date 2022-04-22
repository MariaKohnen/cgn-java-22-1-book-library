import BookOverview from "../components/BookOverview";
import "./BookGallery.css";
import CreateBook from "../components/CreateBook";
import useBooks from "../hooks/useBooks";


export default function BookGallery() {

    const {books, addBook} = useBooks();

    return (
        <div id="bookGallery">
            <CreateBook addBook={addBook}/>
            <BookOverview books={books} />
        </div>
    )
}