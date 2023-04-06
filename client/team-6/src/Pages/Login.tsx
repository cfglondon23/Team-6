import React, {useState} from 'react'
import {FcGoogle} from 'react-icons/fc'
import Logo from '../Photos/My project.png'
import { Link } from 'react-router-dom'
import {auth} from '../firebase/firebase'
import {signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import {redirect} from "react-router-dom"
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [name, setName] = useState('')

        const LoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
        }

        onAuthStateChanged(auth, (user) => {
            if (user) {
                // if user is logged in, redirect to the business dashboard
                redirect('/business/dashboard')
                // display hello user name in console
                console.log('hello', user)
            }
            else{
                // if user is not logged in, redirect to the business login page
                redirect('/Auth/business')
            }

        })



  return (
    <> 
        <div className="flex flex-wrap w-full justify-center items-center min-h-screen">
            <div className="flex flex-col w-full md:w-1/2 bg-white min-h-screen">
                <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                    <div className='pt-5'>
                    <img src={Logo} className="w-40 h-40 mx-auto" alt="logo"/>
                    </div>
                    <form onSubmit={LoginSubmit} className="flex flex-col pt-3 md:pt-8">
                        <div className="flex flex-col pt-4">
                        <label  className="block mb-2 text-sm font-medium text-slate-300">Email</label>
                            <div className="flex relative ">
                                <input onChange={(e) => setEmail(e.target.value)} type="text" id="design-login-email" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-[#dce3eb] text-gray-700 rounded-md placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="flex flex-col pt-4 mb-12">
                        <label  className="block mb-2 text-sm font-medium text-slate-300">Password</label>
                            <div className="flex relative ">
                                <input onChange={(e) => setPassword(e.target.value)} type="password" id="design-login-password" className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-[#dce3eb] text-gray-700 rounded-md placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" placeholder="Password"/>
                            </div>
                        </div>

                        <div className="pt-12 pb-12 text-center">
                        <p>
                            Don&#x27;t have an account?
                            <Link to="/Auth/User" className="font-semibold text-black hover:text-red-600">
                                Sign Up
                            </Link>
                        </p>
                        </div>
                        <button type="submit" className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-[#dce3eb] rounded-md shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2">
                            <span className="w-full text-black">
                                Submit
                            </span>
                        </button>
                        {/* put two lines with the text or inbetween */}
                        <div className="flex items-center justify-center pt-12 pb-12">
                            <div className="flex items-center justify-center w-full h-px bg-gray-300">
                                <div className="flex items-center justify-center px-4 text-sm text-gray-500 uppercase bg-white">
                                    or
                                </div>
                            </div>
                        </div>
                        <button className="w-full px-4 py-2 text-base font-semibold text-center text-black transition duration-200 ease-in bg-[#dce3eb] shadow-md hover:bg-red-600 focus:outline-none focus:ring-2">
                            <FcGoogle className="inline mr-2" />
                                Sign In with Google
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 bg-[#2DA7A1] min-h-screen justify-center items-center">
                <p className='text-white text-center text-5xl'>
                    Join hands with us to build a <b>sustainable</b> future for our city, one practical solution at a time.
                </p>
            </div>
        </div>
    </>
)
}

export default Login