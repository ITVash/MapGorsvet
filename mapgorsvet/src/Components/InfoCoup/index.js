import React from 'react'
import { Icon } from 'antd'
import './style.scss';
const InfoCoup = (props) => {
  console.log("Это для информации", props);
  const area = {
    1: "Ворошиловском районе",
    2: "Киевском районе",
    3: "Калининском районе",
    4: "Куйбышевском районе",
    5: "Ленинском районе",
    6: "Кировском районе",
    7: "Петровском районе",
    8: "Буденовском районе",
    9:  "Пролетарском районе"
  }
  return (
    <div className="info-box">
      <span className="info-box__close" onClick={
        () => {
          const wind = document.querySelector(".info-box");
          wind.classList.toggle("close");
        }
      }><Icon type="close" /></span>
      <div className="info-box__title">
        <h3>{props.items.title}</h3>
        <span>{area[props.items.areaID]}</span>
      </div>
      <div className="info-box__content">
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
        <h3>Комплектация</h3>
      </div>
    </div>
  )
}

export default InfoCoup