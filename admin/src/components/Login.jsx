import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin', { email, password });

            if (response.status === 200) {
                setToken(response.data.token);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }

    }
    return (
        <div className='pt-60 flex items-center justify-center'>
            <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-lg ">
                <h1 className="text-2xl text-red-500 font-bold mx-20 sm:mx-28 mt-3 mb-4">Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className="mb-3 w-80 mt-7 sm:w-96">
                        <p className="text-sm text-gray-700 mb-2">Email Address</p>
                        <input onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700" type="email" placeholder="Enter your email" value={email} />
                    </div>
                    <div className="mb-3 w-80 mt-7 sm:w-96">
                        <p className="text-sm text-gray-700 mb-2">Password</p>
                        <input onChange={(e) => setPass(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700" type="password" placeholder="Enter your Password" value={password} />
                    </div>
                    <div className="mt-7 mx-24 sm:mx-32 mb-3">
                        <button className="bg-black font-bold text-white px-4 py-2 rounded-md active:bg-gray-600" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
