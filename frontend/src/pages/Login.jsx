import React, { useState } from 'react'

const Login = () => {
  
  const [currentState, setCurrentState] = useState('Sign Up');
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }
  
  return (
    <div>
      <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-8 gap-4 text-gray-800">
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="text-3xl mb-4">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>

        {currentState === 'Login' ? '' : <input type="text" className="w-full rounded-md px-3 py-3 border mb-2 border-gray-800" placeholder="Name" required />}
        
        <input type="email" className="w-full rounded-md px-3 py-3 mb-2 border border-gray-800" placeholder="Email" required/>
        <input type="password" className="w-full rounded-md px-3 py-3 mb-2 border border-gray-800" placeholder="Password" required />
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forgot your Password?</p>
          {
            currentState === 'Login'
              ? <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">Create account</p>
              : <p onClick={() => setCurrentState('Login')} className="cursor-pointer">Login Here</p>
          }
        </div>
        <button className="bg-black text-white rounded-md font-bold my-2 p-3 px-8">{ currentState === 'Login' ? 'Sign In' : 'Sign Up' }</button>
      </form>
      
    </div>
  )
}

export default Login
