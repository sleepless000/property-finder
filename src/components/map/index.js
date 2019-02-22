import React from 'react'

function Map({ address }) {
  // const address = 'Northwold Road, London, Greater London, E5'
  const search = `https://maps.google.com/maps?q=${address}&t=&z=16&ie=UTF8&iwloc=&output=embed`

  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title={address}
          src={search}
          width="100%"
          height="500"
          id="gmap_canvas"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        />
      </div>
    </div>
  )
}

export default Map
