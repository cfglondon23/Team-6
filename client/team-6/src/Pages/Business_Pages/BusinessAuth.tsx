import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '/Personal Programming Projects/CodeForGood23/Team-6/client/team-6/src/Photos/My project.png'
import {auth, db} from '/Personal Programming Projects/CodeForGood23/Team-6/client/team-6/src/firebase/firebase'
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import {collection, addDoc} from 'firebase/firestore'
import {redirect} from "react-router-dom"


const BusinessAuth = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(auth, email, password)
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
        else {
            setError('Passwords do not match')
        }

        const docRef = await addDoc(collection(db, "users"), {
            name: name,
            email: email,
            password: password,
            type: 'business'
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
    <div>
       <> 
        <div className="flex flex-wrap w-full justify-center items-center min-h-screen">
            <div className="flex flex-col w-full md:w-1/2 bg-white min-h-screen">
                <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                  <img src={logo} className="w-40 h-40 mx-auto" alt="logo"/>
                    <div className='pt-5'>
                    <h2 className='text-4xl font-semibold'>
                      Create a business account
                    </h2>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col pt-3 md:pt-8">
                        <div className="flex flex-col pt-4">
                        <label  className="block mb-2 text-sm font-medium text-black">Name</label>
                            <div className="flex relative ">
                                <input onChange={(e) => setName(e.target.value)} type="text" id="design-login-email" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-[#dce3eb] text-gray-700 rounded-md placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="flex flex-col pt-4">
                        <label  className="block mb-2 text-sm font-medium text-black">Email</label>
                            <div className="flex relative ">
                                <input onChange={(e) => setEmail(e.target.value)} type="text" id="design-login-email" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-[#dce3eb] text-gray-700 rounded-md placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="flex flex-col pt-4">
                        <label  className="block mb-2 text-sm font-medium text-black">Password</label>
                            <div className="flex relative ">
                                <input onChange={(e) => setPassword(e.target.value)} type="password" id="design-login-password" className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-[#dce3eb] text-gray-700 rounded-md placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" placeholder="Password"/>
                            </div>
                        {/* tell users to add special characters to the their password */}
                        <label className="block text-xs font-medium text-black">Password must contain at least 8 characters</label>
                        </div>
                        <div className="flex flex-col pt-4">
                        <label  className="block mb-2 text-sm font-medium text-black">Confirm Password</label>
                            <div className="flex relative ">
                                <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" id="design-login-password" className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-[#dce3eb] text-gray-700 rounded-md placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="pt-4 pb-8 text-center">
                        <p>
                            Already have a business account? 
                            <Link to="/Auth/Login" className="font-semibold text-black hover:text-red-600">
                                Login
                            </Link>
                        </p>
                        <p className='pt-2'>
                            Are you a customer?  
                            <Link to="/Auth/User" className="font-semibold text-black hover:text-red-600">
                                Register Now
                            </Link>
                        </p>
                        </div>
                        <button type="submit" className="w-full  px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black rounded-md shadow-md hover:text-black hover:bg-black focus:outline-none focus:ring-2">
                            <span className="w-full text-white">
                                Submit
                            </span>
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 bg-[#2DA7A1] min-h-screen justify-center items-center">
                <p className='text-white text-center text-5xl'>
                    Joining force for a greener planet: How our <b>Sustainability </b>Website is Bringing Businesses and Customers Together
                </p>
            </div>
        </div>
    </>
    </div>
  )
}

export default BusinessAuth