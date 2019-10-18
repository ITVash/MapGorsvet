import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import GoogleMaps from './../Google-maps';
import { coupActions } from './../../redux/action';
import { SearchBox, authHoc } from './../../Components';

const Main = ({ fetchCoup, setCurentID, items, isAuth }) => {
  const [ SearchValue, setValue ] = useState('');
  const [ setCoup, setSelectCoup ] = useState(null);
  const [ filtered, setFiltered ] = useState(Array.from(items));
  console.log("main ", isAuth);
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
  if (!isAuth) return <Redirect to="/login" />;
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
let mapStateIsProps = (state) => {
  return {
  fetchCoup: state.coup.fetchCoup,
  setCurentID: state.coup.setCurentID,
  items: state.coup.items,
  isAuth: state.auth.isAuth
  }
};
//let RedirectMain = authHoc(Main);
//export default connect(({ coup }) => coup, coupActions)(Main);
export default connect(mapStateIsProps, coupActions)(Main);
