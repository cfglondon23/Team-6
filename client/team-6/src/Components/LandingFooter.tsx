import React from 'react'
import Team6Logo from '../Photos/team-6-logo.png'
import { Link } from 'react-router-dom'

const LandingFooter = () => {
  return (
    <footer className="bg-gray-900 shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-2 md:py-0">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="flex items-center mb-4 sm:mb-0">
            <img
              src={Team6Logo}
              className="h-32 w-32 mr-3"
              alt="Team 6 Logo"
            />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              Team 6
              . All Rights Reserved.
            </span>
          </span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 hover:text-green-800">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-green-800">
                Contact
              </a>
            </li>
          </ul>
        </div>
  </div>
</footer>

  )
}

export default LandingFooter;