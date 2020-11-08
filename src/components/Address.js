import React from 'react'

const Address = () =>
  <div style={ { maxWidth: 670, color: '#666', margin: '30px auto 50px', display: 'flex', padding: '0 30px' } }>
    <address style={ { width: '50%' } }>
      <h3>SAGA HÅRSTUDIO</h3>
      A<br />
      Hantverkargatan 37<br />
      11221 Stockholm<br />
      <a href="tel:+4686508800">08-650 88 00</a><br />
      <a href="tel:+46704227525">070-422 75 25</a><br />
      <a href="mailto:sagasharstudio@gmail.com">sagasharstudio@gmail.com</a>
    </address>
    <address style={ { width: '50%' } }>
      <h3>SAGA HÅR & SKÖNHET</h3>
      B<br />
      Linnégatan 58<br />
      114 54 Stockholm<br />
      <a href="tel:+46704227525">070-422 75 25</a><br />
      <a href="mailto:saga79_nm@hotmail.com">saga79_nm@hotmail.com</a>
    </address>
  </div>

export default Address
