import React, { useContext } from 'react'
import PropertyListingsContext from '../../context/PropertyListingsProvider'
import Listing from '../../components/listing'
import Hero from '../../components/hero'
import Filter from '../../components/filter'
import styles from './styles.module.css'

function Home() {
  const { propertyListings } = useContext(PropertyListingsContext)

  return (
    <>
      <Hero />
      <div className={styles.container}>
        <Filter />
        <div className="columns">
          {propertyListings &&
            propertyListings.map(listing => (
              <Listing listing={listing} key={listing.address} />
            ))}
        </div>
      </div>
    </>
  )
}

export default Home
