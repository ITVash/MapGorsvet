import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import GoogleMaps from './../Google-maps'
import { coupActions } from './../../redux/action'

const Main = ({ fetchCoup, items }) => {
  console.log('Coup: ', items);
  useEffect(() => {
    if (!items.length) {
      fetchCoup()
    }
  }, [items]);
  return (
    <React.Fragment>
      <GoogleMaps coups={ items } />
    </React.Fragment>
  )
};

export default connect(({ coup }) => coup, coupActions)(Main);
