import React, { useContext } from 'react'
import PropertyListingsContext from '../../context/PropertyListingsProvider'
import PropertyDetails from '../../components/propertyDetails'
import Hero from '../../components/hero'

function Details({ propertyId }) {
  const { getListingByPropertyId } = useContext(PropertyListingsContext)
  return (
    <>
      <Hero miniHero />
      <div style={{ margin: '0 auto', maxWidth: 1000 }}>
        <PropertyDetails listing={getListingByPropertyId(propertyId)} />
      </div>
    </>
  )
}

export default Details
