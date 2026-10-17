import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from './user-context.js';


const API_URL = "http://localhost:3000";

export function UserProvider({ children }) {
    const [loading, setLoading] = useState(Boolean(localStorage.getItem('token')));
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            return;
        }

        axios.get(`${API_URL}/user/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                const userData = response.data.user;

                setUser({
                    name: userData.name,
                    email: userData.email,
                    profilePic: userData.profilePic || "",
                });
            }).catch((ERr) => {
                console.error("Error Wile Fetching User Data ", ERr);
                // If the fetching is failed then token should be invalid
                localStorage.removeItem('token');

            }).finally(() => {
                setLoading(false);
            });
            
    }, []);

    function login(accessToken, userData) {
        localStorage.setItem('token', accessToken);
        setUser({
            name: userData.name,
            email: userData.email,
            profilePic: userData.profilePic || "",
        });
    }

    async function logout() {
        try {
            await axios.get(`${API_URL}/user/logout`, { withCredentials: true });
        } catch (error) {
            console.error("Logout request failed:", error);
        } finally {
            localStorage.removeItem('token');
            setUser(null);
        }
    }

    return (
        <UserContext.Provider value={{ user, setUser, loading, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}



