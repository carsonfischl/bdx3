import React, { useState } from 'react';

const LoginPage: React.FC = () => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <div className='bg-orange-400 w-screen h-screen flex align-middle justify-center'>
            <form className='w-100 justify-center align-middle mt-40'>
                <div className=''>
                    <label className='text-orange-700 text-4xl my-4'>Email</label>
                    <br />
                    <input 
                    type="email" 
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" required 
                    className='bg-orange-600 text-4xl my-4 rounded-lg text-orange-900 mb-10'/>
                </div>
                <div>
                    <label className='text-orange-700 text-4xl my-4'>Password</label>
                    <br />
                    <input type="password" className='bg-orange-600 text-4xl my-4 rounded-lg text-orange-900'/>
                </div>
                <div className='align-middle justify-center flex mt-8'>
                    <button type="undefined" className='bg-orange-800 hover:bg-orange-900 text-orange-400 rounded-xl text-4xl p-4 m-4 align-middle justify-center ' href="/user/[userId]">Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;