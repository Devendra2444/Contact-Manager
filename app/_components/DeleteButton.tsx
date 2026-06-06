"use client";
import React, { useActionState } from 'react';
import { ContactType } from "../_types/contact";

type DeleteButtonProps ={
    action: (prevState: {error?: string; success?: string} | null, formData: FormData) => Promise<{error?: string; success?: string} | null>;
    contact?: ContactType;
};
const DeleteButton = ({action, contact}:DeleteButtonProps) => {
    const [, formAction] = useActionState(action, null);
    return (
        <form action={formAction}>
            <input type="hidden" name="id" value={contact?.id} />
            <button
                type="submit"
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                onClick={(e) => {
                    if (!confirm("Are you sure you want to delete this contact?")) {
                        e.preventDefault();
                    }
                }}
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Delete
            </button>
        </form>
    );
};

export default DeleteButton;