import React from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const LandingContent = () => {

  const ScrollDown = () => {
    window.scrollTo({
        top: 800,
        behavior: 'smooth'
    })
}

  return (
    <>
    {/* The main wrapper of the landing page */}
    <div className = "">
      {/* The first panel */}
      <div className = "text-center text-7xl font-semibold p-24">
        <span>Innovative Strategies for Sustainability:</span>
        <span> How Our Website is Changing the Game</span>
        <br/>
        <span className = "text-lg"> Join hands with us to build a sustainable future for our city, one practical solution at a time</span>
      </div>
      <AiOutlineArrowDown className='absolute bottom-0 left-0 right-0 mx-auto mb-[3rem] text-8xl animate-bounce text-black z-10' onClick={ScrollDown}/>
      {/*Second panel*/}
      <div className = 'p-28'>
        <span className = "font-bold text-4xl">OUR MISSION</span>
        <div className = ' text-xl flex flex-row pt-5 pr-6'>
          <div>
            <span className = "text-green-500 text-2xl font-bold">01<br/></span>
            <span>Work hand in hand with businesses and individuals to build a more sustainable city<br/></span>
          </div>
          <div>
            <span className = "text-green-500 text-2xl font-bold">02<br/></span>
            <span>Create a future where our city is not only prosperous, but also environmentally conscious<br/></span>
          </div>
          <div>
            <span className = "text-green-500 text-2xl font-bold">03<br/></span>
            <span>Provide practical solutions that enable businesses and individuals to take positive steps towards a more sustainable future</span>
          </div>
        </div>
      </div>
      {/* The third panel */}
      <div>
        <div className = 'text-2xl text-center p-28'>
          <div>
            <span>
              "Build a brighter and eco-conscious community, take practical steps towards sustainability together."
            </span>
            <img></img>
          </div>
        </div>
      {/* Final panel */}
      <div className = 'text-center'>
        <span className='text-2xl'>So get started with us!</span>
        <div className = "flex flex-col space-y-4 items-center p-4">
          <button className = "bg-green-500 hover:bg-green-700 text-white font-bold rounded-full py-2 px-4 inline-block h-12 w-72">
            <Link to = "/Auth/business">
            Register as business
            </Link>
            </button>
          <button className = "bg-green-500 hover:bg-green-700 text-white font-bold rounded-full py-2 px-4 inline-block h-12 w-72">
            <Link to = "/Auth/User">
            Register as individual
            </Link>

          </button>
        </div>
      </div>
      </div>

    </div>
    </>

  )
}

export default LandingContent;