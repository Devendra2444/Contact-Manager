"use client";
import React, {useEffect, useActionState} from 'react';
import { useRouter } from "next/navigation";
import {ContactType} from "@/app/_types/contact";

type ContactFormProps ={
    action: (prevState: {error?: string; success?: string} | null, formData: FormData) => Promise<{error?: string; success?: string} | null>;
    contact?: ContactType;
};

const ContactForm = ({action, contact}: ContactFormProps) => {
    const router = useRouter();
    const [state, formAction] = useActionState(action, null);
    useEffect(() => {
        if (state?.success) {
            router.push("/contact");
        }
    }, [state, router]);
    return (
        <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{contact ? "Edit Contact" : "New Contact"}</h2>
                <form action={formAction} className="space-y-5">
                    <input type="hidden" name="id" value={contact?.id || ""} />
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={contact?.name || ""}
                            placeholder="Enter your name"
                            required
                            className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={contact?.email || ""}
                            placeholder="Enter email address"
                            required
                            className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors outline-none"
                        />
                    </div>
                    {state?.error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3">
                            {state.error}
                        </div>
                    )}
                    <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity shadow-md">
                        {contact ? "Update Contact" : "Save Contact"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;