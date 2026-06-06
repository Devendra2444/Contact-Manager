"use server";
import { revalidatePath } from "next/cache";
import { getSession } from "../_lib/session";
import { ContactType } from "../_types/contact";
import { createContact, updateContact, deleteContact } from "../api/contact";

export const createContactAction = async (
    prevState: {error?: string; success?: string} | null,
    formData: FormData
) => {
    if(!formData.get("name") || !formData.get("email")) {
        return { error: "Form data is missing. Please try again." };
    }
    const user = await getSession();
    const newContact: ContactType = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        userId: user?.id,
    };
    try {
        await createContact(newContact);
        revalidatePath("/contact");
        return { success: "Contact created successfully." };
    } catch (error) {
        console.log("Error creating contact: ", error);
        return { error: "Failed to create contact. Please try again." };
    }
};

export const updateContactAction = async (
    prevState: {error?: string; success?: string} | null,
    formData: FormData
) => {
    const id = formData.get("id") as string;
    if(!id || !formData.get("name") || !formData.get("email")) {
        return { error: "Form data is missing. Please try again." };
    }

    const user = await getSession();
    const updatedContact: ContactType = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        userId: user?.id,
    };
    try {
        await updateContact(id, updatedContact);
        revalidatePath("/contact");
        return { success: "Contact updated successfully." };
    } catch (error) {
        console.log("Error updating contact: ", error);
        return { error: "Failed to update contact. Please try again." };
    }
};

export const deleteContactAction = async (
    prevState: {error?: string; success?: string} | null,
    formData: FormData
) => {
    const id = formData.get("id") as string;
    try {
        await deleteContact(id);
        revalidatePath("/contact");
        return { success: "Contact deleted successfully." };
    } catch (error) {
        console.log("Error deleting contact: ", error);
        return { error: "Failed to delete contact. Please try again." };
    }
};