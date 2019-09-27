import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import GoogleMaps from './../Google-maps';
import { coupActions } from './../../redux/action';
import { SearchBox } from './../../Components';

const Main = ({ fetchCoup, setCurentID, items }) => {
  const [ SearchValue, setValue ] = useState('');
  const [ setCoup, setSelectCoup ] = useState(null);
  const [ filtered, setFiltered ] = useState(Array.from(items));
  const onSearch = value => {
    setFiltered(items.filter(item => item.title.toLowerCase().indexOf(value.toLowerCase()) >= 0));
    setValue(value);
  };
  useEffect(() => {
    if (!items.length) {
      fetchCoup();
    } else {
      setFiltered(items);
    }
  }, [items]);
  const alltt = (id, item) => {
    setCurentID(id);
    setSelectCoup(item);
  };
  return (
    <React.Fragment>
      <SearchBox 
        onSearch={ onSearch } 
        SearchValue={ SearchValue } />
      <GoogleMaps 
        coups={ filtered } 
        onSelectCoup={ setCurentID } 
        setCoup={ setCoup } 
        setSelectCoup={ alltt } 
        nullState={ setSelectCoup } />
    </React.Fragment>
  )
};

export default connect(({ coup }) => coup, coupActions)(Main);
