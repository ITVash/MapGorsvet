import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { coupActions } from './../../redux/action'

const Main = ({ fetchCoup, items }) => {
  console.log('Coup: ', items);
  useEffect(() => {
    if (!items.length) {
      fetchCoup()
    }
  }, [items]);
  return (
    <div>
      <h2>Главная</h2>
    </div>
  )
};

export default connect(({ coup }) => coup, coupActions)(Main);
