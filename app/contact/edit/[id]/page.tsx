import React, { use } from 'react';
import ContactForm from "@/app/_components/ContactForm";
import { updateContactAction } from "@/app/actions/contact";
import { getContactById } from "@/app/api/contact";

const EditPage = ({params}: {params: Promise<{ id: string}> }) => {
    const { id } = use(params);
    const contact = use(getContactById(id));
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Edit Contact</h1>
            <ContactForm action={updateContactAction} contact={contact} />
        </div>
    );
};

export default EditPage;