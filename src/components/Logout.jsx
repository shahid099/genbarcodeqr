import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Loader from './Loader';

const Logout = () => {
    const router = useRouter();

    // Function to fetchUser Data from Database
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = async () => {
        setLoader(true)

        try {

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

        } catch (error) {
            console.log(error.message);
        } finally {
            setLoader(false)
        }

    }
    //  END Function to fetchUser Data from Database

    const logoutUpdate = (user) => {
        if (user) {
            setTimeout(() => {
                localStorage.clear('token');
            }, 2000);

            setTimeout(() => {
                router.push('/login');
            }, 6000);
        }
    }

    return (
        <div className='w-full h-[90vh] flex justify-center items-center'>
            {
                loader ? (
                    <Loader />
                ) : (
                    <div className="box">
                        <div className='flex h-[40vw] justify-center items-center flex-col gap-6 '>
                            <button
                                className='px-10 py-2 text-2xl text-white rounded-md'
                                onClick={logoutUpdate(user)} >
                                User logout Successfully!
                            </button>
                            <div className="login">
                                <Link href="/login" className="px-12 py-3 bg-slate-700 rounded-md text-white text-xl hover:bg-slate-800">
                                    Sign In
                                </Link>
                            </div>
                        </div>
                    </div>
                )

            }

        </div>
    )
}

export default Logout