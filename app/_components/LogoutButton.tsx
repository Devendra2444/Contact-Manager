"use client";
import { logoutAction } from "../actions/auth";

const LogoutButton = () => {
    return (
        <button onClick={() => logoutAction()}
                className="px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg transition-colors">
            Logout
        </button>
    );
};

export default LogoutButton;