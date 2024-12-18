"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode"; 
import axios from "axios";
import { useRouter, usePathname } from "next/navigation";

const context = createContext();

export const DataProvider = ({ children }) => {
    const router = useRouter();
    const path = usePathname();
    const [userRole, setUserRole] = useState("");

    const userData = async () => {
        try {
            if (path === "/pages/login") {
                console.log("Skipping token fetch on login page.");
                return;
            }

           
            const response = await axios.get("/api/userData");
            const token = response.data?.token;

            if (!token || typeof token !== "string") {
                console.error("Invalid or missing token in API response.");
                router.push("/pages/login");
                return;
            }
            const { role } = jwtDecode(token);
            setUserRole(role);
            console.log("Decoded role:", role);
        } catch (error) {
            console.error("Error fetching user data:", error.message);
            setUserRole(""); 
            if (path !== "/pages/login") {
                router.push("/pages/login");
            }
        }
    };

    useEffect(() => {
        userData();
    }, [path]); 
    return (
        <context.Provider value={{ userRole, setUserRole }}>
            {children}
        </context.Provider>
    );
};

export const useData = () => useContext(context);
