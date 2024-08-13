import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchTerm }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => setListings(data));
  }, []);

  function handleDeleteListing(id) {
    const updatedListings = listings.filter((listing) => listing.id !== id);
    setListings(updatedListings);
  }

  const displayedListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <ul className="cards">
        {displayedListings.map((listing) => (
          <ListingCard
            key={listing.id}
            id={listing.id}
            description={listing.description}
            image={listing.image}
            location={listing.location}
            onDeleteListing={handleDeleteListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
