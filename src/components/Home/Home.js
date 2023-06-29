import React from "react";
import './Home.scss'
import { Link } from "react-router-dom";
const Home = ({books}) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {books.map((book) => (
            <div className="col-md-6 col-lg-4" key={book.id}>
              <div
                className="book"
                style={{ backgroundImage: `url(${book.coverImage})` }}
              >
                <div className="book-content">
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <p>{book.description}</p>
                  <Link to={`${book.purchaseLink}`}>Purchase</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
