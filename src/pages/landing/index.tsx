import './styles.scss'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import giveClassesIcon from '../../assets/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/icons/purple-heart.svg'
import studyIcon from '../../assets/icons/study.svg'
import landingImg from '../../assets/images/landing.svg'
import logoImg from '../../assets/images/logo.svg'
import api from '../../services/api'





function Landing() {

  const [totalConnections, setTotalConnections] = useState('nothing')

  useEffect(() => {
    api.get('connections').then(res => setTotalConnections(res.data.total))
  }, [])


  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Your online studying platform</h2>
        </div>
        <img
          src={landingImg}
          alt="stydies platform"
          className="hero-image"
        />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="study" />
            Study
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="give classes" />
            Give Classes
          </Link>
        </div>
        <span className="total-connections">
          Total of {totalConnections} connections <img src={purpleHeartIcon} alt="connections" />
        </span>
      </div>
    </div>
  )
}

export default Landing;