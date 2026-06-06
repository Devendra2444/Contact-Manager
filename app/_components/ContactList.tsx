import React from 'react';
import { ContactType } from "../_types/contact";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { deleteContactAction } from "../actions/contact";

const avatarColors = ["from-blue-400 to-blue-600", "from-purple-400 to-purple-600", "from-emerald-400 to-emerald-600", "from-rose-400 to-rose-600", "from-amber-400 to-amber-600", "from-cyan-400 to-cyan-600"];

const ContactList = ({contacts}:{contacts: ContactType[]}) => {
    return (
        <div className="grid gap-4">
            {contacts.map((contact, i) => (
                <div key={contact.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-bold text-lg shadow-sm`}>
                                {contact.name?.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">{contact.name}</h3>
                                <p className="text-sm text-gray-500">{contact.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href={`/contact/edit/${contact.id}`}
                                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                Edit
                            </Link>
                            <DeleteButton action={deleteContactAction} contact={contact} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactList;