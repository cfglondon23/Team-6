import React from 'react'

const LandingContent = () => {
  return (
    <>
    {/* The main wrapper of the landing page */}
    <div className = "whitespace-no-wrap overflow-hidden">
      {/* The first panel */}
      <div className = 'text-center text-3xl font-semibold p-24 bg-center bg-cover bg-no-repeat bg-fixed' style={{ backgroundImage: 'url("panel-background.jpg")' }}>
        <span>Innovative Strategies for Sustainability:</span>
        <span> How Our Website is Changing the Game</span>
        <br/>
        <span className = "text-xs"> Join hands with us to build a sustainable future for our city, one practical solution at a time</span>
      </div>
      {/*Second panel*/}
      <div className = 'p-28'>
        <span className = "font-bold text-4xl">OUR MISSION</span>
        <div className = 'flex flex-row pt-5 pr-6'>
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
        <div className = 'text-center p-28'>
          <div>
            <span>
              "Build a brighter and eco-conscious community, take practical steps towards sustainability together."
            </span>
            <img></img>
          </div>
        </div>
      {/* Final panel */}
      <div className = 'text-center'>
        <span>So get started with us!</span>
        <div className = "flex flex-col space-y-4 items-center p-4">
          <button className = "bg-green-500 hover:bg-green-700 text-white font-bold rounded-full py-2 px-4 inline-block h-12 w-72">Register as business</button>
          <button className = "bg-green-500 hover:bg-green-700 text-white font-bold rounded-full py-2 px-4 inline-block h-12 w-72">Register as individual</button>
        </div>
      </div>
      </div>

    </div>
    </>

  )
}

export default LandingContent;