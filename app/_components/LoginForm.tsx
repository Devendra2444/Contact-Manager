"use client";
import React from 'react';
import { loginAction } from "@/app/actions/auth";

const LoginForm = () => {
    return (
        <form action={loginAction} className="space-y-5">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors outline-none"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors outline-none"
                />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity shadow-md">
                Sign In
            </button>
        </form>
    );
};

export default LoginForm;