import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

const Logout = () => {
    const router = useRouter();


         // Get the token from local storage
         const token = localStorage.getItem('token');

    const logoutUpdate = (token) => {
        if(token) {
            localStorage.clear('token');
            
                    setTimeout(() => {
                        router.push('/login');
                    }, 6000);
        }
    }

    return (
        <div className='flex justify-center items-center'>
            <div className="toast">
                <ToastContainer />
            </div>
            {
                token ? (
                    <div className="box">
                        <div className='flex h-[40vw] justify-center items-center'>
                            <button 
                                className='px-10 py-2 text-2xl bg-slate-800 text-white rounded-md hover:bg-slate-950' 
                                onClick={logoutUpdate(token)} >
                                Logout
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="box">
                        <div className='flex h-[40vw] justify-center items-center'>
                            User logout Successfully!
                        </div>
                    </div>
                )

            }

        </div>
    )
}

export default Logout