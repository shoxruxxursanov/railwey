import React from 'react'
import './filial.css'

export const Filial = ({filial}) => {
  return (
    <div className="filial-bg">
      <div className="filial-window">
        <h1 className="filial-title">
          "O'ztemiryo'l yo'lovchi" АЖ-нинг жойлардаги филиал номалари
        </h1>
        <ul className="filial-menu">
          {filial.map((el, ind) => (
            <li key={ind} className="filial-item">
              {ind + 1}. {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
