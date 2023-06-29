import React from "react";
// import "./Layout.scss";
import Book1 from "../../Images/RichPoor.jpg";
import Book2 from "../../Images/Gita.jpeg";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../../components/Home/Home";

const books = [
    {
      id: 1,
      title: "Book 1",
      author: "Author 1",
      description: "Description of Book 1",
      coverImage: Book2,
      largeCoverImage: "book1_large.jpg",
      purchaseLink: "",
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author 2",
      description: "Description of Book 2",
      coverImage: Book1,
      largeCoverImage: "book2_large.jpg",
      purchaseLink: "",
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author 2",
      description: "Description of Book 2",
      coverImage: Book2,
      largeCoverImage: "book2_large.jpg",
      purchaseLink: "",
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author 2",
      description: "Description of Book 2",
      coverImage: Book1,
      largeCoverImage: "book2_large.jpg",
      purchaseLink: "",
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author 2",
      description: "Description of Book 2",
      coverImage: Book2,
      largeCoverImage: "book2_large.jpg",
      purchaseLink: "",
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author 2",
      description: "Description of Book 2",
      coverImage: Book2,
      largeCoverImage: "book2_large.jpg",
      purchaseLink: "",
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author 2",
      description: "Description of Book 2",
      coverImage: Book2,
      largeCoverImage: "book2_large.jpg",
      purchaseLink: "",
    },
    // Add more book objects as needed
  ];
  
  const Layout = () => {
    return (
      <div>
        <header>
          <Navbar />
        </header>
  
        <main>
         <Home books={books}/>
        </main>
      </div>
    );
  };
  
  export default Layout;