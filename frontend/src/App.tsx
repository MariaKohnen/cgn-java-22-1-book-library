import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BookGallery from "./pages/BookGallery";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<BookGallery />}/>
            </Routes>
        </BrowserRouter>
    );
}
