"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function VerifyEmailContent() {
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      fetch("http://localhost:5000/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })
        .then(async (res) => {
          const data = await res.json();
          if (!res.ok) throw new Error(data.message || "Verification failed");
          setMessage(data.message);
        })
        .catch((err) => setMessage(err.message || "Verification failed"));
    }
  }, [searchParams]);

  return (
    <div className="flex w-[100%] h-[40rem] justify-center flex-col items-center gap-3">
      <h1 className="text-3xl">Email Verification</h1>
      <p>{message}</p>
    </div>
  );
}

export default function VerifyEmail() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailContent />
    </Suspense>
  );
}
