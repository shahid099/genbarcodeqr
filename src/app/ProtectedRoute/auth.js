import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function useAuthGuard(redirectTo = '/login') {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        toast('Please login to use the site.');
        router.push(redirectTo);
        return;
      }

      try {
        const response = await fetch('https://barcodeqrapi.onrender.com/user/finduser', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
          },
        });

        const data = await response.json();

        if (response.ok && data.user) {
          setUser(data.user);
        } else {
          toast('Session expired. Please login again.');
          router.push(redirectTo);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        toast('Something went wrong. Please login again.');
        router.push(redirectTo);
      }
    };

    fetchUser();
  }, [router, redirectTo]);

  return { user };
}
