import React from "react";
import Link from "next/link";
import { getSession } from "../_lib/session";
import { getContacts } from "../api/contact";
import ContactList from "../_components/ContactList";

const ContactPage = async () => {
    const user = await getSession();
    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-md">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Access Denied</h2>
                    <p className="text-gray-500 mb-6">Please log in to view your contacts.</p>
                    <Link href="/login" className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2.5 px-6 rounded-lg hover:opacity-90 transition-opacity">
                        Log in
                    </Link>
                </div>
            </div>
        );
    }
    const contacts = await getContacts(user?.id);
    if (!contacts || contacts.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-md">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">No Contacts Yet</h2>
                    <p className="text-gray-500 mb-6">Add your first contact to get started.</p>
                    <Link href="/contact/new" className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2.5 px-6 rounded-lg hover:opacity-90 transition-opacity">
                        + Add Contact
                    </Link>
                </div>
            </div>
        );
    }
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Your Contacts</h1>
                    <p className="text-gray-500 mt-1">{contacts.length} contact{contacts.length !== 1 ? "s" : ""}</p>
                </div>
                <Link href="/contact/new" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2.5 px-5 rounded-lg hover:opacity-90 transition-opacity shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Contact
                </Link>
            </div>
            <ContactList contacts={contacts} />
        </div>
    );
};

export default ContactPage;