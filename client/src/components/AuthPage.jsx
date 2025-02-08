import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
const AuthPage = () =>{

  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const handleAuth = () => {
    navigate("/Home");
  }
  return(
    <div className='h-screen -mt-10'>
      <div className='flex justify-center items-center h-screen '>

        <div className='md:flex bg-green-500 p-10 rounded-4xl'>
          <div className="flex flex-col mr-4">
            <h1 className='mb-6 font-bold text-2xl text-center'>{isLogin? 'LogIn':'SignUp'}</h1>
            <input type="text" placeholder='Email' className=' bg-gray-200 px-4 py-2 rounded-full mb-4 ' />
            <input type="text" placeholder='Password' className=' bg-gray-200 px-4 py-2 rounded-full mb-4 ' />
            <button className=' cursor-pointer border rounded-full border-gray-400 bg-orange-500 py-2 text-white font-semibold'
              onClick={handleAuth}>{isLogin ? 'LogIn' : 'SignUp'}</button>
            <p className='md:hidden mt-4 text-center font-semibold'>{isLogin? 'New to Adoptly?':'Already a member?'} <span onClick={()=>{setIsLogin((value) => !value)}} className='cursor-pointer'>{isLogin? 'SignUp':'LogIn'}</span></p>
          </div>

          <div className="md:flex flex-col hidden">
            <h1 className='mb-6 font-bold text-2xl text-center'>SignUp</h1>
            <input type="text" placeholder='Email' className=' bg-gray-200 px-4 py-2 rounded-full mb-4 ' />
            <input type="text" placeholder='Password' className=' bg-gray-200 px-4 py-2 rounded-full mb-4 ' />
            <button className=' cursor-pointer border rounded-full border-gray-400 bg-green-600 py-2 text-white font-semibold'
              onClick={handleAuth}>SignUp</button>
          </div>
        </div>

      </div>
    </div>
    
  )
}
export default AuthPage;
