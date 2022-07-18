import { useState } from "react";

export default function Book({ book, index }) {
  const [expanded, setExpanded] = useState(false);
  const { title, author, shortDescription, coverImageUrl } = { ...book };
  return (
    <div className="book-info">
      <p>Title: {title} </p>
      <p>Author: {author} </p>
      <p> {shortDescription} </p>
      <img src={coverImageUrl}></img>
      <br></br>

      <button
        type="button"
        aria-expanded="true"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Show more"}
      </button>
      {expanded ? (
        <div>
          URL: {book.url}
          <br></br>
          Publication Date: {book.publicationDate}
          <br></br>
          Publisher: {book.publisher}
          <br></br>
          {book.detailedDescription}
        </div>
      ) : null}
    </div>
  );
}
