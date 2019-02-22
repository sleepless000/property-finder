/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext, useEffect } from 'react'
import classnames from 'classnames'
import PropertyListingsContext from '../../context/PropertyListingsProvider'

import styles from './styles.module.css'

const defaultState = {
  priceFrom: '',
  postcode: '',
  sortOrder: '',
  sortOrders: ['Highest First', 'Lowest First']
}

function Filter() {
  const [formState, setFormState] = useState(defaultState)
  const { setFilter, allListings } = useContext(PropertyListingsContext)

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    setFilter(formState)
  }, [formState])

  const containerClasses = classnames('container', 'mb-1', styles.container)
  const formClasses = classnames('form-horizontal', styles.form)

  const postcodes = allListings
    .map(listing => listing.postcode.split(' ')[0])
    .filter((item, i, arr) => arr.indexOf(item) === i)

  return (
    <div className={containerClasses}>
      <form className={formClasses} noValidate>
        <p className="mb-1">Refine your results</p>
        <div className="columns text-center">
          <div className="column col-4 col-xs-12">
            <div className="form-group">
              <div className="col-3 col-sm-12">
                <label className="form-label" htmlFor="price-from">
                  Price from
                </label>
              </div>
              <div className="col-9 col-sm-12">
                <input
                  className="form-input"
                  min="0"
                  max="10000000"
                  type="number"
                  id="price-from"
                  placeholder="£1,000,000"
                  value={formState.priceFrom}
                  onChange={handleChange}
                  name="priceFrom"
                />
              </div>
            </div>
          </div>
          <div className="column col-4 col-xs-12">
            <div className="form-group">
              <div className="col-3 col-sm-12">
                <label className="form-label" htmlFor="postcode">
                  Postcode
                </label>
              </div>
              <div className="col-9 col-sm-12">
                <select
                  name="postcode"
                  className="form-select"
                  id="postcode"
                  value={formState.postcode}
                  onChange={handleChange}
                >
                  <option value="">Choose...</option>
                  {postcodes.map(pc => (
                    <option key={pc} value={pc.toLowerCase()}>
                      {pc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="column col-4 col-xs-12">
            <div className="form-group">
              <div className="col-3 col-sm-12">
                <label className="form-label" htmlFor="sortorder">
                  Sort Order
                </label>
              </div>
              <div className="col-9 col-sm-12">
                <select
                  className="form-select"
                  id="sortorder"
                  value={formState.sortOrder}
                  onChange={handleChange}
                  name="sortOrder"
                >
                  <option value="">Choose...</option>
                  {formState.sortOrders.map(order => (
                    <option key={order} value={order.replace(' ', '').toLowerCase()}>
                      {order}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Filter
