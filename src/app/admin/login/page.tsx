"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "/admin/dashboard";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl
    });

    if (result?.error) {
      setError("Invalid email or password.");
      return;
    }

    router.push(callbackUrl);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <label className="block text-sm text-slate-700">
        Email
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-brand-500" />
      </label>
      <label className="block text-sm text-slate-700">
        Password
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-brand-500" />
      </label>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button type="submit" className="w-full rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">Login</button>
    </form>
  );
}

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">
        <h1 className="mb-6 text-3xl font-semibold text-slate-900">Admin Login</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
