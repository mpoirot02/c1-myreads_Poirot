import Book from "./Book.js";

const Shelf = ({ shelf, filter, passedBookList, onBookShelfChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        {filter !== undefined ? (
          <ol className="books-grid">
            {filter.map((filteredBook) => {
              return (
                <li key={filteredBook.id}>
                  <Book
                    individualBook={filteredBook}
                    originalList={passedBookList}
                    onBookShelfChangeInd={onBookShelfChange}
                  ></Book>{" "}
                </li>
              );
            })}
          </ol>
        ) : (
          <>
            <div>loading...</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Shelf;
