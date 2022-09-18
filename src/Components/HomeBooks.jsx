import { useEffect, useState } from "react";
import axios from "axios";
import "./HomeBooks.css";

function HomeBooks({ fetchBook, title }) {
  const [books, setBooks] = useState([]);
  const [Fetching, setFetching] = useState(false);
  const [AllBooks, setAllBooks] = useState([]);
  
  useEffect(() => {
    async function fetchBooks() {
      await axios
        .get(fetchBook)
        .then((data) => {
          setBooks(data.data.items);
          // setFetching(true);
        })
        .catch((error) => {
          setFetching(false);
          console.log(error);
        });
    }

    fetchBooks();
  }, [fetchBook]);

  return (
    <>
      <div className="books">
        <h2 className="genre-name">{title}</h2>
        {
          <div className="books-details">
            {books.map((book) => (
              <div className="book-details">
                <div className="book-img">
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    key={book.volumeInfo.id}
                  />
                </div>
                <h3 className="book-title">{book.volumeInfo.title}</h3>
                {/* <p className="book-subtitle">{book.volumeInfo.subtitle}</p> */}
              </div>
            ))}
          </div>
        }
        ;
      </div>
    </>
  );
}

export default HomeBooks;
