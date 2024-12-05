import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI.js";
import { Route, Routes } from "react-router-dom";
import ShowShelves from "./components/ShowShelves.js";
import Search from "./components/Search.js";

const App = () => {
  const [booklist, setBooklist] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooklist(res);
    };

    getBooks();
    refreshBookList();
    return () => {};
  }, []);

  const refreshBookList = async () => {
    const res = await BooksAPI.getAll();
    setBooklist(res);
  };

  const changeBookShelf = (book, shelf) => {
    const updateBooks = async (b, s) => {
      const res = await BooksAPI.update(b, s);
      setBooklist(res);
      refreshBookList();
    };
    updateBooks(book, shelf);
    const refreshBookList = async () => {
      const res = await BooksAPI.getAll();
      setBooklist(res);
    };
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ShowShelves
              booklist={booklist}
              onChangeBookShelf={changeBookShelf}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Search booklist={booklist} onChangeBookShelf={changeBookShelf} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
