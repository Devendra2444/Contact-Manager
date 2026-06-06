import axios from "axios";
import { ContactType } from "@/app/_types/contact";

const API_URL = "http://localhost:3001";

const RESOURCE = "/Contact";

export const getContacts = async (id: string | undefined) => {
    const response = await axios.get(`${API_URL}${RESOURCE}`);
    const contacts: ContactType[] = response.data;
    return contacts.filter((c) => c.userId === id);
};

export const getContactById = async (id: string) => {
    const response = await axios.get(`${API_URL}${RESOURCE}/${id}`);
    return response.data;
};

export const createContact = async (contact: ContactType) => {
    const response = await axios.post(`${API_URL}${RESOURCE}`, contact);
    return response.data;
};

export const updateContact = async (id: string, contact: ContactType) => {
    const response = await axios.put(`${API_URL}${RESOURCE}/${id}`, contact);
    return response.data;
};

export const deleteContact = async (id: string) => {
    const response = await axios.delete(`${API_URL}${RESOURCE}/${id}`);
    return response.data;
};
