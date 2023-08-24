import React from 'react';
import App from '../App.jsx';
import AppRoutes from "../AppRoutes.jsx";
import { UserProvider } from "../usecontext/context/UserProvider";


const MainApp = () => {
    return (
        <>
            <UserProvider>

                <br />

                <App />

                <br />
                

                <br />

                <AppRoutes />
                

            </UserProvider>
        </>
    )
}

export default MainApp