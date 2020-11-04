import React from 'react'

const priceTypes = {
  short: 'kort',
  medium: 'mellan',
  long: 'långt',
}

const data = [
  {
    title: 'Klippning långt hår',
    description: 'Klippning och styling av långt hår nedanför axlarna inklusive tvätt & fön.\nVid långt och tjock hår kan priset öka pga tiden och materialåtgång.',
    prices: [
      {
        value: 550,
        unit: 'kr',
        type: priceTypes.long,
      },
      {
        value: 590,
        unit: 'kr',
        type: priceTypes.medium,
      },
      {
        value: 690,
        unit: 'kr',
        type: priceTypes.long,
      },
    ],
  },
  {
    title: 'Klippning för barn',
    description: 'Barn klippning upp till 11 år.\nPrisökning kan förekomma vid långt / tjock hår.',
    prices: [
      {
        value: 350,
        unit: 'kr',
      },
    ],
  },
]

const fontTitle = {
  fontWeight: 'bold',
  fontSize: 'large',
}
const fontDescription = {
  color: 'rgba(255, 255, 255, .5)',
  fontSize: 'small',
  whiteSpace: 'pre-wrap',
}
const fontPrice = {
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
}
const fontPriceType = {
  fontSize: 'small',
}

const PriceList = () => <div style={ {
  display: 'flex',
  flexWrap: 'wrap',
  backgroundColor: 'rgba(0, 0, 0, .8)',
  color: 'white',
  padding: 30,
} }>
    <div style={ { display: 'grid', gridTemplateColumns: '5fr 1fr 1fr 1fr', width: '30%', minWidth: 550 } }>
      { data.map(({ title, description, prices }, row) => (<>
        <div style={ { gridRow: row * 2 + 1, ...fontTitle } }><h3>{ title }</h3></div>
        <div style={ { gridRow: row * 2 + 2, ...fontDescription,  } }>{ description }</div>
        { prices.map((price, index) => (
          <>
            <div style={ { gridArea: `${row * 2 + 1} / ${index + 2}`, ...fontPrice } }><h3>{price.value} {price.unit}</h3></div>
            <div style={ { gridArea: `${row * 2 + 2} / ${index + 2}`, ...fontPriceType } }>{price.type}</div>
          </>
        ))
        }
      </>)) }
    </div>
    <div style={ { display: 'grid', gridTemplateColumns: '5fr 1fr 1fr 1fr', width: '30%', minWidth: 550 } }>
      { data.map(({ title, description, prices }, row) => (<>
        <div style={ { gridRow: row * 2 + 1, ...fontTitle } }><h3>{ title }</h3></div>
        <div style={ { gridRow: row * 2 + 2, ...fontDescription,  } }>{ description }</div>
        { prices.map((price, index) => (
          <>
            <div style={ { gridArea: `${row * 2 + 1} / ${index + 2}`, ...fontPrice } }><h3>{price.value} {price.unit}</h3></div>
            <div style={ { gridArea: `${row * 2 + 2} / ${index + 2}`, ...fontPriceType } }>{price.type}</div>
          </>
        ))
        }
      </>)) }
    </div>
    <div style={ { display: 'grid', gridTemplateColumns: '5fr 1fr 1fr 1fr', width: '30%', minWidth: 550 } }>
      { data.map(({ title, description, prices }, row) => (<>
        <div style={ { gridRow: row * 2 + 1, ...fontTitle } }><h3>{ title }</h3></div>
        <div style={ { gridRow: row * 2 + 2, ...fontDescription,  } }>{ description }</div>
        { prices.map((price, index) => (
          <>
            <div style={ { gridArea: `${row * 2 + 1} / ${index + 2}`, ...fontPrice } }><h3>{price.value} {price.unit}</h3></div>
            <div style={ { gridArea: `${row * 2 + 2} / ${index + 2}`, ...fontPriceType } }>{price.type}</div>
          </>
        ))
        }
      </>)) }
    </div>
</div>

export default PriceList
