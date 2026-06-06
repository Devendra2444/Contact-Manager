import Link from "next/link";
import { getSession } from "./_lib/session";
import { getContacts } from "./api/contact";

export default async function Home() {
    const user = await getSession();

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-10 text-center">
                    <svg className="w-24 h-24 mx-auto mb-6" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="128" y="32" width="256" height="448" rx="24" fill="url(#grad1)" stroke="#4F46E5" strokeWidth="16" />
                        <rect x="160" y="120" width="192" height="4" rx="2" fill="#C7D2FE" />
                        <rect x="160" y="160" width="160" height="4" rx="2" fill="#C7D2FE" />
                        <rect x="160" y="200" width="176" height="4" rx="2" fill="#C7D2FE" />
                        <rect x="160" y="240" width="144" height="4" rx="2" fill="#C7D2FE" />
                        <circle cx="256" cy="340" r="40" fill="#C7D2FE" />
                        <path d="M200 420c0-30.9 25.1-56 56-56s56 25.1 56 56" stroke="#C7D2FE" strokeWidth="8" strokeLinecap="round" />
                        <rect x="344" y="72" width="56" height="80" rx="8" fill="#6366F1" stroke="#4F46E5" strokeWidth="8" />
                        <rect x="352" y="80" width="40" height="6" rx="3" fill="#C7D2FE" />
                        <rect x="352" y="94" width="28" height="6" rx="3" fill="#C7D2FE" />
                        <rect x="352" y="108" width="34" height="6" rx="3" fill="#C7D2FE" />
                        <defs>
                            <linearGradient id="grad1" x1="128" y1="32" x2="384" y2="480" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6366F1" />
                                <stop offset="1" stopColor="#8B5CF6" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <h1 className="text-3xl font-bold text-gray-900">Contact Manager</h1>
                    <p className="mt-3 text-gray-500">Manage your contacts with ease.</p>
                    <div className="mt-8 flex flex-col gap-3">
                        <Link href="/login" className="block w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-md">
                            Login
                        </Link>
                        <Link href="/register" className="block w-full border border-gray-300 text-gray-700 font-semibold py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const contacts = await getContacts(user.id);
    const totalContacts = contacts.length;

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-500 mt-1">Welcome back, {user.name}</p>
                </div>
                <Link href="/contact/new" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2.5 px-5 rounded-lg hover:opacity-90 transition-opacity shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Contact
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Total Contacts</p>
                            <p className="text-2xl font-bold text-gray-900">{totalContacts}</p>
                        </div>
                    </div>
                </div>

                <Link href="/contact" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">View All</p>
                            <p className="text-sm font-semibold text-gray-900">Contact List</p>
                        </div>
                    </div>
                </Link>

                <Link href="/contact/new" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Quick Action</p>
                            <p className="text-sm font-semibold text-gray-900">New Contact</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Contacts</h2>
                    <Link href="/contact" className="text-sm text-indigo-600 font-medium hover:text-indigo-700">
                        View all
                    </Link>
                </div>
                {totalContacts === 0 ? (
                    <div className="text-center py-10">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </div>
                        <p className="text-gray-500">No contacts yet.</p>
                        <Link href="/contact/new" className="text-indigo-600 font-medium text-sm hover:underline mt-1 inline-block">
                            Add your first contact
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {contacts.slice(0, 5).map((c) => (
                            <div key={c.id} className="flex items-center justify-between py-2 border-b last:border-b-0 border-gray-50">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
                                        {c.name?.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{c.name}</p>
                                        <p className="text-xs text-gray-500">{c.email}</p>
                                    </div>
                                </div>
                                <Link href={`/contact/edit/${c.id}`} className="text-xs text-indigo-600 font-medium hover:underline">
                                    Edit
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};