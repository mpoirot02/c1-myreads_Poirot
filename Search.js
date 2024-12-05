import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from "../BooksAPI.js";
import Book from "./Book.js";

const Search = ({ booklist, onChangeBookShelf }) => {
  let searchOriginalList = booklist;

  const [query, setQuery] = useState("");

  const [searchedBooks, setSearchedBooks] = useState([]);

  const updateQuery = (query) => {
    setQuery(query.trim());
    const bookfill = async () => {
      const res = await BooksAPI.search(query, 10);
      if (res !== undefined) {
        if (!res.error) {
          setSearchedBooks(res);
        } else {
          setSearchedBooks([]);
        }
      } else {
        setSearchedBooks([]);
      }
    };

    bookfill();
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks ? (
            searchedBooks.map((book) => (
              <li key={book.id}>
                <Book
                  individualBook={book}
                  originalList={searchOriginalList}
                  onBookShelfChangeInd={onChangeBookShelf}
                ></Book>
              </li>
            ))
          ) : (
            <li>Loading...</li>
          )}
        </ol>
      </div>
    </div>
  );
};
export default Search;
