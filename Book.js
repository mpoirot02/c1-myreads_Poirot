const Book = ({ onBookShelfChangeInd, individualBook, originalList }) => {
  const changeShelf = (event) => {
    event.preventDefault();
    onBookShelfChangeInd(individualBook, event.target.value);
  };
  let checkList = originalList;
  let check = "";
  let image = "";

  try {
    if (checkList !== undefined) {
      check = checkList.filter((c) => c.id === individualBook.id);
    } else {
    }
  } catch (error) {
    console.log(error);
  }

  try {
    if (individualBook.imageLinks !== undefined) {
      image = individualBook.imageLinks.thumbnail;
    } else {
      image =
        "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
    }
  } catch (error) {
    console.log(error);
  }

  console.log(individualBook);

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 192,
            backgroundImage: `url(${image})`,
            backgroundSize: "128px 192px",
          }}
        ></div>
        <div className="book-shelf-changer">
          {check.length === 0 ? (
            <select value={individualBook.shelf} onChange={changeShelf}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
            </select>
          ) : (
            <select value={individualBook.shelf} onChange={changeShelf}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          )}
        </div>
      </div>
      <div className="book-title">{individualBook.title}</div>
      {individualBook.authors.map((author) => {
        return <div className="book-authors">{author}</div>;
      })}
    </div>
  );
};

export default Book;
