import React, { useContext, useState } from 'react'
import { AuthContext } from '../Contexts/AuthProvider'
import Login from '../Components/Auth/Login'
import { LockKeyhole, LogIn, Mail, SquareUserRound, UserPlus, UserRoundPlus } from 'lucide-react'

const EmpReg = ({ setIsSignup }) => {
    const { userData, setUserData, adminData, setuserData } = useContext(AuthContext)
    const [name, setname] = useState('')
    const [Email, setEmail] = useState('')
    const [password, setpassword] = useState('')



    const submitHandler = (e) => {
        e.preventDefault()

        console.log('form submit');

        const newUser = {
            id: userData.length + 1,
            firstName: name,
            email: Email,
            password: password,
            taskCount: {
                active: 0,
                newTask: 0,
                completedTask: 0,
                failedTask: 0,
            },
            tasks: [],
        };

        const newUserData = [...userData, newUser];

        setUserData(newUserData);

        localStorage.setItem(
            "employees",
            JSON.stringify(newUserData)
        );

        setname("");
        setEmail("");
        setpassword("");





    }


    return (
        <div className='lg:flex scroll flex flex-wrap justify-center h-screen'>
            <div className='flex  lg:flex-wrap items-center lg:justify-center  lg:w-1/2 bg-white '>
                <div className='border-2 border-gray-200 shadow-md lg:p-15 p-6 rounded-xl relative'>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}
                        className='flex flex-col justify-center items-center'>
                        <div className='flex flex-col items-center'>
                            <div className='bg-sky-200 p-4 rounded-full'>
                                <UserRoundPlus className='h-10 w-10' />
                            </div>
                            <h1 className='font-bold mt-3 text-4xl'>Create Account</h1>
                            <p className='text-sm font-semibold mt-2 text-gray-500'>Join us and start managing your task efficiently</p>
                        </div>


                        <div className='relative'>
                            <SquareUserRound size={20} className='absolute text-violet-400 -translate-y-1/2 bottom-1 left-3 ' />
                            <input required value={name} onChange={(e) => { setname(e.target.value) }}
                                className='border-2 mt-7  px-12 py-3  outline-none bg-transparent font-semibold  border-gray-400 rounded  ' type='text' placeholder='Enter username' />
                        </div>

                        <div className='relative'>
                            <Mail size={20} className='absolute text-violet-400 -translate-y-1/2 bottom-1 left-3' />
                            < input required value={Email} onChange={(e) => { setEmail(e.target.value) }}
                                className='border-2 mt-4 px-12 py-3  outline-none bg-transparent font-semibold border-gray-400 rounded  ' type='email' placeholder='Enter gmail' />
                        </div>


                        <div className='relative'>
                            <LockKeyhole size={20} className='absolute text-violet-400 -translate-y-1/2 bottom-1 left-3' />
                            <input required value={password} onChange={(e) => { setpassword(e.target.value) }}
                                className='border-2 mt-4 px-12 py-3  outline-none bg-transparent font-semibold border-gray-400 rounded  ' type='password' placeholder='Enter password' />
                        </div>

                        <div className='relative'>
                            <UserPlus className='absolute -translate-y-1/2 bottom-0.5 left-8 '/>
                            <button
                                className=' px-22 py-3  mt-7 font-semibold  cursor-pointer hover:bg-violet-500 bg-violet-400 rounded '>
                                Create Account</button>
                        </div>


                        <div className='relative'>
                            <LogIn className='absolute -translate-y-1/2 bottom-0.5 left-8' />
                            <button onClick={() => setIsSignup(false)}
                            className=' px-31 py-3  mt-4 font-semibold  cursor-pointer hover:bg-violet-500 bg-violet-400 rounded '>
                                Login</button>

                        </div>

                    </form>
                </div>
            </div>
            <div className='  lg:w-1/2 bg-cover rounded bg-center ' style={{ backgroundImage: "url('./signup.png')" }}>
            </div>
        </div>
    )
}

export default EmpReg
