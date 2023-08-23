import React from 'react';
import App from '../App.jsx';
import AppRoutes from "../AppRoutes.jsx";
import { UserProvider } from "../usecontext/context/UserProvider";
import ApiCaller from "../API/ApiCaller.jsx";



const MainApp = () => {
    return (
        <>
            <UserProvider>

                <br />

                <App />

                <br />
                
                <ApiCaller />

                <br />




                <AppRoutes />
                

            </UserProvider>
        </>
    )
}

export default MainApp