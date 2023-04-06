import React,{useState, useEffect} from 'react'
import LandingHeader from '../Components/LandingHeader'
import LandingFooter from '../Components/LandingFooter'
import LandingContent from '../Components/LandingContent'

const Landing = () => {

  return (
    <div className='whitespace-no-wrap overflow-hidden bg-center bg-cover bg-no-repeat landing-page'>
      <LandingHeader/>
      <LandingContent/>
      <LandingFooter/>
    </div>
  )
}

export default Landing