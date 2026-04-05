import {login,logout,getMe,register} from "../services/auth.api";
import {  useContext, useEffect } from "react";
import { AuthContext } from "../auth.context.jsx";

export const useAuth = () => {
    const context = useContext(AuthContext);

    const {user, loading, setUser, setLoading} = context;

    async function registerUser({username,email,password}) {
        setLoading(true);
        try {
            const data = await register({username,email,password});
            setUser(data.user);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }   
    }

    async function loginUser({username,email,password}) {
        setLoading(true);   
        try {
            const data = await login({username,email,password});
            setUser(data.user);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }   
    }

    async function logoutUser() {   
        setLoading(true);
        try {
            await logout();
            setUser(null);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    async function handleGetMe() {
        setLoading(true);
        try {
            const data = await getMe();
            setUser(data.user);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        handleGetMe();
    }, []);

    return ({
        user,
        loading,
        registerUser,
        loginUser,
        logoutUser,
        handleGetMe
    });
}