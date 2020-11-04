import React from 'react'

import PriceList from './PriceList'
import Logotype from './Logotype'

const layer = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
}

const Dashoard = () => <>
  <div style={ {
    position: 'relative',
    width: '100vw',
    height: '80vh',
  } }>
    <div style={ {
      ...layer,
      backgroundImage: 'url(https://res.cloudinary.com/timma/image/upload/h_1600,q_90/v1502094741/c/sagas-h-rstudio-edb15e30-7b4a-11e7-976a-7d8ca094ffa6.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'grayscale(75%) sepia(50%) brightness(75%)',
    } } />
    <div style={ {
      ...layer,
      backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, .75), rgba(0, 0, 0, 0))',
    } } />
    <div style={ layer }>
      <Logotype fill="white" style={ { maxHeight: '60vh' } }/>
      <div style={ { maxWidth: 670, color: 'white', margin: '0 auto' } }>
        <p>Vi vill hälsa dig varmt välkommen in till någon av våra salonger för en avslappnande stund där just du står i fokus.</p>
        <p>Lämna vardagens stress vid dörren och gå in i en miljö där du kan vara trygg med att vår erfarna och kunniga personal tar hand om dig på bästa sätt.</p>
      </div>
    </div>
  </div>
  <PriceList />
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  Saga
</>

export default Dashoard
