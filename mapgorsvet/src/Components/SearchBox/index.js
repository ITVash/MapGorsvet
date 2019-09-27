import React from 'react'
import './style.scss';
import { Input } from 'antd'

const SearchBox = ({ onSearch, SearchValue }) => {
  return (
    <div className="serch-box">
      <Input.Search 
        placeholder="Название шкафа"
        style={{ width: 236, top: 8 }}
        onChange={e => onSearch(e.target.value)}
        value={ SearchValue }
      />
    </div>
  )
}


export default SearchBox
