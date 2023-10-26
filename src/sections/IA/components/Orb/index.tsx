import React from 'react'
import './styles.scss'

export const Orb: React.FC = () => {
  return (
    <div className="container">
      <div className="personal-assistant">
        <div id="felix" className="felix" onClick="activateFelix();">
          <div className="eyes">
            <div className="eye left"></div>
            <div className="eye right"></div>
          </div>
        </div>
        <div className="platform"></div>
        <ul className="command-list">
          <li><i className="far fa-clouds" onClick="getWeather();"></i></li>
          <li><i className="far fa-clock" onClick="getTime();"></i></li>
          <li><i className="far fa-calendar-alt" onClick="getDate();"></i></li>
          <li><i className="far fa-grin-squint-tears" onClick="tellJoke();"></i></li>
          <li><i className="far fa-search" onClick="searchGoogle();"></i></li>
          <li><i className="far fa-lightbulb-on" onClick="showInspiration();"></i></li>
          <p className="hey-felix lead"></p>
        </ul>
      </div>
      <div className="input-container">
        <label htmlFor="">
          _ask Bobby any question about Victor...
        </label>
        <input type="text" className="input" placeholder='Hey mate, tell me the victor"s age'/>
        <i className="ri-search-line"></i>
      </div>
    </div>
  )
};


