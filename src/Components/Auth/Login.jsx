import { LockKeyhole, LogIn, Mail, UserRound } from 'lucide-react'
import React, { useState } from 'react'

const Login = ({ handleLogin, setIsSignup }) => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setemail('')
    setpassword('')
  }

  return (

    <div className='lg:flex scroll flex flex-wrap justify-center h-screen'>
      <div className='flex  lg:flex-wrap items-center lg:justify-center  lg:w-1/2 bg-white'>
        <div className='border-2 border-gray-200 shadow-md lg:p-20 p-6 rounded-xl relative'>
          <form
            onSubmit={(e) => {
              submitHandler(e)
            }}
            className='flex flex-col justify-center items-center'>

            <div className='flex flex-col items-center'>
              <div className='bg-blue-200 rounded-full p-3 '>
                <UserRound className='h-10 w-10' />
              </div>
              <h1 className='text-3xl font-bold text-gray-800 mt-1 '>Welcome Back</h1>
              <p className='text-sm font-semibold text-gray-500 mt-1.5'>Please Login to continue</p>
            </div>

            <div className='relative'>
              <Mail size={20} className='absolute bottom-1 text-violet-400 left-4 -translate-y-1/2' />
              <input required value={email}
                onChange={(e) => {
                  setemail(e.target.value)
                }

                }
                className='border-2  px-12 py-3 font-semibold outline-none bg-transparent  border-gray-500 rounded mt-7 ' type='email' placeholder='Enter your email' />
                
            </div>
           


           <div className='relative'>
               <LockKeyhole size={20} className='absolute bottom-1 text-violet-400 left-4 -translate-y-1/2' />
               <input required value={password}
              value={password}
              onChange={(e) => {
                setpassword(e.target.value)
              }

              }

              className='border-2 px-12 py-3 mt-3  outline-none bg-transparent font-semibold  border-gray-500 rounded' type='password' placeholder='Enter password' />
           </div>
           

           <div className='relative '>
            <LogIn size={20} className='absolute -translate-y-1/2 bottom-0.5 left-20' />
             <button
             className=' px-30 py-3  mt-7 font-semibold  cursor-pointer hover:bg-violet-500 bg-violet-400 rounded '>Log in</button>
           </div>
            <p className="mt-4 text-sm">
              Don't have an account?
              <span
                onClick={() => setIsSignup(true)}
                className="text-violet-400 cursor-pointer ml-1"
              >
                Sign Up
              </span>
            </p>



          </form>
           
           <p className=' flex justify-center text-sm font-semibold mt-8 text-gray-400'>Admin Dashboard</p>
           <p className=' flex justify-center text-sm font-semibold text-gray-400'>Admin-admin@gmail.com</p>
           <p className=' flex justify-center text-sm font-semibold  text-gray-400'>Password :-1234</p>

           


        </div>
        
      </div>
      
      <div className='  lg:w-1/2 bg-cover rounded bg-center ' style={{ backgroundImage: "url('/src/assets/login.png')" }}>

      </div>
    </div>


  )
}

export default Login
