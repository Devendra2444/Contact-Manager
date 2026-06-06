import React from 'react';
import Link from 'next/link';
import LoginForm from "@/app/_components/LoginForm";

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center min-h-[70vh]">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
                    <p className="text-gray-500 mt-1">Sign in to manage your contacts</p>
                </div>
                <LoginForm />
                <p className="mt-6 text-sm text-gray-500 text-center">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="text-blue-600 font-semibold hover:text-blue-700 underline underline-offset-2">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;