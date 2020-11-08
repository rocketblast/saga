import React from 'react'
import style from './style.module.css';
import data from './data'

const fontDescription = {
  color: 'rgba(255, 255, 255, .5)',
  whiteSpace: 'pre-wrap',
}

const fontPrice = {
  whiteSpace: 'nowrap',
}

const PriceList = () => <div style={ {
  display: 'flex',
  flexWrap: 'wrap',
  backgroundColor: 'rgba(0, 0, 0, .8)',
  color: 'white',
  padding: '30px 30px 0',
} }>
  { data.map(({ title, description, entries }) => (
    <div className={ style.container } key={title}>
      <h2>{ title }</h2>
      { description && <p>{description}</p>}
      <div className={ style.entries }>
        { entries.map(({ title, description, prices }, row) => (<>
          <div style={ { gridRow: row * 2 + 1 } }><h3>{ title }</h3></div>
          <div style={ { gridRow: row * 2 + 2, ...fontDescription,  } }>{ description }</div>
          { prices.map((price, index) => (
            <>
              <div style={ { gridArea: `${row * 2 + 1} / ${index + 2}`, ...fontPrice } }><h3>{price.value} {price.unit}</h3></div>
              <div style={ { gridArea: `${row * 2 + 2} / ${index + 2}` } }>{price.type}</div>
            </>
          ))
          }
        </>)) }
      </div>
    </div>
  )) }
</div>

export default PriceList
