import * as React from 'react';
import classnames from 'classnames';
import Gallery from '../gallery';
import KeyFeatures from '../keyFeatures';
import Map from '../map';

function PropertyDetails({ listing }) {
  if (!listing) {
    return null;
  }

  const {
    title,
    address,
    description,
    price,
    features,
    details,
    image
  } = listing;
  const priceClasses = classnames('text-success', 'text-right');

  return (
    <div>
      <div className="columns">
        <div className="column col-9 col-xs-12">
          <div className="hero hero-sm hero-dark">
            <div className="hero-body">
              <h1>{title}</h1>
              <p className="text-dark text-small mb-1">{description}</p>
            </div>
          </div>
        </div>
        <div className="column col-3 col-xs-12">
          <h5 className={priceClasses}>
            <small>Priced from</small>
            <br />
            &pound;
            {price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
          </h5>
        </div>
      </div>
      <div className="columns">
        <div className="column col-6 col-xs-12">
          <Gallery image={image} title={title} />
        </div>
        <div className="column col-6 col-xs-12">
          <KeyFeatures features={features} />
        </div>
      </div>
      <p className="text-bold mt-3">Full Details</p>
      {details.map(detail => (
        <p key={detail}>{detail}</p>
      ))}
      <p className="text-bold mt-3">Map</p>
      <Map address={address} />
    </div>
  );
}

export default PropertyDetails;
