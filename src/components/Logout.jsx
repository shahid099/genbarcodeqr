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

        if (response.ok) {
            // router.push('/');
            // toast.success('User login Successfully'); // Show success alert
        } else {
            router.push('/login');
            toast.error('Please login, to use the site.'); // Show error alert
        }

    }

    const logoutUpdate = (user)=> {
        if(user) {
            localStorage.clear('token');
            toast.success("User logout Successfully!")
            router.push('/login');
        } else {
            toast.error("User does't exixt.")
        }
    }

    return (
        <>
            <div className="toast">
                <ToastContainer />
            </div>
            <div className='flex h-[40vw] justify-center items-center'>
                <button className='px-10 py-2 text-2xl bg-slate-800 text-white rounded-md hover:bg-slate-950' onClick={logoutUpdate(user)}>Logout</button>
            </div>
        </>
    )
}

export default Logout