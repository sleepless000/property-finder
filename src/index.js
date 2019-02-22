import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import { PropertyListingsProvider } from './context/PropertyListingsProvider'
import Home from './pages/Home'
import Details from './pages/Details'
import NotFound from './pages/NotFound'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <PropertyListingsProvider>
    <Router>
      <Home path="/" />
      <Details path="/details/:propertyId" />
      <NotFound default />
    </Router>
  </PropertyListingsProvider>,
  document.getElementById('root')
)
