import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const PropertyListingsContext = createContext();

function PropertyListingsProvider({ children }) {
  const [propertyListings, setPropertyListings] = useState([]);
  const [filter, setFilter] = useState({});

  function applyFilter(listings, { priceFrom, postcode, sortOrder }) {
    let result = listings;
    if (priceFrom) {
      const from = Number(priceFrom);
      result = result.filter(item => item.price >= from);
    }
    if (postcode) {
      result = result.filter(item =>
        item.postcode.toLowerCase().startsWith(postcode)
      );
    }
    if (sortOrder) {
      if (sortOrder === 'highestfirst') {
        result = result.sort((a, b) => b.price - a.price);
      }
      if (sortOrder === 'lowestfirst') {
        result = result.sort((a, b) => a.price - b.price);
      }
    }

    return result;
  }

  function getListingByPropertyId(propertyId) {
    return propertyListings.find(listing => listing.id === Number(propertyId));
  }

  async function getData() {
    try {
      const { data } = await axios.get('./server/listings.json');
      console.log(data);

      // const res = await fetch('../server/listings.json');
      // console.log(res);
      // const json = await res.json();
      setPropertyListings(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <PropertyListingsContext.Provider
      value={{
        allListings: propertyListings,
        propertyListings: applyFilter(propertyListings, filter),
        setFilter,
        getListingByPropertyId
      }}
    >
      {children}
    </PropertyListingsContext.Provider>
  );
}

export { PropertyListingsProvider, PropertyListingsContext as default };
