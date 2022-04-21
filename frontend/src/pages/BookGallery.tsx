import BookOverview from "../components/BookOverview";
import "./BookGallery.css";
import CreateBook from "../components/CreateBook";


export default function BookGallery() {

    return (
        <div id="bookGallery">
            <CreateBook />
            <BookOverview />
        </div>
    )
}