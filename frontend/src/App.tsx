import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BookGallery from "./pages/BookGallery";
import Title from "./components/Title";

export default function App() {
    return (
        <BrowserRouter>
            <Title />
            <Routes>
                <Route path={"/"} element={<BookGallery />}/>
            </Routes>
        </BrowserRouter>
    );
}
