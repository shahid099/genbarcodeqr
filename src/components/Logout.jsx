import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

const Logout = () => {
    const router = useRouter();

    // Function to fetchUser Data from Database
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = async () => {
        const token = localStorage.getItem('token'); // Get the token from local storage
        const response = await fetch('https://barcodeqrapi.onrender.com/user/finduser', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`, // Add token to Authorization header
            },
        })

        const userData = await response.json();
        setUser(userData.user);

    }

    const logoutUpdate = () => {
        localStorage.clear('token');
        toast.success("User logout Successfully!")

        setTimeout(() => {
            router.push('/login');
        }, 6000);
    }

    return (
        <div className='flex justify-center items-center'>
            <div className="toast">
                <ToastContainer />
            </div>
            {
                user ? (
                    <div className="box">
                        <div className='flex h-[40vw] justify-center items-center'>
                            <button 
                                className='px-10 py-2 text-2xl bg-slate-800 text-white rounded-md hover:bg-slate-950' 
                                onClick={logoutUpdate()} >
                                Logout
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="box">
                        <div className='flex h-[40vw] justify-center items-center'>
                            <button 
                                className='px-10 py-2 text-2xl bg-slate-800 text-white rounded-md hover:bg-slate-950' 
                            >
                                User Already Logout 
                            </button>
                        </div>
                    </div>
                )

            }

        </div>
    )
}

export default Logout