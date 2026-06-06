"use server"
import axios from "axios";
import { redirect } from "next/navigation";
import { UserType } from "@/app/_types/user";
import { setSessionCookie, deleteSession } from "@/app/_lib/session";

const API_URL = "http://localhost:3001";

export const loginAction = async (formData: FormData) => {
    try {
        const response = await axios.get(
            `${API_URL}/users?email=${formData.get("email")}`
        );
        const user = response.data[0] as (UserType & { password: string }) | undefined;
        if (!user || user.password !== formData.get("password")) {
            throw new Error("Invalid email or password");
        }

        await setSessionCookie({name: user.name, email: user.email, id: user.id});
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error("Cannot reach server — is json-server running on port 3001?");
        }
        throw new Error("Invalid email or password");
    }
    redirect("/contact");
};
export const logoutAction = async ( ) =>{
    await deleteSession();
    redirect("/login");
};