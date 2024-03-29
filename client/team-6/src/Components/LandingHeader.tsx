
import React,{useState, useEffect} from 'react'
import ResLogo from '/Personal Programming Projects/CodeForGood23/Team-6/client/team-6/src/Photos/res-logo.png'
import { Link } from 'react-router-dom'


const LandingHeader = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open)
  };


  return (
    <nav className="bg-gray-900 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center">
          <img
            src={ResLogo}
            className="h-32 w-32 scale-150 mr-3"
            alt="RES"
          />
        </a>
        <button
  data-collapse-toggle="navbar-default"
  type="button"
  className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  onClick={toggleMenu}
  aria-controls="navbar-default"
  aria-expanded={open ? 'true' : 'false'}
>


          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={`${open ? 'block' : 'hidden'
          } w-full md:block md:w-auto mt-4 md:mt-0`}

          >
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/Auth/User" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/Auth/Login" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Login
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


  )
}

export default LandingHeader;