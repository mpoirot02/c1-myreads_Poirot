import Shelf from "./Shelf.js";
import { Link } from "react-router-dom";

const ShowShelves = ({ booklist, onChangeBookShelf }) => {
  const splitList = booklist;

  let crList;
  let wtrList;
  let readList;

  try {
    if (splitList !== undefined) {
      crList = splitList.filter((c) => c.shelf === "currentlyReading");
      wtrList = splitList.filter((c) => c.shelf === "wantToRead");
      readList = splitList.filter((c) => c.shelf === "read");
    } else {
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      {booklist.length !== undefined ? (
        <>
          <div className="list-books-content">
            <div>
              <Shelf
                shelf="Currently Reading"
                passedBookList={booklist}
                filter={crList}
                onBookShelfChange={onChangeBookShelf}
              ></Shelf>
              <Shelf
                shelf="Want to Read"
                passedBookList={booklist}
                filter={wtrList}
                onBookShelfChange={onChangeBookShelf}
              ></Shelf>
              <Shelf
                shelf="Read"
                passedBookList={booklist}
                filter={readList}
                onBookShelfChange={onChangeBookShelf}
              ></Shelf>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">+</Link>
          </div>
        </>
      ) : (
        <>
          <div>Loading...</div>
        </>
      )}
    </div>
  );
};
export default ShowShelves;
