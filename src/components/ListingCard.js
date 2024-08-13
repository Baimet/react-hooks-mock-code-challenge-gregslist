import React, { useState } from "react";

function ListingCard({ id, description, image, location, onDeleteListing }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavoriteClick() {
    setIsFavorite((isFavorite) => !isFavorite);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    }).then(() => onDeleteListing(id)); // Call the delete function passed from the parent
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button
          className={`emoji-button favorite ${isFavorite ? "active" : ""}`}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? "★" : "☆"}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
